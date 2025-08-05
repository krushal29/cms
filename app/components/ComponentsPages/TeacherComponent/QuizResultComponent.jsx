import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '../../ui/pagination';
import { Button } from '../../ui/button'
import { Input } from "../../ui/input";

const data = [
  {
    id: 1,
    Subject: 'Data Structures',
    CourseCode: 'CS201',
    Date: '12/03/2025',
    QuizNo: 1,
  },
  {
    id: 2,
    Subject: 'Operating Systems',
    CourseCode: 'CS301',
    Date: '13/03/2025',
    QuizNo: 2,
  },
  {
    id: 3,
    Subject: 'Web Development',
    CourseCode: 'WD101',
    Date: '13/03/2025',
    QuizNo: 3,
  },
  {
    id: 4,
    Subject: 'C++ Programming',
    CourseCode: 'CS105',
    Date: '14/03/2025',
    QuizNo: 4,
  },
  {
    id: 5,
    Subject: 'Machine Learning',
    CourseCode: 'ML401',
    Date: '14/03/2025',
    QuizNo: 5,
  },
  {
    id: 6,
    Subject: 'Cybersecurity',
    CourseCode: 'CS410',
    Date: '15/03/2025',
    QuizNo: 6,
  },
  {
    id: 7,
    Subject: 'Database Management',
    CourseCode: 'DB202',
    Date: '15/03/2025',
    QuizNo: 7,
  },
  {
    id: 8,
    Subject: 'Computer Networks',
    CourseCode: 'CS305',
    Date: '16/03/2025',
    QuizNo: 8,
  },
  {
    id: 9,
    Subject: 'AI & ML',
    CourseCode: 'AI403',
    Date: '16/03/2025',
    QuizNo: 9,
  },
  {
    id: 10,
    Subject: 'Software Engineering',
    CourseCode: 'SE301',
    Date: '17/03/2025',
    QuizNo: 10,
  },
  {
    id: 11,
    Subject: 'Software Engineering',
    CourseCode: 'SE301',
    Date: '17/03/2025',
    QuizNo: 11,
  },
];


const QuizResultComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [Data, setdata] = useState(data);
  const [courseCode, setCourseCode] = useState("");
  const itemsPerPage = 10;



  useEffect(() => {
    if(courseCode!==" "){
      const filterData = data?.filter((val, index) => val.CourseCode.includes(courseCode));
      setdata(filterData);
    }
    else{
      setdata(data);
    }
  }, [courseCode])
  console.log(Data);


  const totalPages = Math.ceil(Data.length / itemsPerPage);
  const paginatedQuiz = Data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );




  return (
    <div className='bg-background min-h-[50.8vh] flex justify-center py-10'>
      <div className='w-[80%]'>
        <h1 className="font-bold text-4xl text-center underline">Quiz Section</h1>

        {/* Filter Data using Course code */}

        <div className="w-1/3 mt-15">
          <Input type="text" className="bg-white border border-black shadow-2xl" placeholder="Enter a Course code" name="courseCode" value={courseCode} onChange={(e) => setCourseCode(e.target.value)} />
        </div>


        <div className="py-10 drop-shadow-lg shadow-ring">
          <Table className="bg-white rounded-[7px]">
            <TableHeader>
              <TableRow className="border-b border-black">
                <TableHead className="font-bold text-[17px]">Sr No.</TableHead>
                <TableHead className="font-bold text-[17px]">Course code</TableHead>
                <TableHead className="font-bold text-[17px]">Subject</TableHead>
                <TableHead className="font-bold text-[17px]">Quiz number</TableHead>
                <TableHead className="font-bold text-[17px]">Date</TableHead>
                <TableHead className="font-bold text-[17px] w-1/9 text-center">View</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedQuiz?.map((val, index) => (
                <TableRow key={index}>
                  <TableCell className="py-3 font-semibold text-[15px]">{index + 1}</TableCell>
                  <TableCell className="font-semibold text-[15px]">{val.CourseCode}</TableCell>
                  <TableCell className="font-semibold text-[15px]">{val.Subject}</TableCell>
                  <TableCell className="font-semibold text-[15px] pl-10">{val.QuizNo}</TableCell>
                  <TableCell className="font-semibold text-[15px]">{val.Date}</TableCell>
                  <TableCell className="font-semibold"><Button className="bg-blue-200 py-0 px-10 text-black hover:bg-blue-200 cursor-pointer text-[18px]" onClick={() => setViewMakrsIntenalMark(true)}>view</Button></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>


        {/* pagination */}
        <Pagination className="mb-10 flex justify-center">
          <PaginationContent>
            {/* Previous */}
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPage > 1) setCurrentPage(currentPage - 1);
                }}
                className="transition-all duration-200 text-foreground hover:bg-muted border border-border rounded-md px-3 py-2 text-[17px]"
              />
            </PaginationItem>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, idx) => (
              <PaginationItem key={idx}>
                <PaginationLink
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage(idx + 1);
                  }}
                  className={`w-10 h-10 flex items-center justify-center rounded-md text-sm font-medium transition-all duration-200 border 
                  ${currentPage === idx + 1
                      ? 'bg-primary text-primary-foreground border-primary shadow-2xl'
                      : 'bg-background text-foreground border-border hover:bg-muted text-[17px]'
                    }`}
                >
                  {idx + 1}
                </PaginationLink>
              </PaginationItem>
            ))}

            {/* Next */}
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                }}
                className="transition-all duration-200 text-foreground hover:bg-muted border border-border rounded-md px-3 py-2 text-[17px]"
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
}

export default QuizResultComponent