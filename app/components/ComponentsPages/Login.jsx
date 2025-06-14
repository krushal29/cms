import { useState } from 'react';
import { Button } from '../ui/button'
import {Input} from '../ui/input'
import { IoClose } from "react-icons/io5";

const Login = ({closeHandle}) => {
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
  }
  return (
    <div className='shadow-2xl flex justify-center h-screen items-center relative'>
      <div className='bg-card px-5 py-2 rounded-[5px] w-1/4 relative'>
        <div className='flex justify-between'>
        <h1 className='font-bold text-xl'>Welcome to Grand valley College</h1>
        <p><IoClose  className='cursor-pointer text-xl absolute right-2' onClick={closeHandle}/></p>
        </div>
        <p className='text-xs pt-2'>Sign in to your Grand Valley College account</p>
        <div className='pt-3'>
          <label htmlFor="" className='font-bold text-[17px]'>username</label>
          <Input className='mt-2 bg-primary-foreground' placeholder='Enter Your Username' type='text' name='userName' value={form.userName} onChange={onChangeHandle}/>
        </div>
        <div className='pt-3'>
          <label htmlFor="" className='font-bold text-[17px]'>Password</label>
          <Input className='mt-2 bg-primary-foreground' placeholder='Enter Password' type='password' name='Password' value={form.Password} onChange={onChangeHandle}/>
        </div>
        <div className='pt-3'>
          <Button className='w-full cursor-pointer' onClick={SubmitHandle}>Sign in</Button>
        </div>
        <div className='pt-4 font-semibold'>
          <p className='underline cursor-pointer'>Forget Password</p>
        </div>
      </div>
    </div>
  )
}

export default Login
