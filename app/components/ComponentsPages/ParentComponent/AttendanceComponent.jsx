import { useEffect, useState } from "react"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../../ui/table"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../../ui/select"

const attendanceData = [
    {
        id: 1,
        semester: 4,
        courseCode: "CS101",
        courseName: "Data Structures",
        from: "01/07/2025",
        to: "25/07/2025",
        presentOutOf: "21/24"
    },
    {
        id: 2,
        semester: 5,
        courseCode: "CS102",
        courseName: "Operating Systems",
        from: "01/07/2025",
        to: "25/07/2025",
        presentOutOf: "20/24"
    },
    {
        id: 3,
        semester: 4,
        courseCode: "CS103",
        courseName: "Database Systems",
        from: "01/07/2025",
        to: "25/07/2025",
        presentOutOf: "23/24"
    },
    {
        id: 4,
        semester: 4,
        courseCode: "CS104",
        courseName: "Computer Networks",
        from: "01/07/2025",
        to: "25/07/2025",
        presentOutOf: "19/24"
    },
    {
        id: 5,
        semester: 5,
        courseCode: "CS105",
        courseName: "Software Engineering",
        from: "01/07/2025",
        to: "25/07/2025",
        presentOutOf: "22/24"
    },
    {
        id: 6,
        semester: 6,
        courseCode: "CS106",
        courseName: "Web Technologies",
        from: "01/07/2025",
        to: "25/07/2025",
        presentOutOf: "18/24"
    },
    {
        id: 7,
        semester: 6,
        courseCode: "CS107",
        courseName: "Machine Learning",
        from: "01/07/2025",
        to: "25/07/2025",
        presentOutOf: "20/24"
    },
    {
        id: 8,
        semester: 6,
        courseCode: "CS108",
        courseName: "Cloud Computing",
        from: "01/07/2025",
        to: "25/07/2025",
        presentOutOf: "21/24"
    },
    {
        id: 9,
        semester: 6,
        courseCode: "CS109",
        courseName: "Cyber Security",
        from: "01/07/2025",
        to: "25/07/2025",
        presentOutOf: "22/24"
    },
    {
        id: 10,
        semester: 6,
        courseCode: "CS110",
        courseName: "Compiler Design",
        from: "01/07/2025",
        to: "25/07/2025",
        presentOutOf: "19/24"
    },
    {
        id: 11,
        semester: 7,
        courseCode: "CS201",
        courseName: "Big Data Analytics",
        from: "01/07/2025",
        to: "25/07/2025",
        presentOutOf: "20/24"
    },
    {
        id: 12,
        semester: 7,
        courseCode: "CS202",
        courseName: "Blockchain Technology",
        from: "01/07/2025",
        to: "25/07/2025",
        presentOutOf: "23/24"
    },
    {
        id: 13,
        semester: 1,
        courseCode: "CS203",
        courseName: "Augmented Reality",
        from: "01/07/2025",
        to: "25/07/2025",
        presentOutOf: "22/24"
    },
    {
        id: 14,
        semester: 1,
        courseCode: "CS204",
        courseName: "Natural Language Processing",
        from: "01/07/2025",
        to: "25/07/2025",
        presentOutOf: "21/24"
    },
    {
        id: 15,
        semester: 7,
        courseCode: "CS205",
        courseName: "DevOps",
        from: "01/07/2025",
        to: "25/07/2025",
        presentOutOf: "20/24"
    },
    {
        id: 16,
        semester: 2,
        courseCode: "CS206",
        courseName: "Edge Computing",
        from: "01/07/2025",
        to: "25/07/2025",
        presentOutOf: "19/24"
    },
    {
        id: 17,
        semester: 2,
        courseCode: "CS207",
        courseName: "Quantum Computing",
        from: "01/07/2025",
        to: "25/07/2025",
        presentOutOf: "18/24"
    },
    {
        id: 18,
        semester: 8,
        courseCode: "CS208",
        courseName: "IoT Systems",
        from: "01/07/2025",
        to: "25/07/2025",
        presentOutOf: "21/24"
    },
    {
        id: 19,
        semester: 8,
        courseCode: "CS209",
        courseName: "Robotic Process Automation",
        from: "01/07/2025",
        to: "25/07/2025",
        presentOutOf: "23/24"
    },
    {
        id: 20,
        semester: 8,
        courseCode: "CS210",
        courseName: "Agile Project Management",
        from: "01/07/2025",
        to: "25/07/2025",
        presentOutOf: "22/24"
    }
];

const AttendanceComponent = () => {
    const [filterDataBySem, setsemfilterDataBySem] = useState(attendanceData);
    const [showAttendance, setShowAttendance] = useState(false);
    const [selectSem, setSelectSem] = useState("5");


    useEffect(() => {
        const filter = attendanceData.filter((val) => val.semester === parseInt(selectSem));
        setsemfilterDataBySem(filter);
    }, [selectSem])


    const onCloseHandle = () => setShowAttendance(false);

    return (
        <div className="bg-background min-h-[50.8vh] flex justify-center py-10">
            <div className="w-[80%]">
                <h1 className="font-bold text-4xl text-center underline">Attendance</h1>

                {/* filter */}
                <div className="mt-15">
                    <Select onValueChange={(e) => setSelectSem(e)} value={selectSem}>
                        <SelectTrigger style={{ border: "1px solid black" }} className="w-1/3 bg-secondary mt-3 border border-black shadow-none outline-none focus:outline-none focus:ring-0 focus:border-black focus-visible:ring-0 hover:border-black data-[state=open]:border-black shadow-2xl">
                            <SelectValue placeholder="Select Sem">
                                {selectSem ? `Select Sem ${selectSem}` : "Select Sem"}
                            </SelectValue>
                        </SelectTrigger>
                        <SelectContent className="bg-secondary shadow-2xl">
                            <SelectItem value="1">1</SelectItem>
                            <SelectItem value="2">2</SelectItem>
                            <SelectItem value="3">3</SelectItem>
                            <SelectItem value="4">4</SelectItem>
                            <SelectItem value="5">5</SelectItem>
                            <SelectItem value="6">6</SelectItem>
                            <SelectItem value="7">7</SelectItem>
                            <SelectItem value="8">8</SelectItem>
                        </SelectContent>
                    </Select>
                </div>


                <div className="py-8 drop-shadow-lg shadow-ring">
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
                            {filterDataBySem.map((val, index) => (
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


            {/* {showAttendance && <div className="fixed inset-0 backdrop-blur-[1px]"><StudentAttendancePopup onCloseHandle={onCloseHandle} /></div>} */}
        </div>
    )
}

export default AttendanceComponent