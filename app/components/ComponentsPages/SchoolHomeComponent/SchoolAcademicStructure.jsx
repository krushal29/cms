import { useEffect, useState } from "react"
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


const data=[
     { id: 1, sem: 1, code: "CS101", title: "Introduction to Programming", theory: 3, practical: 2, credit: 4 },
  { id: 2, sem: 2, code: "CS102", title: "Data Structures", theory: 4, practical: 1, credit: 4 },
  { id: 3, sem: 3, code: "CS103", title: "Computer Networks", theory: 3, practical: 2, credit: 4 },
  { id: 4, sem: 4, code: "CS104", title: "Database Systems", theory: 3, practical: 1, credit: 3 },
  { id: 5, sem: 5, code: "CS105", title: "Operating Systems", theory: 4, practical: 1, credit: 4 },
  { id: 6, sem: 6, code: "CS106", title: "Software Engineering", theory: 3, practical: 2, credit: 4 },
  { id: 7, sem: 1, code: "CS107", title: "Artificial Intelligence", theory: 3, practical: 0, credit: 3 },
  { id: 8, sem: 2, code: "CS108", title: "Machine Learning", theory: 3, practical: 2, credit: 4 },
  { id: 9, sem: 3, code: "CS109", title: "Web Technologies", theory: 2, practical: 2, credit: 3 },
  { id: 10, sem: 4, code: "CS110", title: "Mobile App Development", theory: 3, practical: 1, credit: 3 },
  { id: 11, sem: 5, code: "CS111", title: "Cybersecurity", theory: 3, practical: 1, credit: 3 },
  { id: 12, sem: 6, code: "CS112", title: "Cloud Computing", theory: 4, practical: 0, credit: 3 },
  { id: 13, sem: 1, code: "CS113", title: "Discrete Mathematics", theory: 3, practical: 0, credit: 3 },
  { id: 14, sem: 2, code: "CS114", title: "Linear Algebra", theory: 3, practical: 0, credit: 3 },
  { id: 15, sem: 3, code: "CS115", title: "Probability & Statistics", theory: 3, practical: 1, credit: 3 },
  { id: 16, sem: 4, code: "CS116", title: "Engineering Graphics", theory: 2, practical: 2, credit: 3 },
  { id: 17, sem: 5, code: "CS117", title: "Digital Logic Design", theory: 3, practical: 1, credit: 3 },
  { id: 18, sem: 6, code: "CS118", title: "Computer Architecture", theory: 4, practical: 1, credit: 4 },
  { id: 19, sem: 1, code: "CS119", title: "Compiler Design", theory: 3, practical: 2, credit: 4 },
  { id: 20, sem: 2, code: "CS120", title: "Project Management", theory: 2, practical: 0, credit: 2 }
]

const SchoolAcademicStructure = () => {
    const [AcaData,setAcaData]=useState(data);
    const [selectSem,setSelectSem]=useState(null);


    useEffect(()=>{
        if(selectSem==null){
            setAcaData(data)
            return
        }
        const FilterData=data.filter((val)=>val.sem==selectSem)
        setAcaData(FilterData);
    },[selectSem])

   return (
        <div className=" min-h-screen flex justify-center py-8 ">
            <div className="w-[70%]">
                <h1 className="font-bold text-4xl text-center underline">Academic Structure</h1>
                <p className="pt-3 font-medium text-center">"Discover our well-structured academic framework designed to foster deep learning, skill development, and real-world readiness.</p>
                <div className="pt-8">
                    <Select onValueChange={(e)=>setSelectSem(e)}>
                        <SelectTrigger className="w-full border-none bg-background">
                            <SelectValue placeholder="Select Semester " />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="1">1</SelectItem>
                            <SelectItem value="2">2</SelectItem>
                            <SelectItem value="3">3</SelectItem>
                            <SelectItem value="4">4</SelectItem>
                            <SelectItem value="5">5</SelectItem>
                            <SelectItem value="6">6</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="py-10">
                    <Table className="bg-background rounded-[7px]">
                        <TableHeader>
                            <TableRow>
                                <TableHead className="font-semibold text-[17px]">Course Code</TableHead>
                                <TableHead className="font-semibold text-[17px]">Title</TableHead>
                                <TableHead className="font-semibold text-[17px]">Theory(Hrs)</TableHead>
                                <TableHead className="font-semibold text-[17px]">Practical(Hrs)</TableHead>
                                <TableHead className="font-semibold text-right text-[17px]">Credit</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {AcaData.map((val,index)=>(
                                <TableRow key={index}>
                                <TableCell className="">{val.code}</TableCell>
                                <TableCell>{val.title}</TableCell>
                                <TableCell>{val.theory}</TableCell>
                                <TableCell>{val.practical}</TableCell>
                                <TableCell className="text-right">{val.credit}</TableCell>
                            </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    )
}

export default SchoolAcademicStructure