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
                    <label htmlFor="" className='font-semibold text-[17px]'>Achievement Title <span className='text-[#DE0D0D]'>*</span></label>
                    <Input className='mt-3 bg-primary-foreground' placeholder='Enter Achievement Title' type='text' />
                </div>
                <div className='pt-4'>
                    <label htmlFor="" className='font-semibold text-[17px]'>Achievement Type</label>
                    <Input className='mt-3 bg-primary-foreground' placeholder='Enter Achievement Type (i.e ,  Academic)' type='text' />
                </div>

                <div className='pt-4'>
                    <label htmlFor="" className='font-semibold text-[17px]'>Date</label>
                    <input
                        type="date"
                        className="w-full pl-3 mt-3 pr-4 py-2 bg-primary-foreground border border-gray-300 rounded-md text-right placeholder:text-left"
                        placeholder="Select date"
                    />
                </div>


                <div className='pt-4'>
                    <label htmlFor="" className='font-semibold text-[17px]'>Provide Reason</label>
                    <Textarea placeholder='Please Provide Valid reason for your Leave Application' className='mt-3 bg-primary-foreground' />
                </div>


                <div className='pt-4'>
                    <label htmlFor="" className='font-semibold text-[17px]'>Upload Certificate</label>
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