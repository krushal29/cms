import { useState } from 'react';
import { Button } from '../ui/button'
import {Input} from '../ui/input'
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router";

const Login = ({closeHandle}) => {
  const navigate=useNavigate();
  const [form,setform]=useState({
    userName:"",
    Password:''
  })


  const onChangeHandle=(e)=>{
      const {name,value}=e.target;  
      setform({...form,[name]:value})
    }
    
    const SubmitHandle=(e)=>{
      e.preventDefault()
      console.log(form);
      navigate('/StudentDashBoard')
  }
  return (
    <div className='flex justify-center h-screen items-center relative'>
      <div className='bg-card px-6 pt-8 rounded-[5px] w-[26%] h-[62%] drop-shadow-2xl shadow-ring'>
        <div className='flex justify-between'>
        <h1 className='font-bold text-xl'>Welcome to Grand valley College</h1>
        <p><IoClose  className='cursor-pointer text-xl absolute right-3 top-4' onClick={closeHandle}/></p>
        </div>
        <p className='text-xs pt-3'>Sign in to your Grand Valley College account</p>
        <div className='pt-6'>
          <label htmlFor="" className='font-bold text-[17px]'>username</label>
          <Input className='mt-3 bg-primary-foreground border border-black shadow-2xl outline-none focus:outline-none focus:ring-0 focus:border-black focus-visible:ring-0 hover:border-black data-[state=open]:border-black' placeholder='Enter Your Username' type='text' name='userName' value={form.userName} onChange={onChangeHandle}/>
        </div>
        <div className='pt-4'>
          <label htmlFor="" className='font-bold text-[17px]'>Password</label>
          <Input className='mt-3 bg-primary-foreground border border-black shadow-2xl outline-none focus:outline-none focus:ring-0 focus:border-black focus-visible:ring-0 hover:border-black data-[state=open]:border-black' placeholder='Enter Password' type='password' name='Password' value={form.Password} onChange={onChangeHandle}/>
        </div>
        <div className='pt-8'>
          <Button className='w-full cursor-pointer' onClick={SubmitHandle} >Sign in</Button>
        </div>
        <div className='pt-6 font-semibold'>
          <p className='underline cursor-pointer'>Forget Password</p>
        </div>
        </div>
    </div>
    
  )
}

export default Login
