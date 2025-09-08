import { IoClose } from "react-icons/io5";
import { Label } from "../../../ui/label";
import { Input } from "../../../ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../../../ui/select"
import { Button } from "../../../ui/button";
import { useState } from "react";



const DepartmentName=[
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

const Branch=[
  { "id": 1, "branchName": "Science Branch" },
  { "id": 2, "branchName": "Commerce Branch" },
  { "id": 3, "branchName": "Arts Branch" },
  { "id": 4, "branchName": "Computer Science Branch" },
  { "id": 5, "branchName": "Humanities Branch" },
  { "id": 6, "branchName": "Mechanical Engineering Branch" },
  { "id": 7, "branchName": "Civil Engineering Branch" },
  { "id": 8, "branchName": "Electrical Engineering Branch" },
  { "id": 9, "branchName": "Biotechnology Branch" },
  { "id": 10, "branchName": "Management Branch" }
]



const CreateBatch = () => {
    const [formData, setFormData] = useState({
        DepartmentName: '',
        BranchName: '',
        Batch: ''
    })

    const onChangeHandle = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    console.log(formData);

    return (
        <div className="shadow-2xl flex justify-center h-screen items-center relative">
            <div className="bg-card px-10 pt-7 rounded-[10px] w-[27%] relative">
                <div className="flex justify-between">
                    <h1 className='font-semibold text-2xl'>Create Batch</h1>
                    <p><IoClose className='cursor-pointer text-2xl absolute right-3 top-4' /></p>
                </div>


                {/* start form */}
                <form action="#">
                    {/* Select Department Name */}
                    <div className="pt-6">
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

                    {/* Branch Coordinator */}
                    <div className="pt-4">
                        <Label className='font-semibold text-[17px]'>Select Branch</Label>
                        <Select onValueChange={(e) => onChangeHandle({ target: { name: 'BranchName', value: e } })} required>
                            <SelectTrigger style={{ border: "1px solid black" }} className="w-full bg-white mt-3 border border-black shadow-none outline-none focus:outline-none focus:ring-0 focus:border-black focus-visible:ring-0 hover:border-black data-[state=open]:border-black">
                                <SelectValue placeholder="Select Branch" />
                            </SelectTrigger>
                            <SelectContent className="bg-secondary">
                                {Branch.map((Branch) => <SelectItem key={Branch.id} value={Branch.branchName}>{Branch.branchName}</SelectItem>)}
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Branch Name */}
                    <div className="pt-4">
                        <Label className='font-semibold text-[17px]'>Enter Batch</Label>
                        <Input className='mt-3 bg-primary-foreground border border-black shadow-2xl outline-none focus:outline-none focus:ring-0 focus:border-black focus-visible:ring-0 hover:border-black data-[state=open]:border-black' placeholder='Enter Branch (i.e 2050)' value={formData.Batch} name="Batch" onChange={onChangeHandle} type='text' required />
                    </div>


                    <div className='py-8'>
                        <Button className='w-1/2 cursor-pointer'>Create</Button>
                    </div> 
                </form>
            </div>
        </div>
    )
}

export default CreateBatch