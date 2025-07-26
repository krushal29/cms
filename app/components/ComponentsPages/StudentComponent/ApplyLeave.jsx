import { Button } from '../../ui/button'
import { Input } from '../../ui/input'
import { IoClose } from "react-icons/io5";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../../ui/select"
import { Textarea } from '../../ui/textarea'
import { Label } from '../../ui/label';
import { MdOutlineFileUpload } from "react-icons/md";
import { useState } from 'react';



const ApplyLeave = ({ onCloseLeave }) => {
    const [form, setForm] = useState({
        EnrollmentNumber: "",
        LeaveType: "",
        FromDate: "",
        ToDate: "",
        ProvideReason: "",
        UploadCertificate: ""
    })

    const onChangeHandle = (e) => {
        const { name, value } = e.target;

        setForm({ ...form, [name]: value })
    }
    console.log(form);


    return (
        <div className='shadow-2xl flex justify-center h-screen items-center relative '>
            <div className='bg-card px-10 py-7 rounded-[10px] w-[34%] relative overflow-y-scroll h-[90%]'>
                <div className='flex justify-between'>
                    <h1 className='font-semibold text-2xl'>Apply For Leave</h1>
                    <p><IoClose className='cursor-pointer text-2xl absolute right-3 top-4' onClick={onCloseLeave} /></p>
                </div>
                <div className='pt-6'>
                    <label htmlFor="" className='font-semibold text-[17px]'>Enrollment Number</label>
                    <Input className='mt-3 bg-primary-foreground' placeholder='Enter Your Enrollment Number' type='number' name='EnrollmentNumber' value={form.EnrollmentNumber} onChange={onChangeHandle} />
                </div>
                <div className='pt-4 '>
                    <label htmlFor="" className='font-semibold text-[17px]'>Leave Type</label>
                    <Select>
                        <SelectTrigger className="w-full bg-primary-foreground mt-3">
                            <SelectValue placeholder="Theme" />
                        </SelectTrigger>
                        <SelectContent className="bg-primary-foreground" >
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className='pt-4'>
                    <label htmlFor="" className='font-semibold text-[17px]'>From Date</label>
                    <input
                        type="date"
                        className="w-full pl-3 mt-3 pr-4 py-2 bg-primary-foreground border border-gray-300 rounded-md text-right placeholder:text-left"
                        placeholder="Select date"
                        name='FromDate'
                        value={form.FromDate}
                        onChange={onChangeHandle}
                    />
                </div>


                <div className='pt-4'>
                    <label htmlFor="" className='font-semibold text-[17px]'>To Date</label>
                    <input
                        type="date"
                        className="w-full pl-3 mt-3 pr-4 py-2 bg-primary-foreground border border-gray-300 rounded-md text-right placeholder:text-left"
                        placeholder="Select date"
                        name='ToDate'
                        value={form.ToDate}
                        onChange={onChangeHandle}
                    />
                </div>


                <div className='pt-4'>
                    <label htmlFor="" className='font-semibold text-[17px]'>Provide Reason</label>
                    <Textarea className='bg-primary-foreground mt-3' placeholder='Please Provide Valid reason for your Leave Application' name='ProvideReason' value={form.ProvideReason} onChange={onChangeHandle} />
                </div>


                <div className='pt-4'>
                    <label htmlFor="" className='font-semibold text-[17px]'>Upload Certificate</label>
                    <Input type="file" id="GujcetUpload" hidden name='UploadCertificate' value={form.UploadCertificate} onChange={onChangeHandle} />
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

export default ApplyLeave