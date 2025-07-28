import { MdOutlineFileDownload } from "react-icons/md";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../../ui/table"
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
];

const TeacherMaterialsCompoent = () => {
    return (
        <div className="bg-background min-h-[50.8vh] flex justify-center py-10">
            <div className="w-[80%]">
                <h1 className="font-bold text-4xl text-center underline">Materials</h1>


                <div className="py-12 drop-shadow-lg shadow-ring">
                    <Table className="bg-white rounded-[7px]">
                        <TableHeader>
                            <TableRow className="border-b border-black">
                                <TableHead className="font-bold text-[17px] py-3">Course code</TableHead>
                                <TableHead className="font-bold text-[17px]">Course  Name</TableHead>
                                <TableHead className="font-bold text-[17px]"> Category</TableHead>
                                <TableHead className="font-bold text-[17px]">Date</TableHead>
                                <TableHead className="font-bold text-[17px]">Description</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {data.map((val, index) => (
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
                </div>



            </div>
        </div>
    )
}

export default TeacherMaterialsCompoent