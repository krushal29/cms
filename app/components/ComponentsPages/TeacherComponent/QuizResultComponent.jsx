import { useState } from "react";
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


const data = [
  {
    id: 1,
    Name: 'Krushal Patel',
    Subject: 'Data Structures',
    Marks: '22/25',
    Date: '12/03/2025',
  },
  {
    id: 2,
    Name: 'Ayesha Khan',
    Subject: 'Operating Systems',
    Marks: '18/25',
    Date: '13/03/2025',
  },
  {
    id: 3,
    Name: 'Ravi Mehta',
    Subject: 'Web Development',
    Marks: '20/25',
    Date: '13/03/2025',
  },
  {
    id: 4,
    Name: 'Sneha Verma',
    Subject: 'C++ Programming',
    Marks: '25/25',
    Date: '14/03/2025',
  },
  {
    id: 5,
    Name: 'Krushal Bhadiyadra',
    Subject: 'Machine Learning',
    Marks: '24/25',
    Date: '14/03/2025',
  },
  {
    id: 6,
    Name: 'Jay Shah',
    Subject: 'Cybersecurity',
    Marks: '17/25',
    Date: '15/03/2025',
  },
  {
    id: 7,
    Name: 'Ritika Gupta',
    Subject: 'Database Management',
    Marks: '21/25',
    Date: '15/03/2025',
  },
  {
    id: 8,
    Name: 'Anil Yadav',
    Subject: 'Computer Networks',
    Marks: '19/25',
    Date: '16/03/2025',
  },
  {
    id: 9,
    Name: 'Priya Desai',
    Subject: 'AI & ML',
    Marks: '23/25',
    Date: '16/03/2025',
  },
  {
    id: 10,
    Name: 'Vikram Chauhan',
    Subject: 'Software Engineering',
    Marks: '20/25',
    Date: '17/03/2025',
  },
  {
    id: 11,
    Name: 'Vikram Chauhan',
    Subject: 'Software Engineering',
    Marks: '20/25',
    Date: '17/03/2025',
  },
];

const QuizResultComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const paginatedQuiz = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  return (
    <div className='bg-background min-h-[50.8vh] flex justify-center py-10'>
      <div className='w-[80%]'>
        <h1 className="font-bold text-4xl text-center underline">Quiz Section</h1>
        <div className="py-10 drop-shadow-lg shadow-ring">
          <Table className="bg-white rounded-[7px]">
            <TableHeader>
              <TableRow className="border-b border-black">
                <TableHead className="font-bold text-[17px]">Sr No.</TableHead>
                <TableHead className="font-bold text-[17px]">Name</TableHead>
                <TableHead className="font-bold text-[17px]">Subject</TableHead>
                <TableHead className="font-bold text-[17px]">marks</TableHead>
                <TableHead className="font-bold text-[17px]">Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedQuiz.map((val, index) => (
                <TableRow key={index}>
                  <TableCell className="py-3 font-semibold text-[15px]">{index + 1}</TableCell>
                  <TableCell className="font-semibold text-[15px]">{val.Name}</TableCell>
                  <TableCell className="font-semibold text-[15px]">{val.Subject}</TableCell>
                  <TableCell className="font-semibold text-[15px]">{val.Marks}</TableCell>
                  <TableCell className="font-semibold text-[15px]">{val.Date}</TableCell>
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