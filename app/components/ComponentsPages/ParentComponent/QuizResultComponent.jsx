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
import { useEffect, useState } from "react";


const Data = [
    {
        id: 1,
        CourseCode: '2020406',
        CourseName: 'Data Structure',
        Marks: '20/25',
        Credits: 5,
        Sem: 1
    },
    {
        id: 2,
        CourseCode: '2020412',
        CourseName: 'Operating Systems',
        Marks: '18/25',
        Credits: 4,
        Sem: 2
    },
    {
        id: 3,
        CourseCode: '2020455',
        CourseName: 'Database Management',
        Marks: '22/25',
        Credits: 5,
        Sem: 3
    },
    {
        id: 4,
        CourseCode: '2020461',
        CourseName: 'Computer Networks',
        Marks: '19/25',
        Credits: 4,
        Sem: 4
    },
    {
        id: 5,
        CourseCode: '2020470',
        CourseName: 'Artificial Intelligence',
        Marks: '24/25',
        Credits: 5,
        Sem: 5
    },
    {
        id: 6,
        CourseCode: '2020410',
        CourseName: 'Software Engineering',
        Marks: '21/25',
        Credits: 3,
        Sem: 6
    },
    {
        id: 7,
        CourseCode: '2020422',
        CourseName: 'Machine Learning',
        Marks: '23/25',
        Credits: 5,
        Sem: 7
    },
    {
        id: 8,
        CourseCode: '2020433',
        CourseName: 'Web Technologies',
        Marks: '17/25',
        Credits: 4,
        Sem: 8
    },
    {
        id: 9,
        CourseCode: '2020480',
        CourseName: 'Cyber Security',
        Marks: '20/25',
        Credits: 4,
        Sem: 8
    },
    {
        id: 10,
        CourseCode: '2020499',
        CourseName: 'Cloud Computing',
        Marks: '25/25',
        Credits: 5,
        Sem: 8
    }
];



const QuizResultComponent = () => {
    const [QuizData, setQuizData] = useState(Data);
    const [QuizBySem, setQuizBySem] = useState("");
    const [QuizByCourseName, setQuizByCourseName] = useState("");

    // filter Course Name
    const filterCourseName = Data.map((val) => val.CourseName).filter((val) => val == val);


    useEffect(() => {
        if (QuizByCourseName != "" && QuizBySem != "") {
            const filterData=QuizData.filter((val)=>val.CourseName.includes(QuizByCourseName)&&val.Sem==parseInt(QuizBySem))
            setQuizData(filterData)
        }
    }, [QuizByCourseName, QuizBySem])


    return (
        <div className='bg-background min-h-[50.8vh] flex justify-center py-10'>
            <div className='w-[80%]'>
                <h1 className="font-bold text-4xl text-center underline">Quiz Section</h1>

                {/* filter */}
                <div className="flex gap-2 mt-10 items-center">
                    <div className="w-1/4">
                        <Select name="CourseName" onValueChange={(e) => setQuizBySem(e)}>
                            <SelectTrigger style={{ border: "1px solid black" }} className="w-full bg-secondary mt-3 border border-black shadow-none outline-none focus:outline-none focus:ring-0 focus:border-black focus-visible:ring-0 hover:border-black data-[state=open]:border-black">
                                <SelectValue placeholder="Select Sem" />
                            </SelectTrigger>
                            <SelectContent className="bg-secondary border border-black">
                                {[1, 2, 3, 4, 5, 6, 7, 8].map((val, index) => (
                                    <SelectItem value={val} key={index}>{val}</SelectItem>
                                ))}

                            </SelectContent>
                        </Select>
                    </div>
                    <div className="w-1/4">
                        <Select name="CourseName" onValueChange={(e) => setQuizByCourseName(e)}>
                            <SelectTrigger style={{ border: "1px solid black" }} className="w-full bg-secondary mt-3 border border-black shadow-none outline-none focus:outline-none focus:ring-0 focus:border-black focus-visible:ring-0 hover:border-black data-[state=open]:border-black">
                                <SelectValue placeholder="Select Course Name" />
                            </SelectTrigger>
                            <SelectContent className="bg-secondary border border-black">
                                {filterCourseName.map((val, index) => (
                                    <SelectItem value={val} key={index}>{val}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>


                {/* table */}
                <div className="py-10 drop-shadow-lg shadow-ring">
                    <Table className="bg-white rounded-[7px]">
                        <TableHeader>
                            <TableRow className="border-b border-black">
                                <TableHead className="font-bold text-[17px]">Sr No.</TableHead>
                                <TableHead className="font-bold text-[17px]">Course Code</TableHead>
                                <TableHead className="font-bold text-[17px]">Course Name</TableHead>
                                <TableHead className="font-bold text-[17px]">Credits</TableHead>
                                <TableHead className="font-bold text-[17px]">Marks</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {QuizData.map((val, index) => (
                                <TableRow key={index}>
                                    <TableCell className="py-3 font-semibold">{index + 1}</TableCell>
                                    <TableCell className="font-semibold">{val.CourseCode}</TableCell>
                                    <TableCell className="font-semibold">{val.CourseName}</TableCell>
                                    <TableCell className="font-semibold">{val.Credits}</TableCell>
                                    <TableCell className="font-semibold">{val.Marks}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    )
}

export default QuizResultComponent