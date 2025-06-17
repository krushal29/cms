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
        <div className=" min-h-[45.5vh] flex justify-center py-8">
            <div className="">
                <h1 className="font-bold text-2xl text-center underline">Placement Statistics</h1>
                <p className="pt-3">Comprehensive placement data across all schools and programs at Grand Valley College</p>
                <div className="pt-8">
                    <Select>
                        <SelectTrigger className="w-full bg-background">
                            <SelectValue placeholder="Theme" />
                        </SelectTrigger>
                        <SelectContent className="bg-background">
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="pt-8">
                    <Table className="bg-background rounded-[7px]">
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">Branch</TableHead>
                                <TableHead>No. of Students</TableHead>
                                <TableHead>Package</TableHead>
                                <TableHead className="text-right">Company</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {[0,1,2,3,4,5,6,7,8].map((val,index)=>(
                                <TableRow key={index}>
                                <TableCell className="font-medium">INV001</TableCell>
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