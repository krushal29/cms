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
import { Label } from '../../ui/Label';
import { MdOutlineFileUpload } from "react-icons/md";
import { Target } from 'lucide-react';



const ApplyLeave = ({ onCloseLeave, form, onChangeHandle,onSubmitHandle }) => {
    return (
        <div className='shadow-2xl flex justify-center h-screen items-center relative '>
            <div className='bg-card px-10 py-7 rounded-[10px] w-[34%] relative overflow-y-scroll h-[90%]'>
                <div className='flex justify-between'>
                    <h1 className='font-semibold text-2xl'>Apply For Leave</h1>
                    <p><IoClose className='cursor-pointer text-2xl absolute right-3 top-4' onClick={onCloseLeave} /></p>
                </div>
                <form action="#">
                    <div className='pt-6'>
                        <Label htmlFor="" className='font-semibold text-[17px]'>Enrollment Number</Label>
                        <Input className='mt-3 bg-primary-foreground' placeholder='Enter Your Enrollment Number' type='number' name='EnrollmentNumber' value={form.EnrollmentNumber} onChange={onChangeHandle} required />
                    </div>
                    <div className='pt-4'>
                        <Label htmlFor="" className='font-semibold text-[17px]'>Leave Type</Label>
                        <Select onValueChange={(value) => onChangeHandle({ target: { name: 'LeaveType', value } })} required>
                            <SelectTrigger className="w-full bg-primary-foreground mt-3" >
                                <SelectValue placeholder="Select Leave Type" />
                            </SelectTrigger>
                            <SelectContent className="bg-primary-foreground" >
                                <SelectItem value="CasualLeave">Casual Leave</SelectItem>
                                <SelectItem value="SickLeave">Sick Leave</SelectItem>
                                <SelectItem value="EarnedLeave">Earned Leave</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className='pt-4'>
                        <Label htmlFor="" className='font-semibold text-[17px]'>From Date</Label>
                        <input
                            type="date"
                            className="w-full pl-3 mt-3 pr-4 py-2 bg-primary-foreground border border-gray-300 rounded-md text-right placeholder:text-left"
                            placeholder="Select date"
                            name='FromDate'
                            value={form.FromDate}
                            onChange={onChangeHandle}
                            required
                        />
                    </div>


                    <div className='pt-4'>
                        <Label htmlFor="" className='font-semibold text-[17px]'>To Date</Label>
                        <input
                            type="date"
                            className="w-full pl-3 mt-3 pr-4 py-2 bg-primary-foreground border border-gray-300 rounded-md text-right placeholder:text-left"
                            placeholder="Select date"
                            name='ToDate'
                            value={form.ToDate}
                            onChange={onChangeHandle}
                            required
                        />
                    </div>


                    <div className='pt-4'>
                        <Label htmlFor="" className='font-semibold text-[17px]'>Provide Reason</Label>
                        <Textarea className='bg-primary-foreground mt-3' placeholder='Please Provide Valid reason for your Leave Application' name='ProvideReason' value={form.ProvideReason} onChange={onChangeHandle} required />
                    </div>


                    <div className='pt-4'>
                        <Label htmlFor="" className='font-semibold text-[17px]'>Upload Certificate</Label>
                        <Input type="file" id="GujcetUpload" hidden name='UploadCertificate' value={form.UploadCertificate} onChange={onChangeHandle} required />
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
                        <Button className='w-full cursor-pointer' onClick={onSubmitHandle}>Submit</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ApplyLeave