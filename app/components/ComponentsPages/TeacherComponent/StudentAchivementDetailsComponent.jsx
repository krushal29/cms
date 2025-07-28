import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../../ui/select"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../../ui/table"
import { Button } from '../../ui/button'
import { useEffect, useState } from "react";
import { Input } from "../../ui/input";


const data = [
    {
        id: 1,
        enrollmentNumber: '12302040501027',
        AchivementName: 'Data Structure Hackathon',
        Position: 1,
        Date: '12/2/2024',
        branch: 'Computer Engineering',
        sem: 4
    },
    {
        id: 2,
        enrollmentNumber: '12302040501027',
        AchivementName: 'Web Design Challenge',
        Position: 2,
        Date: '15/2/2024',
        branch: 'Computer Engineering',
        sem: 4
    },
    {
        id: 3,
        enrollmentNumber: '12302040501028',
        AchivementName: 'AI Model Challenge',
        Position: 2,
        Date: '18/3/2024',
        branch: 'Information Technology',
        sem: 6
    },
    {
        id: 4,
        enrollmentNumber: '12302040501028',
        AchivementName: 'AI Ethics Workshop',
        Position: 3,
        Date: '25/3/2024',
        branch: 'Information Technology',
        sem: 6
    },
    {
        id: 5,
        enrollmentNumber: '12302040501029',
        AchivementName: 'Web Dev Sprint',
        Position: 3,
        Date: '5/4/2024',
        branch: 'Computer Engineering',
        sem: 5
    },
    {
        id: 6,
        enrollmentNumber: '12302040501029',
        AchivementName: 'Frontend Battle',
        Position: 1,
        Date: '12/4/2024',
        branch: 'Computer Engineering',
        sem: 5
    },
    {
        id: 7,
        enrollmentNumber: '12302040501030',
        AchivementName: 'Coding Ninja Contest',
        Position: 1,
        Date: '22/5/2024',
        branch: 'Electrical Engineering',
        sem: 6
    },
    {
        id: 8,
        enrollmentNumber: '12302040501030',
        AchivementName: 'Power Systems Quiz',
        Position: 2,
        Date: '30/5/2024',
        branch: 'Electrical Engineering',
        sem: 6
    },
    {
        id: 9,
        enrollmentNumber: '12302040501031',
        AchivementName: 'UI/UX Designathon',
        Position: 4,
        Date: '10/6/2024',
        branch: 'Computer Engineering',
        sem: 3
    },
    {
        id: 10,
        enrollmentNumber: '12302040501031',
        AchivementName: 'App Redesign Sprint',
        Position: 1,
        Date: '18/6/2024',
        branch: 'Computer Engineering',
        sem: 3
    },
    {
        id: 11,
        enrollmentNumber: '12302040501032',
        AchivementName: 'Cybersecurity CTF',
        Position: 2,
        Date: '2/7/2024',
        branch: 'Information Technology',
        sem: 4
    },
    {
        id: 12,
        enrollmentNumber: '12302040501032',
        AchivementName: 'Network Security Quiz',
        Position: 1,
        Date: '10/7/2024',
        branch: 'Information Technology',
        sem: 4
    },
    {
        id: 13,
        enrollmentNumber: '12302040501033',
        AchivementName: 'Robotics Expo',
        Position: 5,
        Date: '18/7/2024',
        branch: 'Mechanical Engineering',
        sem: 7
    },
    {
        id: 14,
        enrollmentNumber: '12302040501033',
        AchivementName: 'Automation Hackathon',
        Position: 3,
        Date: '25/7/2024',
        branch: 'Mechanical Engineering',
        sem: 7
    },
    {
        id: 15,
        enrollmentNumber: '12302040501034',
        AchivementName: 'Machine Learning Bootcamp',
        Position: 3,
        Date: '1/8/2024',
        branch: 'Computer Engineering',
        sem: 8
    },
    {
        id: 16,
        enrollmentNumber: '12302040501034',
        AchivementName: 'ML Model Optimization',
        Position: 2,
        Date: '10/8/2024',
        branch: 'Computer Engineering',
        sem: 8
    },
    {
        id: 17,
        enrollmentNumber: '12302040501035',
        AchivementName: 'Startup Pitch Event',
        Position: 1,
        Date: '12/8/2024',
        branch: 'Electronics and Communication',
        sem: 5
    },
    {
        id: 18,
        enrollmentNumber: '12302040501035',
        AchivementName: 'IoT Challenge',
        Position: 3,
        Date: '18/8/2024',
        branch: 'Electronics and Communication',
        sem: 5
    },
    {
        id: 19,
        enrollmentNumber: '12302040501036',
        AchivementName: 'Open Source Contribution Drive',
        Position: 2,
        Date: '20/8/2024',
        branch: 'Computer Engineering',
        sem: 6
    },
    {
        id: 20,
        enrollmentNumber: '12302040501036',
        AchivementName: 'GitHub Innovation Jam',
        Position: 1,
        Date: '28/8/2024',
        branch: 'Computer Engineering',
        sem: 6
    }
];



const Branch = ["Computer Engineering", "Electronics and Communication", "Mechanical Engineering", "Information Technology", "Electrical Engineering"];




const StudentAchivementDetailsComponent = () => {
    const [selectSem, setSelectSem] = useState("");
    const [selectBranch, setSelectBranch] = useState("");
    const [EnronmentNumber, setEnronmentNumber] = useState("");
    const [filterData, setFilterData] = useState(data);

    useEffect(() => {
        if (selectSem !== "" && selectBranch !== "" && EnronmentNumber.length === 14) {
            console.log(selectSem + selectBranch + EnronmentNumber);
            const filterData = data.filter((val) => val.sem === parseInt(selectSem) && val.branch === selectBranch && val.enrollmentNumber === EnronmentNumber)
            console.log(filterData);

            setFilterData(filterData);
        }
    }, [selectSem, selectBranch, EnronmentNumber])
    return (
        <div className="bg-background min-h-[50.8vh] flex justify-center py-8">
            <div className="w-[80%]">
                <h1 className="font-bold text-4xl text-center underline">Student Achivement Details</h1>

                {/* filter */}
                <div className="flex items-center  gap-7 mt-10 w-[75%] ">
                    <div className="w-1/3">
                        <Select onValueChange={(e) => setSelectSem(e)}>
                            <SelectTrigger style={{ border: "1px solid black" }} className="w-full bg-secondary mt-3 border border-black shadow-none outline-none focus:outline-none focus:ring-0 focus:border-black focus-visible:ring-0 hover:border-black data-[state=open]:border-black">
                                <SelectValue placeholder="Select Sem" />
                            </SelectTrigger>
                            <SelectContent className="bg-secondary">
                                <SelectItem value="1">Sem 1</SelectItem>
                                <SelectItem value="2">Sem 2</SelectItem>
                                <SelectItem value="3">Sem 3</SelectItem>
                                <SelectItem value="4">Sem 4</SelectItem>
                                <SelectItem value="5">Sem 5</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="w-1/3">
                        <Select onValueChange={(e) => setSelectBranch(e)}>
                            <SelectTrigger style={{ border: "1px solid black" }} className="w-full bg-secondary mt-3 border border-black shadow-none outline-none focus:outline-none focus:ring-0 focus:border-black focus-visible:ring-0 hover:border-black data-[state=open]:border-black">
                                <SelectValue placeholder="Select Branch" />
                            </SelectTrigger>
                            <SelectContent className="bg-secondary" name="ExamType" >
                                {Branch.map((val, index) => {
                                    return (
                                        <SelectItem key={index} value={val}>{val}</SelectItem>
                                    )
                                })}
                            </SelectContent>
                        </Select>
                    </div>

                    <div className={`w-1/3`}>
                        <Input className="border border-black shadow-none outline-none focus:outline-none focus:ring-0 focus:border-black focus-visible:ring-0 hover:border-black data-[state=open]:border-black w-full bg-secondary mt-3" placeholder="Enter Enrollment Number" onChange={(e) => setEnronmentNumber(e.target.value)} value={EnronmentNumber} />
                    </div>
                </div>
                {/* End of Filter */}


                {/* table */}
                {(selectSem !== "" && selectBranch !== "" && EnronmentNumber.length === 14) && <div className="py-10 drop-shadow-lg shadow-ring">
                    <Table className="bg-white rounded-[7px]">
                        <TableHeader>
                            <TableRow className="border-b border-black">
                                <TableHead className="font-bold text-[17px]">Sr. No.</TableHead>
                                <TableHead className="font-bold text-[17px]">Achivement Name</TableHead>
                                <TableHead className="font-bold text-[17px]">Position</TableHead>
                                <TableHead className="font-bold text-[17px]">Date</TableHead>
                                <TableHead className="font-bold text-[17px] w-1/9 text-center">View</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filterData.map((val, index) => (
                                <TableRow key={index}>
                                    <TableCell className="py-3 font-semibold ">{index + 1}</TableCell>
                                    <TableCell className="font-semibold">{val.AchivementName}</TableCell>
                                    <TableCell className="font-semibold">{val.Position}</TableCell>
                                    <TableCell className="font-semibold">{val.Date}</TableCell>
                                    <TableCell className="font-semibold"><Button className="bg-blue-200 py-0 px-10 text-black hover:bg-blue-200 cursor-pointer text-[18px]" onClick={() => setViewMakrsIntenalMark(true)}>view</Button></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>}

                {/* End of table */}

            </div>
        </div>
    )
}

export default StudentAchivementDetailsComponent