import { IoClose } from "react-icons/io5";
import { Label } from "../../../ui/label";
import { Input } from "../../../ui/input";
import { Button } from "../../../ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../../../ui/select"
import { Textarea } from "../../../ui/textarea";
import { MdOutlineFileUpload } from "react-icons/md";



const DepartmentName = [
    { "id": 1, "departmentName": "Mathematics" },
    { "id": 2, "departmentName": "Science" },
    { "id": 3, "departmentName": "English" },
    { "id": 4, "departmentName": "Computer Science" },
    { "id": 5, "departmentName": "History" },
    { "id": 6, "departmentName": "Geography" },
    { "id": 7, "departmentName": "Economics" },
    { "id": 8, "departmentName": "Physical Education" },
    { "id": 9, "departmentName": "Arts" },
    { "id": 10, "departmentName": "Music" }
]

const BranchName = [
    { "id": 1, "branchName": "Mathematics" },
    { "id": 2, "branchName": "Science" },
    { "id": 3, "branchName": "English" },
    { "id": 4, "branchName": "Computer Science" },
    { "id": 5, "branchName": "History" },
    { "id": 6, "branchName": "Geography" },
    { "id": 7, "branchName": "Economics" },
    { "id": 8, "branchName": "Physical Education" },
    { "id": 9, "branchName": "Arts" },
    { "id": 10, "branchName": "Music" }
];



const Add_faculty = () => {
    return (
        <div className="shadow-2xl flex justify-center h-screen items-center relative">
            <div className="bg-card px-10 pt-7 rounded-[10px] w-[27%] relative">
                <div className="flex justify-between">
                    <h1 className='font-semibold text-2xl'>Add Faculty</h1>
                    <p><IoClose className='cursor-pointer text-2xl absolute right-3 top-4' /></p>
                </div>


                {/* start form */}
                <form action="#">
                    {/* Branch Name */}
                    <div className="pt-4">
                        <Label className='font-semibold text-[17px]'>Enter Faculty Name </Label>
                        <Input className='mt-3 bg-primary-foreground border border-black shadow-2xl outline-none focus:outline-none focus:ring-0 focus:border-black focus-visible:ring-0 hover:border-black data-[state=open]:border-black' placeholder='Enter Faculty Name ' name="FacultyName" type='text' required />
                    </div>

                    {/* Department Name */}
                    <div className="pt-4">
                        <Label className='font-semibold text-[17px]'>Select Department Name</Label>
                        <Select onValueChange={(e) => onChangeHandle({ target: { name: 'DepartmentName', value: e } })} required>
                            <SelectTrigger style={{ border: "1px solid black" }} className="w-full bg-white mt-3 border border-black shadow-none outline-none focus:outline-none focus:ring-0 focus:border-black focus-visible:ring-0 hover:border-black data-[state=open]:border-black">
                                <SelectValue placeholder="Select Department Name" />
                            </SelectTrigger>
                            <SelectContent className="bg-secondary">
                                {DepartmentName.map((name) => <SelectItem key={name.id} value={name.departmentName}>{name.departmentName}</SelectItem>)}
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Select Branch */}
                    <div className="pt-4">
                        <Label className='font-semibold text-[17px]'>Select Branch</Label>
                        <Select onValueChange={(e) => onChangeHandle({ target: { name: 'BranchName', value: e } })} required>
                            <SelectTrigger style={{ border: "1px solid black" }} className="w-full bg-white mt-3 border border-black shadow-none outline-none focus:outline-none focus:ring-0 focus:border-black focus-visible:ring-0 hover:border-black data-[state=open]:border-black">
                                <SelectValue placeholder="Select Branch" />
                            </SelectTrigger>
                            <SelectContent className="bg-secondary">
                                {BranchName.map((name) => <SelectItem key={name.id} value={name.branchName}>{name.branchName}</SelectItem>)}
                            </SelectContent>
                        </Select>
                    </div>


                    {/* Upload Photo */}
                    <div className="pt-4">
                        <p className="font-semibold text-[17px]">Upload Photo</p>
                        <Input type="file" id="Mark12Upload" hidden />
                        <Label htmlFor="Mark12Upload">
                            <div className="border-1 border-dotted border-destructive text-center rounded-2xl py-3 cursor-pointer mt-3 w-full">
                                <div className="mx-auto text-2xl flex justify-center">
                                    <MdOutlineFileUpload />
                                </div>
                                <div>
                                    <p className="text-xs pt-2">Drag and Drop your file here or browse</p>
                                </div>
                            </div>
                        </Label>
                    </div>

                    {/* Description */}
                    <div className="pt-4">
                        <Label className='font-semibold text-[17px]'>Enter Description </Label>
                        <Textarea placeholder='Add description of Faculty' className='w-full bg-white mt-3 border border-black shadow-none outline-none focus:outline-none focus:ring-0 focus:border-black focus-visible:ring-0 hover:border-black data-[state=open]:border-black' />
                    </div>

                    <div className='py-8'>
                        <Button className='w-1/2 cursor-pointer'>Create</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Add_faculty