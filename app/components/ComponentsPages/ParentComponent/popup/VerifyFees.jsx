import { Button } from '../../../ui/button'
import { Input } from '../../../ui/input'
import { IoClose } from "react-icons/io5";
import { MdOutlineFileUpload } from "react-icons/md";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../../../ui/select"
import { Label } from '../../../ui/label';

const VerifyFees = ({ onCloseVerifyPopup, verifyform, onChangeVerifyHandle, onVerifySubmit }) => {
    return (
        <div className='flex justify-center h-screen items-center relative '>
            <div className='bg-card px-10 pt-7 rounded-[10px] w-[34%] relative drop-shadow-2xl shadow-ring'>
                <div className='flex justify-between'>
                    <h1 className='font-semibold text-2xl'>Verify Your Payments</h1>
                    <p><IoClose className='cursor-pointer text-2xl absolute right-3 top-4' onClick={onCloseVerifyPopup} /></p>
                </div>
                <form action="#">

                    <div className='pt-6'>
                        <Label htmlFor="" className='font-semibold text-[17px]'>Enrollment Number</Label>
                        <Input className='mt-3 bg-primary-foreground' placeholder='Enter Your Enrollment Number' type='number' name='EnrollmentNumber' value={verifyform?.EnrollmentNumber} onChange={onChangeVerifyHandle} />
                    </div>
                    <div className='pt-4'>
                        <Label htmlFor="" className='font-semibold text-[17px]'>Semester</Label>
                        <Input className='mt-3 bg-primary-foreground' placeholder='Enter Semester' type='text' value={verifyform?.Semester} name='Semester' onChange={onChangeVerifyHandle} />
                    </div>

                    <div className='pt-4'>
                        <Label htmlFor="" className='font-semibold text-[17px]'>Amount</Label>
                        <Input className='mt-3 bg-primary-foreground' placeholder='Enter Amount' type='text' value={verifyform?.Amount} name='Amount' onChange={onChangeVerifyHandle} />
                    </div>


                    <div className='pt-4'>
                        <Label htmlFor="" className='font-semibold text-[17px]'>Payment  Type</Label>
                        <Select onValueChange={(value)=>onChangeVerifyHandle({target:{name:"PaymentType",value}})}>
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
                        <Label htmlFor="" className='font-semibold text-[17px]'>Upload Receipt <span className='text-[#DE0D0D]'>*</span></Label>
                        <Input type="file" id="GujcetUpload" hidden value={verifyform?.UploadReceipt} name='UploadReceipt' onChange={onChangeVerifyHandle} />
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
                        <Button className='w-full cursor-pointer' onClick={onVerifySubmit}>Submit</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default VerifyFees