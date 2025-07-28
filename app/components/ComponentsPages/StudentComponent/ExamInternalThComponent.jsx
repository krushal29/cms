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
import { useState } from "react"
import InternalMarksDistribution from "./InternalMarksDistribution"
import InternalMarksViva from "./InternalMarksViva"


const data = [
    {
        id: 1,
        CourseCode: '2020406',
        CourseName: 'Data Structure',
        Marks: '45/50',
        Credits: 5
    },
    {
        id: 2,
        CourseCode: '2020406',
        CourseName: 'Data Structure',
        Marks: '45/50',
        Credits: 5
    },
    {
        id: 3,
        CourseCode: '2020406',
        CourseName: 'Data Structure',
        Marks: '45/50',
        Credits: 5
    },
    {
        id: 4,
        CourseCode: '2020406',
        CourseName: 'Data Structure',
        Marks: '45/50',
        Credits: 5
    }
]


const Vivadata = [
    {
        id: 1,
        CourseCode: '2020406',
        CourseName: 'Data Structure',
        Marks: '20/25',
        Credits: 5
    },
    {
        id: 2,
        CourseCode: '2020406',
        CourseName: 'Data Structure',
        Marks: '20/25',
        Credits: 5
    },
    {
        id: 3,
        CourseCode: '2020406',
        CourseName: 'Data Structure',
        Marks: '20/25',
        Credits: 5
    },
    {
        id: 4,
        CourseCode: '2020406',
        CourseName: 'Data Structure',
        Marks: '20/25',
        Credits: 5
    }
]


const MidData = [
    {
        id: 1,
        CourseCode: '2020406',
        CourseName: 'Data Structure',
        Marks: '20/20',
        Credits: 5
    },
    {
        id: 2,
        CourseCode: '2020406',
        CourseName: 'Data Structure',
        Marks: '20/20',
        Credits: 5
    },
    {
        id: 3,
        CourseCode: '2020406',
        CourseName: 'Data Structure',
        Marks: '20/20',
        Credits: 5
    },
    {
        id: 4,
        CourseCode: '2020406',
        CourseName: 'Data Structure',
        Marks: '15/20',
        Credits: 5
    }
]
const ExamInternalThComponent = () => {
    const [ViewMarksIntenalMark, setViewMakrsIntenalMark] = useState(false);
    const [ViewMarksDetails, setViewMarksDetails] = useState(false);

    const [Examtype, setExamtype] = useState("Internal");
    const [MarksType, setMarksType] = useState("")


    const onCloseInIntenalMark = () => {
        setViewMakrsIntenalMark(false);
    }

    const OnCloseViewDetails = () => {
        setViewMarksDetails(false);
    }


    console.log("Exam", Examtype);
    return (
        <div className="bg-background min-h-[50.8vh] flex justify-center py-8">
            <div className="w-[80%]">
                <h1 className="font-bold text-4xl text-center underline">Examination Details</h1>
                <div className="flex gap-7 mt-10 w-[75%] ">
                    <div className="w-1/3">
                        <Select>
                            <SelectTrigger style={{ border: "1px solid black" }} className="w-full bg-secondary mt-3 border border-black shadow-none outline-none focus:outline-none focus:ring-0 focus:border-black focus-visible:ring-0 hover:border-black data-[state=open]:border-black">
                                <SelectValue placeholder="Select Sem" />
                            </SelectTrigger>
                            <SelectContent className="bg-secondary">
                                <SelectItem value="Sem 1">Sem 1</SelectItem>
                                <SelectItem value="Sem 2">Sem 2</SelectItem>
                                <SelectItem value="Sem 3">Sem 3</SelectItem>
                                <SelectItem value="Sem 4">Sem 4</SelectItem>
                                <SelectItem value="Sem 5">Sem 5</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="w-1/3">
                        <Select onValueChange={(e) => setExamtype(e)}>
                            <SelectTrigger style={{ border: "1px solid black" }} className="w-full bg-secondary mt-3 border border-black shadow-none outline-none focus:outline-none focus:ring-0 focus:border-black focus-visible:ring-0 hover:border-black data-[state=open]:border-black">
                                <SelectValue placeholder="Select Exam Type" />
                            </SelectTrigger>
                            <SelectContent className="bg-secondary" name="ExamType" >
                                <SelectItem value="Internal" >Internal</SelectItem>
                                <SelectItem value="MidSem">Mid sem</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
        
                    <div className={`w-1/3 ${Examtype=="MidSem"?'hidden':'block'}`}>
                        <Select onValueChange={(e) => setMarksType(e)} >
                            <SelectTrigger style={{ border: "1px solid black" }} className="w-full bg-secondary mt-3 border border-black shadow-none outline-none focus:outline-none focus:ring-0 focus:border-black focus-visible:ring-0 hover:border-black data-[state=open]:border-black">
                                <SelectValue placeholder="Select Marks Type" />
                            </SelectTrigger>
                            <SelectContent className="bg-secondary">
                                <SelectItem value="theory">Theory</SelectItem>
                                <SelectItem value="Viva">Viva</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                </div>
                {Examtype == "Internal" && MarksType == "theory" && <div className="py-10 drop-shadow-lg shadow-ring">
                    <Table className="bg-white rounded-[7px]">
                        <TableHeader>
                            <TableRow className="border-b border-black">
                                <TableHead className="font-bold text-[17px]">Course Code</TableHead>
                                <TableHead className="font-bold text-[17px]">Course Name</TableHead>
                                <TableHead className="font-bold text-[17px]">Credits</TableHead>
                                <TableHead className="font-bold text-[17px]">Marks</TableHead>
                                <TableHead className="font-bold text-[17px] w-1/9 text-center">View</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {data.map((val, index) => (
                                <TableRow key={index}>
                                    <TableCell className="py-3 font-semibold ">{val.CourseCode}</TableCell>
                                    <TableCell className="font-semibold">{val.CourseName}</TableCell>
                                    <TableCell className="font-semibold">{val.Credits}</TableCell>
                                    <TableCell className="font-semibold">{val.Marks}</TableCell>
                                    <TableCell className="font-semibold"><Button className="bg-blue-200 py-0 px-10 text-black hover:bg-blue-200 cursor-pointer text-[18px]" onClick={() => setViewMakrsIntenalMark(true)}>view</Button></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
                }
                {
                    Examtype == "Internal" && MarksType == "Viva" && <div className="py-10 drop-shadow-lg shadow-ring">
                        <Table className="bg-white rounded-[7px]">
                            <TableHeader>
                                <TableRow className="border-b border-black">
                                    <TableHead className="font-bold text-[17px] py-3">Course Code</TableHead>
                                    <TableHead className="font-bold text-[17px]">Course Name</TableHead>
                                    <TableHead className="font-bold text-[17px]">Credits</TableHead>
                                    <TableHead className="font-bold text-[17px]">Marks</TableHead>
                                    <TableHead className="font-bold text-[17px] w-1/9 text-center">View</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {Vivadata.map((val, index) => (
                                    <TableRow key={index}>
                                        <TableCell className="font-semibold py-3">{val.CourseCode}</TableCell>
                                        <TableCell className="font-semibold">{val.CourseName}</TableCell>
                                        <TableCell className="font-semibold">{val.Credits}</TableCell>
                                        <TableCell className="font-semibold">{val.Marks}</TableCell>
                                        <TableCell className="font-semibold"><Button className="bg-blue-200 py-0 px-10 text-black hover:bg-blue-200 cursor-pointer text-[18px]" onClick={() => setViewMarksDetails(true)}>view</Button></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                }


                 {
                    Examtype == "MidSem" && <div className="py-10 drop-shadow-lg shadow-ring">
                        <Table className="bg-white rounded-[7px]">
                            <TableHeader>
                                <TableRow className="border-b border-black">
                                    <TableHead className="font-bold text-[17px] py-3">Course Code</TableHead>
                                    <TableHead className="font-bold text-[17px]">Course Name</TableHead>
                                    <TableHead className="font-bold text-[17px]">Credits</TableHead>
                                    <TableHead className="font-bold text-[17px]">Marks</TableHead>
                                    {/* <TableHead className="font-bold text-[17px] w-1/9 text-center">View</TableHead> */}
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {MidData.map((val, index) => (
                                    <TableRow key={index}>
                                        <TableCell className="font-semibold py-3">{val.CourseCode}</TableCell>
                                        <TableCell className="font-semibold">{val.CourseName}</TableCell>
                                        <TableCell className="font-semibold">{val.Credits}</TableCell>
                                        <TableCell className="font-semibold">{val.Marks}</TableCell>
                                        {/* <TableCell className="font-semibold"><Button className="bg-blue-200 py-0 px-10 text-black hover:bg-blue-200 cursor-pointer text-[18px]" onClick={() => setViewMarksDetails(true)}>view</Button></TableCell> */}
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                }

            </div>
            {
                ViewMarksIntenalMark && <div className="fixed inset-0 backdrop-blur-[1px]"><InternalMarksDistribution OnCloseViewDetails={onCloseInIntenalMark} /></div>
            }
            {ViewMarksDetails && <div className="fixed inset-0 backdrop-blur-[1px]"><InternalMarksViva OnCloseViewDetails={OnCloseViewDetails} /></div>}


        </div>
    )
}

export default ExamInternalThComponent