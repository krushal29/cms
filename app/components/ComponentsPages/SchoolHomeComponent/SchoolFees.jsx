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

const SchoolFees = () => {
  return (
        <div className=" min-h-[45.5vh] flex justify-center py-8">
            <div className="">
                <h1 className="font-bold text-2xl text-center underline underline-offset-4">Fee Structure</h1>
                <p className="pt-3">Explore our transparent and student-friendly fee structure designed to make quality education accessible to all.</p>
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
                                <TableHead className="w-[100px]">Program</TableHead>
                                <TableHead>Duration</TableHead>
                                <TableHead>Tuition Fee</TableHead>
                                <TableHead>Other Fees</TableHead>
                                <TableHead className="text-right">Total Fees</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {[0,1,2,3,4,5,6,7,8].map((val,index)=>(
                                <TableRow key={index}>
                                <TableCell className="font-medium">INV001</TableCell>
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

export default SchoolFees