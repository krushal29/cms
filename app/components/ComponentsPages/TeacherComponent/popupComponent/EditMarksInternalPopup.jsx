import { Button } from '../../../ui/button'
import { Input } from '../../../ui/input'
import { IoClose } from "react-icons/io5";
import { Label } from '../../../ui/label'
import { useState } from 'react';


const EditMarksInternalPopup = ({ onCloseEvent }) => {
  const [form, setForm] = useState({
    MidSemMarks: '15',
    QuizMarks: '5',
    ProjectMarks: '4',
    PresentationMarks: '3',
    AttendanceMarks: '5'
  })

  const onChangeHandle = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value })
  }

  const SubmitHandle = (e) => {
    e.preventDefault();
    try{
        console.log(form);
    }catch(e){
      console.log(e);
    }
  }

  return (
    <div className='shadow-2xl flex justify-center h-screen items-center relative '>
      <div className='bg-card  px-10 pt-7 rounded-[10px] w-[34%] relative'>
        <div className='flex justify-between'>
          <h1 className='font-semibold text-2xl'>Edit Marks</h1>
          <p><IoClose className='cursor-pointer text-2xl absolute right-3 top-4' onClick={onCloseEvent} /></p>
        </div>
        <form action="#">
          <div className='pt-6'>
            <Label htmlFor="" className='font-semibold text-[17px]'>Mid-sem Marks <span className='text-[#DE0D0D]'>*</span></Label>
            <Input className='mt-3 bg-primary-foreground border border-black shadow-2xl outline-none focus:outline-none focus:ring-0 focus:border-black focus-visible:ring-0 hover:border-black data-[state=open]:border-black' placeholder='Enter mid-sem marks' type='text' onChange={onChangeHandle} name='MidSemMarks' value={form.MidSemMarks} required />
          </div>
          <div className='pt-4'>
            <Label htmlFor="" className='font-semibold text-[17px]'>Quiz Marks <span className='text-[#DE0D0D]'>*</span></Label>
            <Input className='mt-3 bg-primary-foreground border border-black shadow-2xl outline-none focus:outline-none focus:ring-0 focus:border-black focus-visible:ring-0 hover:border-black data-[state=open]:border-black' placeholder='Enter Quiz Marks' value={form.QuizMarks} name='QuizMarks' onChange={onChangeHandle} type='text' required />
          </div>

          <div className='pt-4'>
            <Label htmlFor="" className='font-semibold text-[17px]'>Project Marks <span className='text-[#DE0D0D]'>*</span></Label>
            <Input className='mt-3 bg-primary-foreground border border-black shadow-2xl outline-none focus:outline-none focus:ring-0 focus:border-black focus-visible:ring-0 hover:border-black data-[state=open]:border-black' placeholder='Enter Project Marks' value={form.ProjectMarks} name='ProjectMarks' onChange={onChangeHandle} type='text' required />
          </div>


          <div className='pt-4'>
            <Label htmlFor="" className='font-semibold text-[17px]'>Presentation Marks <span className='text-[#DE0D0D]'>*</span></Label>
            <Input className='mt-3 bg-primary-foreground border border-black shadow-2xl outline-none focus:outline-none focus:ring-0 focus:border-black focus-visible:ring-0 hover:border-black data-[state=open]:border-black' placeholder='Enter presentation marks' value={form.PresentationMarks} name='PresentationMarks' onChange={onChangeHandle} type='text' required />
          </div>


          <div className='pt-4'>
            <Label htmlFor="" className='font-semibold text-[17px]'>Attendance Marks <span className='text-[#DE0D0D]'>*</span></Label>
            <Input className='mt-3 bg-primary-foreground border border-black shadow-2xl outline-none focus:outline-none focus:ring-0 focus:border-black focus-visible:ring-0 hover:border-black data-[state=open]:border-black' placeholder='Enter Attendance Marks' value={form.AttendanceMarks} name='AttendanceMarks' onChange={onChangeHandle} type='text' required />
          </div>

          <div className='py-8'>
            <Button className='w-1/2 cursor-pointer' onClick={SubmitHandle}>Submit</Button>
          </div>
        </form>
      </div>


    </div>
  )
}

export default EditMarksInternalPopup