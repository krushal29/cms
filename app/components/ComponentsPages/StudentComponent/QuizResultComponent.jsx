import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../../ui/table"



const Quizdata = [
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

const QuizResultComponent = () => {
    return (
        <div className='bg-background min-h-[50.8vh] flex justify-center py-10'>
            <div className='w-[80%]'>
                <h1 className="font-bold text-4xl text-center underline">Quiz Section</h1>

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
                            {Quizdata.map((val, index) => (
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