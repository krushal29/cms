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
    Name: 'Krushal Patel',
    Subject: 'Data Structures',
    Marks: '22/25',
    Date: '12/03/2025',
  },
  {
    id: 2,
    Name: 'Ayesha Khan',
    Subject: 'Operating Systems',
    Marks: '18/25',
    Date: '13/03/2025',
  },
  {
    id: 3,
    Name: 'Ravi Mehta',
    Subject: 'Web Development',
    Marks: '20/25',
    Date: '13/03/2025',
  },
  {
    id: 4,
    Name: 'Sneha Verma',
    Subject: 'C++ Programming',
    Marks: '25/25',
    Date: '14/03/2025',
  },
  {
    id: 5,
    Name: 'Krushal Bhadiyadra',
    Subject: 'Machine Learning',
    Marks: '24/25',
    Date: '14/03/2025',
  },
  {
    id: 6,
    Name: 'Jay Shah',
    Subject: 'Cybersecurity',
    Marks: '17/25',
    Date: '15/03/2025',
  },
  {
    id: 7,
    Name: 'Ritika Gupta',
    Subject: 'Database Management',
    Marks: '21/25',
    Date: '15/03/2025',
  },
  {
    id: 8,
    Name: 'Anil Yadav',
    Subject: 'Computer Networks',
    Marks: '19/25',
    Date: '16/03/2025',
  },
  {
    id: 9,
    Name: 'Priya Desai',
    Subject: 'AI & ML',
    Marks: '23/25',
    Date: '16/03/2025',
  },
  {
    id: 10,
    Name: 'Vikram Chauhan',
    Subject: 'Software Engineering',
    Marks: '20/25',
    Date: '17/03/2025',
  },
];

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