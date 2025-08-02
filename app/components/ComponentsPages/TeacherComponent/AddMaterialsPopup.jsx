import { Button } from '../../ui/button'
import { Input } from '../../ui/input'
import { IoClose } from "react-icons/io5";
import { Label } from '../../ui/label';
import { useState } from 'react';
import { MdOutlineFileUpload } from "react-icons/md";
const AddMaterialsPopup = ({ onAddMaterialClose, onChangeMaterial, SubmitMaterial, materialForm ,onFileUpload}) => {
    return (
        <div className='shadow-2xl flex justify-center h-screen items-center relative '>
            <div className='bg-card  px-10 pt-7 rounded-[10px] w-[34%] relative h-[90%] overflow-y-scroll drop-shadow-2xl shadow-ring'>
                <div className='flex justify-between'>
                    <h1 className='font-semibold text-2xl'>Add Material</h1>
                    <p><IoClose className='cursor-pointer text-2xl absolute right-3 top-4' onClick={onAddMaterialClose} /></p>
                </div>
                {/* form data */}
                <form action="#">
                    <div className='pt-6'>
                        <Label htmlFor="" className='font-semibold text-[17px]'>Course Code <span className='text-[#DE0D0D]'>*</span></Label>
                        <Input type='text' className='mt-3 bg-primary-foreground' placeholder='Enter Course code' name='CourseCode' value={materialForm.CourseCode} onChange={onChangeMaterial}  required/>
                    </div>
                    <div className='pt-4'>
                        <Label htmlFor="" className='font-semibold text-[17px]'> Course Name</Label>
                        <Input className='mt-3 bg-primary-foreground' placeholder='Enter Course code' type='text' name='CourseName' value={materialForm.CourseName} onChange={onChangeMaterial} required/>
                    </div>


                    <div className='pt-4'>
                        <Label htmlFor="" className='font-semibold text-[17px]'>Title</Label>
                        <Input placeholder='Enter Title (i.e Python - chapter 1)' className='mt-3 bg-primary-foreground' type='text' name='Title' value={materialForm.Title} onChange={onChangeMaterial} required/>
                    </div>



                    <div className='pt-4'>
                        <Label htmlFor="" className='font-semibold text-[17px]'>Date</Label>
                        <input
                            type="date"
                            className="w-full pl-3 mt-3 pr-4 py-2 bg-primary-foreground border border-gray-300 rounded-md text-right placeholder:text-left"
                            placeholder="Select date"
                            name='Date' 
                            value={materialForm.Date}
                            onChange={onChangeMaterial}
                            required
                        />
                    </div>


                    <div className='pt-4'>
                        <Label htmlFor="" className='font-semibold text-[17px]'>Upload Certificate</Label>
                        <Input type="file" id="GujcetUpload" hidden name='UploadDoc' onChange={onFileUpload} required/>
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
                        <Button className='w-full cursor-pointer' onClick={SubmitMaterial}>Submit</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddMaterialsPopup