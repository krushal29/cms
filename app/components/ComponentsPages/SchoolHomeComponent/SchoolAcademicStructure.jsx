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

const SchoolAcademicStructure = () => {
   return (
        <div className=" min-h-[45.5vh] flex justify-center py-8">
            <div className="w-[70%]">
                <h1 className="font-bold text-4xl text-center underline">Academic Structure</h1>
                <p className="pt-3 font-medium text-center">"Discover our well-structured academic framework designed to foster deep learning, skill development, and real-world readiness.</p>
                <div className="pt-8">
                    <Select>
                        <SelectTrigger className="w-full border-none bg-background">
                            <SelectValue placeholder="Select Semester " />
                        </SelectTrigger>
                        <SelectContent className="">
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
                            {[0,1,2,3,4,5,6,7,8].map((val,index)=>(
                                <TableRow key={index}>
                                <TableCell className="">INV001</TableCell>
                                <TableCell>Paid</TableCell>
                                <TableCell>Credit Card</TableCell>
                                <TableCell>Credit Card</TableCell>
                                <TableCell className="text-right">$250.00</TableCell>
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