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
        Name: 'Krushal patel',
        Subject: 'Data Structure',
        Marks: '20/25',
        Date: "12/3/2025"
    },
    {
        id: 2,
        Name: 'xyz',
        Subject: 'Data Structure',
        Marks: '20/25',
        Date: "12/3/2025"
    },
    {
        id: 3,
        Name: 'Krushal',
        Subject: 'Data Structure',
        Marks: '20/25',
        Date: "12/3/2025"
    },
    {
        id: 4,
        Name: 'Krushal',
        Subject: 'Data Structure',
        Marks: '20/25',
        Date: "12/3/2025"
    },
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
                                <TableHead className="font-bold text-[17px]">Name</TableHead>
                                <TableHead className="font-bold text-[17px]">Subject</TableHead>
                                <TableHead className="font-bold text-[17px]">marks</TableHead>
                                <TableHead className="font-bold text-[17px]">Date</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {Quizdata.map((val, index) => (
                                <TableRow key={index}>
                                    <TableCell className="py-3 font-semibold text-[15px]">{index + 1}</TableCell>
                                    <TableCell className="font-semibold text-[15px]">{val.Name}</TableCell>
                                    <TableCell className="font-semibold text-[15px]">{val.Subject}</TableCell>
                                    <TableCell className="font-semibold text-[15px]">{val.Marks}</TableCell>
                                    <TableCell className="font-semibold text-[15px]">{val.Date}</TableCell>
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