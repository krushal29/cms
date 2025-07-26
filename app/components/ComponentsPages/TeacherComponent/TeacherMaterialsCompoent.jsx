import { MdOutlineFileDownload } from "react-icons/md";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../../ui/table"
const data=[
    {
        id:1,
        CourseCode:20201041,
        CourseName:"DS",
        Categoty:"Programing",
        Des:"I am krushal",
        Date:"29/08/2005"
    }, {
        id:1,
        CourseCode:20201041,
        CourseName:"DS",
        Categoty:"Programing",
        Des:"I am krushal",
        Date:"29/08/2005"
    }, {
        id:1,
        CourseCode:20201041,
        CourseName:"DS",
        Categoty:"Programing",
        Des:"I am krushal",
        Date:"29/08/2005"
    }, {
        id:1,
        CourseCode:20201041,
        CourseName:"DS",
        Categoty:"Programing",
        Des:"I am krushal",
        Date:"29/08/2005"
    }
]
const TeacherMaterialsCompoent = () => {
    return (
        <div className="bg-background min-h-[50.8vh] flex justify-center py-10">
            <div className="w-[80%]">
                <h1 className="font-bold text-4xl text-center underline">Materials</h1>


                <div className="py-10 drop-shadow-lg shadow-ring">
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