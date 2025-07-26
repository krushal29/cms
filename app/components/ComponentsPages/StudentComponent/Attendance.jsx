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


const Attendance = () => {
    const [showAttendance, setShowAttendance] = useState(false);



    const onCloseHandle=()=>setShowAttendance(false);

    return (
        <div className="bg-background min-h-[50.8vh] flex justify-center py-10">
            <div className="w-[80%]">
                <h1 className="font-bold text-4xl text-center underline">Attendance</h1>

                <div className="py-10 drop-shadow-lg shadow-ring">
                    <Table className="bg-white rounded-[7px]">
                        <TableHeader>
                            <TableRow>
                                <TableHead className="font-semibold text-[17px]">Course Code</TableHead>
                                <TableHead className="font-semibold text-[17px]">Course Name</TableHead>
                                <TableHead className="font-semibold text-[17px]">From</TableHead>
                                <TableHead className="font-semibold text-[17px]">To</TableHead>
                                <TableHead className="font-semibold text-[17px]">Present out of</TableHead>
                                <TableHead className="font-semibold text-[17px] text-center">Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((val, index) => (
                                <TableRow key={index}>
                                    <TableCell className="py-3">Table item title</TableCell>
                                    <TableCell>Table item title</TableCell>
                                    <TableCell>Table item title</TableCell>
                                    <TableCell>Table item title</TableCell>
                                    <TableCell>Table item title</TableCell>
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