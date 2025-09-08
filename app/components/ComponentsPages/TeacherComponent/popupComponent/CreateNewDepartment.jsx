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



const SchoolName = [
    { "id": 1, "schoolName": "Green Valley Public School" },
    { "id": 2, "schoolName": "Sunrise International Academy" },
    { "id": 3, "schoolName": "Silver Oak High School" },
    { "id": 4, "schoolName": "Bright Future Convent School" },
    { "id": 5, "schoolName": "Riverdale Model School" },
    { "id": 6, "schoolName": "Starlight English Medium School" },
    { "id": 7, "schoolName": "Wisdom Tree Academy" },
    { "id": 8, "schoolName": "Horizon Public School" },
    { "id": 9, "schoolName": "Maple Leaf International School" },
    { "id": 10, "schoolName": "Bluebell Secondary School" }
]


const DepartmentHead = [
    { "id": 1, "department": "Mathematics", "head": "Dr. Ananya Sharma" },
    { "id": 2, "department": "Science", "head": "Mr. Rajesh Mehta" },
    { "id": 3, "department": "English", "head": "Ms. Priya Nair" },
    { "id": 4, "department": "Computer Science", "head": "Mr. Arjun Patel" },
    { "id": 5, "department": "History", "head": "Dr. Kavita Deshmukh" },
    { "id": 6, "department": "Geography", "head": "Ms. Ritu Verma" },
    { "id": 7, "department": "Economics", "head": "Dr. Sandeep Kulkarni" },
    { "id": 8, "department": "Physical Education", "head": "Mr. Vivek Kumar" },
    { "id": 9, "department": "Arts", "head": "Ms. Sneha Joshi" },
    { "id": 10, "department": "Music", "head": "Mr. Nikhil Menon" }
]




const CreateNewDepartment = () => {
    const [formData,setFormData]=useState({
        SchoolName:'',
        DepartmentName:'',
        DepartmentHead:''
    })

    const onChangeHandle=(e)=>{
        const {name,value}=e.target;
        setFormData({...formData,[name]:value})
    }

    console.log(formData);

    return (
        <div className="shadow-2xl flex justify-center h-screen items-center relative">
            <div className="bg-card px-10 pt-7 rounded-[10px] w-[27%] relative">
                <div className="flex justify-between">
                    <h1 className='font-semibold text-2xl'>Create New Department</h1>
                    <p><IoClose className='cursor-pointer text-2xl absolute right-3 top-4' /></p>
                </div>


                {/* start form */}
                <form action="#">
                    {/* Select School Name */}
                    <div className="pt-6">
                        <Label className='font-semibold text-[17px]'>Select School Name</Label>
                        <Select onValueChange={(e)=>onChangeHandle({target:{name:'SchoolName',value:e}})}>
                            <SelectTrigger style={{ border: "1px solid black" }} className="w-full bg-white mt-3 border border-black shadow-none outline-none focus:outline-none focus:ring-0 focus:border-black focus-visible:ring-0 hover:border-black data-[state=open]:border-black">
                                <SelectValue placeholder="Select School Name" />
                            </SelectTrigger>
                            <SelectContent className="bg-secondary">
                                {SchoolName.map((name) => <SelectItem key={name.id} value={name.schoolName}>{name.schoolName}</SelectItem>)}
                            </SelectContent>
                        </Select>
                    </div>
                    {/* Department Name */}
                    <div className="pt-4">
                        <Label className='font-semibold text-[17px]'>Enter Department Name</Label>
                        <Input className='mt-3 bg-primary-foreground border border-black shadow-2xl outline-none focus:outline-none focus:ring-0 focus:border-black focus-visible:ring-0 hover:border-black data-[state=open]:border-black' placeholder='Enter Department Name' value={formData.DepartmentName} name="DepartmentName" onChange={onChangeHandle} type='text' required />
                    </div>
                    {/* Department Head */}
                    <div className="pt-4">
                        <Label className='font-semibold text-[17px]'>Select Department Head</Label>
                        <Select onValueChange={(e)=>onChangeHandle({target:{name:'DepartmentHead',value:e}})}>
                            <SelectTrigger style={{ border: "1px solid black" }} className="w-full bg-white mt-3 border border-black shadow-none outline-none focus:outline-none focus:ring-0 focus:border-black focus-visible:ring-0 hover:border-black data-[state=open]:border-black">
                                <SelectValue placeholder="Select Head Name" />
                            </SelectTrigger>
                            <SelectContent className="bg-secondary">
                                {DepartmentHead.map((head) => <SelectItem key={head.id} value={head.head}>{head.head}</SelectItem>)}
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

export default CreateNewDepartment