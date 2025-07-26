import { Button } from '../../ui/button'
import { Input } from '../../ui/input'
import { IoClose } from "react-icons/io5";
import { MdOutlineFileUpload } from "react-icons/md";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../../ui/select"
import { Label } from '../../ui/label';
import { useState } from 'react';

const VerifyFees = ({onCloseVerifyPopup}) => {
const [form,setForm]=useState({
    EnrollmentNumber:"",
    Semester:"",
    Amount:"",
    PaymentType:"",
    UploadReceipt:""
})

const onChangeHandle=(e)=>{
    const {name,value}=e.target;

    setForm({...form,[name]:value})
}

console.log(form);

    return (
        <div className='flex justify-center h-screen items-center relative '>
            <div className='bg-card px-10 pt-7 rounded-[10px] w-[34%] relative'>
                <div className='flex justify-between'>
                    <h1 className='font-semibold text-2xl'>Verify Your Payments</h1>
                    <p><IoClose className='cursor-pointer text-2xl absolute right-3 top-4' onClick={onCloseVerifyPopup}/></p>
                </div>
                <div className='pt-6'>
                    <label htmlFor="" className='font-semibold text-[17px]'>Enrollment Number</label>
                    <Input className='mt-3 bg-primary-foreground' placeholder='Enter Your Enrollment Number' type='number' name='EnrollmentNumber' value={form.EnrollmentNumber} onChange={onChangeHandle} />
                </div>
                <div className='pt-4'>
                    <label htmlFor="" className='font-semibold text-[17px]'>Semester</label>
                    <Input className='mt-3 bg-primary-foreground' placeholder='Enter Semester' type='text' value={form.Semester} name='Semester' onChange={onChangeHandle}/>
                </div>

                <div className='pt-4'>
                    <label htmlFor="" className='font-semibold text-[17px]'>Amount</label>
                    <Input className='mt-3 bg-primary-foreground' placeholder='Enter Amount' type='text' value={form.Amount} name='Amount' onChange={onChangeHandle} />
                </div>


                <div className='pt-4'>
                    <label htmlFor="" className='font-semibold text-[17px]'>Payment  Type</label>
                    <Select>
                        <SelectTrigger className="w-full bg-primary-foreground mt-3">
                            <SelectValue placeholder="Select Payment Type" />
                        </SelectTrigger>
                        <SelectContent className="bg-primary-foreground">
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                    </Select>
                </div>



                <div className='pt-4'>
                    <label htmlFor="" className='font-semibold text-[17px]'>Upload Receipt <span className='text-[#DE0D0D]'>*</span></label>
                    <Input type="file" id="GujcetUpload" hidden value={form.UploadReceipt} name='UploadReceipt' onChange={onChangeHandle}/>
                    <Label htmlFor="GujcetUpload">
                        <div className="border-1 border-dotted border-destructive text-center rounded-[5px] py-3 cursor-pointer mt-1 w-full">
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

export default VerifyFees