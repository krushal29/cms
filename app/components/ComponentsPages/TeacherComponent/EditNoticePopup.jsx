import { Button } from '../../ui/button'
import { Input } from '../../ui/input'
import { IoClose } from "react-icons/io5";
import { Label } from '../../ui/label';
import { Textarea } from '../../ui/textarea'


const EditNoticePopup = ({onCloseEditNotice,EditData}) => {
   return (
        <div className='shadow-2xl flex justify-center h-screen items-center relative '>
            <div className='bg-card  px-10 pt-7 rounded-[10px] w-[34%] relative'>
                <div className='flex justify-between'>
                    <h1 className='font-semibold text-2xl'>Edit Notices</h1>
                    <p><IoClose className='cursor-pointer text-2xl absolute right-3 top-4' onClick={onCloseEditNotice} /></p>
                </div>

                <div className='pt-6'>
                    <Label htmlFor="" className='font-semibold text-[17px]'>Notice Title <span className='text-[#DE0D0D]'>*</span></Label>
                    <Input className='mt-3 bg-primary-foreground' placeholder='Enter Notice Title' type='text' value={EditData.Heading} />
                </div>
                <div className='pt-4'>
                    <Label htmlFor="" className='font-semibold text-[17px]'> Upload by</Label>
                    <Input className='mt-3 bg-primary-foreground' placeholder='Enter Event Type (i.e ,  Academic)' type='text' value={EditData.role}/>
                </div>

                <div className='pt-4'>
                    <Label htmlFor="" className='font-semibold text-[17px]'>Date</Label>
                    <input
                        type="date"
                        className="w-full pl-3 mt-3 pr-4 py-2 bg-primary-foreground border border-gray-300 rounded-md text-right placeholder:text-left"
                        placeholder="Select date"
                    />
                </div>


                <div className='pt-4'>
                    <Label htmlFor="" className='font-semibold text-[17px]'>Provide Description</Label>
                    <Textarea placeholder='Please Provide description of Event' className='mt-3 bg-primary-foreground' value={EditData.desc} />
                </div>


                <div className='py-8'>
                    <Button className='w-full cursor-pointer'>Submit</Button>
                </div>
            </div>
        </div>
    )
}

export default EditNoticePopup