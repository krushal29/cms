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


const placementData = [
  { id: 1, branch: "Computer Science", students: 78, package: "₹12.5 LPA", company: "Google, Microsoft, Amazon" },
  { id: 2, branch: "Information Technology", students: 65, package: "₹10.8 LPA", company: "Infosys, TCS, Cognizant" },
  { id: 3, branch: "Electronics & Communication", students: 50, package: "₹8.6 LPA", company: "Qualcomm, Intel" },
  { id: 4, branch: "Mechanical Engineering", students: 40, package: "₹6.2 LPA", company: "L&T, Tata Motors" },
  { id: 5, branch: "Electrical Engineering", students: 45, package: "₹7.0 LPA", company: "Siemens, ABB" },
  { id: 6, branch: "Civil Engineering", students: 30, package: "₹5.4 LPA", company: "L&T Construction" },
  { id: 7, branch: "AI & Data Science", students: 55, package: "₹11.2 LPA", company: "Adobe, ZS Associates" },
  { id: 8, branch: "Cybersecurity", students: 42, package: "₹9.4 LPA", company: "Capgemini, EY" },
  { id: 9, branch: "MBA - Marketing", students: 60, package: "₹14.1 LPA", company: "Deloitte, JP Morgan" },
  { id: 10, branch: "MBA - Finance", students: 58, package: "₹13.6 LPA", company: "Goldman Sachs, Barclays" },
  { id: 11, branch: "BCA", students: 70, package: "₹6.8 LPA", company: "Wipro, HCL" },
  { id: 12, branch: "MCA", students: 65, package: "₹9.0 LPA", company: "Oracle, Dell" },
  { id: 13, branch: "Data Analytics", students: 52, package: "₹10.3 LPA", company: "Mu Sigma, Fractal" },
  { id: 14, branch: "Robotics Engineering", students: 28, package: "₹8.9 LPA", company: "Boston Dynamics, ABB Robotics" },
  { id: 15, branch: "Software Engineering", students: 75, package: "₹11.7 LPA", company: "Google, Atlassian" },
  { id: 16, branch: "Blockchain Technology", students: 33, package: "₹13.5 LPA", company: "Polygon, Binance" },
  { id: 17, branch: "Game Development", students: 20, package: "₹7.5 LPA", company: "Ubisoft, EA Sports" },
  { id: 18, branch: "Cloud Computing", students: 44, package: "₹9.9 LPA", company: "AWS, Azure, Google Cloud" },
  { id: 19, branch: "IoT Engineering", students: 38, package: "₹8.1 LPA", company: "Bosch, Honeywell" },
  { id: 20, branch: "Bioinformatics", students: 25, package: "₹7.3 LPA", company: "Novartis, MedGenome" }
];


const SchoolPlacement = () => {

    return (
        <div className="min-h-[45.5vh] flex justify-center py-10 pb-18">
            <div className="w-[70%]">
                <h1 className="font-bold text-4xl text-center underline">Placement Statistics</h1>
                <p className="pt-4 font-medium text-center">Comprehensive placement data across all schools and programs at Grand Valley College</p>
                <div className="pt-10">
                    <Select>
                        <SelectTrigger className="w-full border-none bg-background">
                            <SelectValue placeholder="select Program" />
                        </SelectTrigger>
                        <SelectContent>
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
                            {placementData.map((val,index)=>(
                                <TableRow key={index} className="border-b border-gray-400">
                                <TableCell className="p-2">{val.branch}</TableCell>
                                <TableCell>{val.students}</TableCell>
                                <TableCell>{val.package}</TableCell>
                                <TableCell className="text-right">{val.company}</TableCell>
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