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

const SchoolPlacement = () => {
    return (
        <div className="min-h-[45.5vh] flex justify-center py-10 pb-18">
            <div className="w-[70%]">
                <h1 className="font-bold text-4xl text-center underline">Placement Statistics</h1>
                <p className="pt-4 font-medium text-center">Comprehensive placement data across all schools and programs at Grand Valley College</p>
                <div className="pt-10">
                    <Select>
                        <SelectTrigger className="w-full border-none bg-background">
                            <SelectValue placeholder="Theme" />
                        </SelectTrigger>
                        <SelectContent className="">
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="pt-10 drop-shadow-lg shadow-ring">
                    <Table className="bg-background rounded-[7px]">
                        <TableHeader>
                            <TableRow className="border-b-2 border-gray-800">
                                <TableHead className="p-2">Branch</TableHead>
                                <TableHead>No. of Students</TableHead>
                                <TableHead>Package</TableHead>
                                <TableHead className="text-right">Company</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {[0,1,2,3,4,5,6,7,8].map((val,index)=>(
                                <TableRow key={index} className="border-b border-gray-400">
                                <TableCell className="p-2">INV001</TableCell>
                                <TableCell>Paid</TableCell>
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

export default SchoolPlacement