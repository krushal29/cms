import { Button } from '../../ui/button'
import { MdOutlineFileDownload } from "react-icons/md";
import { FiAward } from "react-icons/fi";
import { useState } from 'react';
import AddAchievements from './AddAchievements';
const AchivementsCompoents = () => {
  const [showAddAchievement,setShowAddAchievement]=useState(false);

  const onCloseAchievement=()=>setShowAddAchievement(false);
  return (
    <div className='bg-background min-h-[50.8vh] flex justify-center py-10'>
      <div className='w-[80%]'>
        <h1 className='font-bold text-4xl text-center underline'>Achivements</h1>

        <div className='flex items-center py-10'>
          <p className='text-[18px] font-semibold'>Upload Your Achivement :</p>
          <Button className='ml-5 px-10 cursor-pointer' onClick={()=>setShowAddAchievement(true)}>Upload Achivement <span><MdOutlineFileDownload /></span></Button>
        </div>

        <div className='grid grid-cols-3 gap-10 py-10'>
          {[0, 1, 2, 3].map((val, index) => (
            <div className='bg-secondary py-7 px-5 rounded-2xl drop-shadow-lg shadow-ring' key={index}>
              <div className='flex justify-between'>
                <p className='bg-cyan-200 text-cyan-600 py-1 px-3 rounded-2xl'>Academic</p>
                <p className='bg-green-200 text-green-600 py-1 px-3 rounded-2xl'>Approved</p>
              </div>

              <div className='flex items-center pt-3'>
                <p><FiAward className='text-xl'/></p>
                <p className='text-xl font-semibold pl-2'>Best Project Award</p>
              </div>

              <div className='pt-4'>
                <p>Won first place in Computer Science project competition  </p>
              </div>

              <div className='pt-4'>
                <div className='flex justify-between'>
                  <p className='font-semibold'>Organised By :</p>
                  <p className='font-semibold'>CVM University</p>
                </div>
                <div className='flex justify-between pt-1'>
                  <p className='font-semibold'>Date:</p>
                  <p className='font-semibold'>15/6/2024</p>
                </div>
                <div className='flex justify-between pt-1'>
                  <p className='font-semibold'>Location:</p>
                  <p className='font-semibold'>Adit College</p>
                </div>
              </div>

              <div className='pt-4 w-full space-x-8'>
                <Button className='bg-primary-foreground text-black w-[45%] hover:bg-primary-foreground cursor-pointer border border-gray'>View Certificate</Button>
                <Button className='w-[45%] bg-primary-foreground text-black hover:bg-primary-foreground cursor-pointer border border-gray'>Edit</Button>
              </div>
            </div>
          ))}

        </div>
      </div>

      {showAddAchievement&&<div className='fixed inset-0 backdrop-blur-[3px] drop-shadow-lg shadow-ring'><AddAchievements onCloseAchievement={onCloseAchievement}/></div>}
    </div>
  )
}

export default AchivementsCompoents