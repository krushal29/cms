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



const BrachCoordinator=[
  { "id": 1, "branch": "Mathematics", "coordinator": "Prof. Neha Gupta" },
  { "id": 2, "branch": "Science", "coordinator": "Dr. Ramesh Iyer" },
  { "id": 3, "branch": "English", "coordinator": "Mr. Sanjay Kapoor" },
  { "id": 4, "branch": "Computer Science", "coordinator": "Ms. Aarti Mishra" },
  { "id": 5, "branch": "History", "coordinator": "Prof. Alok Verma" },
  { "id": 6, "branch": "Geography", "coordinator": "Dr. Meenal Joshi" },
  { "id": 7, "branch": "Economics", "coordinator": "Mr. Deepak Shah" },
  { "id": 8, "branch": "Physical Education", "coordinator": "Ms. Kavya Reddy" },
  { "id": 9, "branch": "Arts", "coordinator": "Prof. Manish Tandon" },
  { "id": 10, "branch": "Music", "coordinator": "Dr. Shweta Menon" }
]




const CreateBranch = () => {
    const [formData, setFormData] = useState({
        DepartmentName: '',
        BranchName: '',
        BranchCoordinator: ''
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
                    <h1 className='font-semibold text-2xl'>Create New Branch</h1>
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
                    {/* Branch Name */}
                    <div className="pt-4">
                        <Label className='font-semibold text-[17px]'>Enter Branch Name</Label>
                        <Input className='mt-3 bg-primary-foreground border border-black shadow-2xl outline-none focus:outline-none focus:ring-0 focus:border-black focus-visible:ring-0 hover:border-black data-[state=open]:border-black' placeholder='Enter Branch Name' value={formData.BranchName} name="BranchName" onChange={onChangeHandle} type='text' required />
                    </div>
                    {/* Branch Coordinator */}
                    <div className="pt-4">
                        <Label className='font-semibold text-[17px]'>Select Branch Coordinator</Label>
                        <Select onValueChange={(e) => onChangeHandle({ target: { name: 'BranchCoordinator', value: e } })} required>
                            <SelectTrigger style={{ border: "1px solid black" }} className="w-full bg-white mt-3 border border-black shadow-none outline-none focus:outline-none focus:ring-0 focus:border-black focus-visible:ring-0 hover:border-black data-[state=open]:border-black">
                                <SelectValue placeholder="Select Branch Coordinator" />
                            </SelectTrigger>
                            <SelectContent className="bg-secondary">
                                {BrachCoordinator.map((Coordinator) => <SelectItem key={Coordinator.id} value={Coordinator.coordinator}>{Coordinator.coordinator}</SelectItem>)}
                            </SelectContent>
                        </Select>
                    </div>

                    <div className='py-8'>
                        <Button className='w-1/2 cursor-pointer'>Create</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateBranch