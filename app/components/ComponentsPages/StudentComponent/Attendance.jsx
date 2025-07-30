import { useState } from "react"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../../ui/table"
import StudentAttendancePopup from "./StudentAttendancePopup"

const attendanceData = [
  {
    id: 1,
    courseCode: "CS101",
    courseName: "Data Structures",
    from: "01/07/2025",
    to: "25/07/2025",
    presentOutOf: "21/24"
  },
  {
    id: 2,
    courseCode: "CS102",
    courseName: "Operating Systems",
    from: "01/07/2025",
    to: "25/07/2025",
    presentOutOf: "20/24"
  },
  {
    id: 3,
    courseCode: "CS103",
    courseName: "Database Systems",
    from: "01/07/2025",
    to: "25/07/2025",
    presentOutOf: "23/24"
  },
  {
    id: 4,
    courseCode: "CS104",
    courseName: "Computer Networks",
    from: "01/07/2025",
    to: "25/07/2025",
    presentOutOf: "19/24"
  },
  {
    id: 5,
    courseCode: "CS105",
    courseName: "Software Engineering",
    from: "01/07/2025",
    to: "25/07/2025",
    presentOutOf: "22/24"
  },
  {
    id: 6,
    courseCode: "CS106",
    courseName: "Web Technologies",
    from: "01/07/2025",
    to: "25/07/2025",
    presentOutOf: "18/24"
  },
  {
    id: 7,
    courseCode: "CS107",
    courseName: "Machine Learning",
    from: "01/07/2025",
    to: "25/07/2025",
    presentOutOf: "20/24"
  },
  {
    id: 8,
    courseCode: "CS108",
    courseName: "Cloud Computing",
    from: "01/07/2025",
    to: "25/07/2025",
    presentOutOf: "21/24"
  },
  {
    id: 9,
    courseCode: "CS109",
    courseName: "Cyber Security",
    from: "01/07/2025",
    to: "25/07/2025",
    presentOutOf: "22/24"
  },
  {
    id: 10,
    courseCode: "CS110",
    courseName: "Compiler Design",
    from: "01/07/2025",
    to: "25/07/2025",
    presentOutOf: "19/24"
  }
];


const Attendance = () => {
    const [showAttendance, setShowAttendance] = useState(false);



    const onCloseHandle=()=>setShowAttendance(false);

    return (
        <div className="bg-background min-h-[50.8vh] flex justify-center py-10">
            <div className="w-[80%]">
                <h1 className="font-bold text-4xl text-center underline">Attendance</h1>

                <h1>Add</h1>

                <div className="py-10 drop-shadow-lg shadow-ring">
                    <Table className="bg-white rounded-[7px]">
                        <TableHeader>
                            <TableRow>
                                <TableHead className="font-semibold text-[17px]">Course Code</TableHead>
                                <TableHead className="font-semibold text-[17px]">Course Name</TableHead>
                                <TableHead className="font-semibold text-[17px] pl-4">From</TableHead>
                                <TableHead className="font-semibold text-[17px] pl-8">To</TableHead>
                                <TableHead className="font-semibold text-[17px]">Present out of</TableHead>
                                <TableHead className="font-semibold text-[17px] text-center">Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {attendanceData.map((val, index) => (
                                <TableRow key={index}>
                                    <TableCell className="py-2">{val.courseCode}</TableCell>
                                    <TableCell>{val.courseName}</TableCell>
                                    <TableCell>{val.from}</TableCell>
                                    <TableCell>{val.to}</TableCell>
                                    <TableCell className="pl-8">{val.presentOutOf}</TableCell>
                                    <TableCell><p className="bg-blue-200 text-primary rounded-2xl cursor-pointer py-1.5 text-center" onClick={() => setShowAttendance(true)}>View</p></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>

            {showAttendance &&<div className="fixed inset-0 backdrop-blur-[1px]"><StudentAttendancePopup onCloseHandle={onCloseHandle}/></div>}
        </div>
    )
}

export default Attendance