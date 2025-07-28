import { Button } from '../../ui/button'
import { Input } from '../../ui/input'
import { IoClose } from "react-icons/io5";
import { Label } from '../../ui/label';
import { MdOutlineFileUpload } from "react-icons/md";
import { Textarea } from '../../ui/textarea'
import { useState } from 'react';


const AddAchievements = ({onCloseAchievement}) => {
    const [form,setForm]=useState({
        
    })

    const onChangeHandle=(e)=>{
        const {name,value}=e.target;

        setForm({...form,[name]:value})
    }

    console.log(form);
    return (
        <div className='shadow-2xl flex justify-center h-screen items-center relative '>
            <div className='bg-card  px-10 pt-7 rounded-[10px] w-[34%] relative h-[90%] overflow-y-scroll'>
                <div className='flex justify-between'>
                    <h1 className='font-semibold text-2xl'>Add Achievements</h1>
                    <p><IoClose className='cursor-pointer text-2xl absolute right-3 top-4' onClick={onCloseAchievement} /></p>
                </div>
                <div className='pt-6'>
                    <Label htmlFor="" className='font-semibold text-[17px]'>Achievement Title <span className='text-[#DE0D0D]'>*</span></Label>
                    <Input className='mt-3 bg-primary-foreground' placeholder='Enter achievement title' type='text' />
                </div>
                <div className='pt-4'>
                    <Label htmlFor="" className='font-semibold text-[17px]'>Achievement Type <span className='text-[#DE0D0D]'>*</span></Label>
                    <Input className='mt-3 bg-primary-foreground' placeholder='Enter achievement type (e.g., Academic)' type='text' />
                </div>
                <div className='pt-4'>
                    <Label htmlFor="" className='font-semibold text-[17px]'>Location <span className='text-[#DE0D0D]'>*</span></Label>
                    <Input className='mt-3 bg-primary-foreground' placeholder='Enter Location' type='text' />
                </div>
                <div className='pt-4'>
                    <Label htmlFor="" className='font-semibold text-[17px]'>Organised By <span className='text-[#DE0D0D]'>*</span></Label>
                    <Input className='mt-3 bg-primary-foreground' placeholder='Enter organizer name' type='text' />
                </div>

                <div className='pt-4'>
                    <Label htmlFor="" className='font-semibold text-[17px]'>Date <span className='text-[#DE0D0D]'>*</span></Label>
                    <input
                        type="date"
                        className="w-full pl-3 mt-3 pr-4 py-2 bg-primary-foreground border border-gray-300 rounded-md text-right placeholder:text-left"
                        placeholder="Select date"
                    />
                </div>


                <div className='pt-4'>
                    <Label htmlFor="" className='font-semibold text-[17px]'>Provide Reason <span className='text-[#DE0D0D]'>*</span></Label>
                    <Textarea placeholder='Please provide details about the achievement' className='mt-3 bg-primary-foreground' />
                </div>


                <div className='pt-4'>
                    <Label htmlFor="" className='font-semibold text-[17px]'>Upload Certificate <span className='text-[#DE0D0D]'>*</span> </Label>
                    <Input type="file" id="GujcetUpload" hidden />
                    <Label htmlFor="GujcetUpload">
                        <div className="border-1 border-dotted border-destructive text-center rounded-[5px] py-3 cursor-pointer mt-2 w-full">
                            <div className="mx-auto text-2xl flex justify-center">
                                <MdOutlineFileUpload />
                            </div>
                            <div>
                                <p className="text-xs pt-2">Drag and Drop your file here or browse</p>
                            </div>
                        </div>
                    </Label>
                </div>


                <div className='py-8'>
                    <Button className='w-full cursor-pointer'>Submit</Button>
                </div>
            </div>
        </div>
    )
}

export default AddAchievements