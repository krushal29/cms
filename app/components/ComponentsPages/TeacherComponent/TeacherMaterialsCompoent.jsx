import { useState } from 'react';
import { Button } from '../../ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table"
import AddMaterialsPopup from './AddMaterialsPopup';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../../ui/pagination";



const data = [
  {
    id: 1,
    CourseCode: 20201041,
    CourseName: "Data Structures",
    Categoty: "Programming",
    Des: "Stacks, Queues, Trees, and Graphs",
    Date: "12/03/2024",
  },
  {
    id: 2,
    CourseCode: 20201042,
    CourseName: "Computer Networks",
    Categoty: "Networking",
    Des: "TCP/IP model and network layers explained",
    Date: "15/04/2024",
  },
  {
    id: 3,
    CourseCode: 20201043,
    CourseName: "Operating Systems",
    Categoty: "System Software",
    Des: "Process management, Scheduling, Deadlocks",
    Date: "20/04/2024",
  },
  {
    id: 4,
    CourseCode: 20201044,
    CourseName: "DBMS",
    Categoty: "Database",
    Des: "ER Models, SQL Queries, Normalization",
    Date: "25/04/2024",
  },
  {
    id: 5,
    CourseCode: 20201045,
    CourseName: "Web Development",
    Categoty: "Frontend",
    Des: "HTML, CSS, JavaScript, React",
    Date: "02/05/2024",
  },
  {
    id: 6,
    CourseCode: 20201046,
    CourseName: "Machine Learning",
    Categoty: "AI",
    Des: "Supervised and unsupervised learning",
    Date: "12/05/2024",
  },
  {
    id: 7,
    CourseCode: 20201047,
    CourseName: "Compiler Design",
    Categoty: "Theory",
    Des: "Lexical Analysis, Parsing, Syntax Trees",
    Date: "18/05/2024",
  },
  {
    id: 8,
    CourseCode: 20201048,
    CourseName: "Cloud Computing",
    Categoty: "Cloud",
    Des: "AWS, Azure, Virtualization, SaaS",
    Date: "22/05/2024",
  },
  {
    id: 9,
    CourseCode: 20201049,
    CourseName: "Cyber Security",
    Categoty: "Security",
    Des: "Cryptography, Network Security, Firewalls",
    Date: "26/05/2024",
  },
  {
    id: 10,
    CourseCode: 20201050,
    CourseName: "Software Engineering",
    Categoty: "Development",
    Des: "SDLC, Agile, Testing and Maintenance",
    Date: "30/05/2024",
  },
  {
    id: 11,
    CourseCode: 20201050,
    CourseName: "Software Engineering",
    Categoty: "Development",
    Des: "SDLC, Agile, Testing and Maintenance",
    Date: "30/05/2024",
  },
];


const TeacherMaterialsCompoent = () => {
  const [showAddMaterial, setShowAddMaterial] = useState(false);
  const [materialForm,setMaterialForm]=useState({
    CourseCode:'',
    CourseName:'',
    Title:'',
    Date:'',
    UploadDoc:''
  })


  const onAddMaterialClose = () => setShowAddMaterial(false);
  const onChangeMaterial=(e)=>{
    const {name,value}=e.target;
    setMaterialForm({...materialForm,[name]:value});
  }

  const onFileUpload=(e)=>{
    const {name}=e.target.files[0];
    setMaterialForm({...materialForm,"UploadDoc":name});
  }
  const SubmitMaterial=(e)=>{
    e.preventDefault();
    try{
      console.log(materialForm);
    }catch(e){
      console.log(e);
    }
  }

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const paginatedMaterial = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="bg-background min-h-[50.8vh] flex justify-center py-10">
      <div className="w-[80%]">
        <h1 className="font-bold text-4xl text-center underline">Materials</h1>

        {/* Add Materials */}
        <div className="pt-15">
          <Button className="text-[18px] py-5 px-10 cursor-pointer" onClick={() => setShowAddMaterial(true)}>Add material</Button>
        </div>


      {/* table material show */}
        <div className="py-10 drop-shadow-lg shadow-ring">
          <Table className="bg-white rounded-[7px]">
            <TableHeader>
              <TableRow className="border-b border-black">
                <TableHead className="font-bold text-[17px] py-3">Course code</TableHead>
                <TableHead className="font-bold text-[17px]">Course  Name</TableHead>
                <TableHead className="font-bold text-[17px]"> Category</TableHead>
                <TableHead className="font-bold text-[17px]">Date</TableHead>
                <TableHead className="font-bold text-[17px]" >Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedMaterial.map((val, index) => (
                <TableRow key={index}>
                  <TableCell className="py-3 font-semibold">{val.CourseCode}</TableCell>
                  <TableCell className="font-semibold">{val.CourseName} </TableCell>
                  <TableCell className="font-semibold">{val.Categoty}</TableCell>
                  <TableCell className="font-semibold">{val.Date}</TableCell>
                  <TableCell className="font-semibold">{val.Des}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>


          {/* pagination */}
          <Pagination className="mt-8 flex justify-center">
            <PaginationContent>

              {/* Previous */}
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage > 1) setCurrentPage(currentPage - 1);
                  }}
                  className="transition-all duration-200 text-foreground hover:bg-mutedborder border-border rounded-md px-3 py-2 text-[17px]"
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
                        ? "bg-primary text-primary-foreground border-primary shadow-2xl"
                        : "bg-background text-foreground border-border hover:bg-muted text-[17px]"
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
                  className="transition-all duration-200 text-foreground hover:bg-muted border border- rounded-md px-3 py-2 text-[17px]"
                />
              </PaginationItem>

            </PaginationContent>
          </Pagination>
        </div>
      </div>

      {/* popup */}
      {
        showAddMaterial && <div className='fixed inset-0 backdrop-blur-[1px]'><AddMaterialsPopup onAddMaterialClose={onAddMaterialClose} onChangeMaterial={onChangeMaterial} SubmitMaterial={SubmitMaterial} materialForm={materialForm} onFileUpload={onFileUpload}/></div>
      }
    </div>
  )
}

export default TeacherMaterialsCompoent