import profile from '../../../../public/Avatar.png'
import { Button } from '../../ui/button'
import { LuCalendarCheck2 } from "react-icons/lu";
import { useState } from 'react';
import PersonalDetails from './PersonalDetails';
import EducationDetails from './EducationDetails';
import CounselorDetails from './CounselorDetails';
import { FaGraduationCap, FaTrophy } from "react-icons/fa";





const DashBoardComponent = () => {
    const [StudentDetails,setStudentDetails]=useState("PersonalDetails");
    
    
    return (
        <div className="bg-background min-h-[50.8vh] flex justify-center py-8">
            <div className='w-[72%]'>
                <div className='bg-secondary flex items-center justify-between rounded-2xl py-3 px-10 drop-shadow-lg shadow-ring'>
                    <div className='flex items-center w-[40%] justify-between'>
                        <div className='w-[32%]'>
                            <img src={profile} alt="" className='w-[100%]' />
                        </div>
                        <div>
                            <h1 className='text-3xl font-bold'>John Doe !</h1>
                            <p className='pt-1'>Computer Science and Engineering</p>
                        </div>
                    </div>
                    <div>
                        <Button className='px-10 py-5 text-[18px] cursor-pointer'>edit</Button>
                    </div>
                </div>




                {/* <div className='flex justify-between mt-10 gap-5'>
                    <div className='bg-green-200 w-1/3 border py-5 px-6 border-green-800 rounded-2xl text-green-800'>
                        <h1 className='text-[17px] font-semibold'>Current Cgpa</h1>
                        <p className='pt-1 text-[17px] font-semibold'>9.57</p>
                    </div>
                    <div className='w-1/3 bg-cyan-200 border py-5 px-10 border-cyan-800 rounded-2xl'>
                        <div className='flex items-center w-[60%] justify-between'>
                            <h1 className='text-cyan-800 font-semibold text-[17px]'>Current Semester</h1>
                            <p className='text-[19px] text-cyan-700'><LuCalendarCheck2 /></p>
                        </div>
                        <p className='pt-1 font-semibold text-cyan-800'>5</p>
                    </div>
                    <div className='bg-pink-200 w-1/3 border py-5 px-10 border-pink-800 rounded-2xl text-pink-800'>
                        <h1 className='text-[17px] font-semibold'>Achievements</h1>
                        <p className='pt-1 text-[17px] font-semibold'>6</p>
                    </div>
                </div> */}

              <div className='flex justify-between mt-10 gap-3'>
  {/* CGPA Card */}
  <div className='bg-green-200 w-[28%] border py-4 px-4 border-green-800 rounded-2xl text-green-800'>
    <div className="flex items-center justify-between">
      <h1 className='text-[17px] font-semibold'>Current Cgpa</h1>
      <FaGraduationCap className="text-[18px]" />
    </div>
    <p className='pt-2 text-[16px] font-semibold'>9.57</p>
  </div>

  {/* Semester Card */}
  <div className='w-[28%] bg-cyan-200 border py-4 px-4 border-cyan-800 rounded-2xl text-cyan-800'>
    <div className='flex items-center justify-between'>
      <h1 className='text-[17px] font-semibold'>Current Semester</h1>
      <LuCalendarCheck2 className="text-[18px]" />
    </div>
    <p className='pt-2 text-[16px] font-semibold'>5</p>
  </div>

  {/* Achievements Card */}
  <div className='bg-pink-200 w-[28%] border py-4 px-4 border-pink-800 rounded-2xl text-pink-800'>
    <div className="flex items-center justify-between">
      <h1 className='text-[17px] font-semibold'>Achievements</h1>
      <FaTrophy className="text-[18px]" />
    </div>
    <p className='pt-2 text-[16px] font-semibold'>6</p>
  </div>
</div>




                <div className='bg-secondary mt-5 p-5 rounded-2xl'>
                    <div className='w-full flex gap-10 bg-background py-3 px-5 rounded-2xl'>
                        <Button className='w-[31%] cursor-pointer bg-secondary text-primary hover:bg-secondary drop-shadow-lg shadow-ring border border-black text-[17px] py-5' onClick={()=>setStudentDetails("PersonalDetails")}>Personal Details</Button>
                        <Button className='w-[31%] cursor-pointer bg-secondary text-primary hover:bg-secondary drop-shadow-lg shadow-ring border border-black text-[17px] py-5' onClick={()=>setStudentDetails("EducationalDetails")}>Educational Details</Button>
                        <Button className='w-[31%] cursor-pointer bg-secondary text-primary hover:bg-secondary drop-shadow-lg shadow-ring border border-black text-[17px] py-5' onClick={()=>setStudentDetails("CounselorDetails")}>Counselor Details</Button>
                    </div>

                    {StudentDetails=="PersonalDetails" && <div className="my-7">
                        <PersonalDetails />
                    </div>}

                    {StudentDetails=="EducationalDetails" && <div className="my-7">
                        <EducationDetails />
                    </div>}

                    {StudentDetails=="CounselorDetails" && <div className="my-7">
                        <CounselorDetails />
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default DashBoardComponent