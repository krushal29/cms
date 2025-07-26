import { useState } from "react"
import { Button } from "../../ui/button"
import { GoBook } from "react-icons/go";




const SchoolAboutUs = () => {
  const [vision,setVision]=useState(true);
  const [Mission,setMission]=useState(false);
  const [CoreValue,setCoreValue]=useState(false);

  const visionHandle=()=>{
      setVision(true);
      setMission(false);
      setCoreValue(false)
  }

  const missionhandle=()=>{
      setVision(false)
      setMission(true)
      setCoreValue(false)
  }

  const Corehandle=()=>{
      setVision(false)
      setMission(false)
      setCoreValue(true)
  }
  return (
      <div className="flex justify-center pt-8 py-18 bg-secondary">
        <div className="w-[70%]">
          <h1 className="text-[28px] font-bold underline text-center underline-offset-4">About Us</h1>
            <div className=" flex w-[65%] pt-8 pb-5">
                <Button className={`py-5 cursor-pointer w-[50%] text-[17px] hover:text-white ${vision?"bg-black text-white":"bg-background text-black"}`} onClick={visionHandle}>Story</Button>
                <Button className={`py-5 cursor-pointer w-[50%] text-[17px] mx-3 bg-background  hover:text-white text-black ${Mission?"bg-black text-white":"bg-background text-black"}`} onClick={missionhandle}>Vision</Button>
                <Button className={`py-5 cursor-pointer w-[50%] text-[17px] bg-background hover:text-white text-black ${CoreValue?"bg-black text-white":"bg-background text-black"}`} onClick={Corehandle}>Mission</Button>
            </div>
            <div className="bg-background rounded-2xl mt-3 px-8 py-5 drop-shadow-lg shadow-ring">
              {
                vision&&<><h2 className="text-2xl font-medium pb-4 flex items-center"><span className="pr-2"><GoBook /></span>Our Story</h2><p className="text-[17px]">Grand Valley College envisions being a globally recognized institution that transforms lives through exceptional education, groundbreaking research, and meaningful community engagement. We aspire to be at the forefront of addressing society's most pressing challenges while nurturing the next generation of thoughtful, ethical, and innovative leaders.</p></>   
              }
              {
                Mission&&<><h2 className="text-2xl font-medium pb-4 text-start">Our Vision</h2> <p>Grand Valley College envisions being a globally recognized institution that transforms lives through exceptional education, groundbreaking research, and meaningful community engagement. We aspire to be at the forefront of addressing society's most pressing challenges while nurturing the next generation of thoughtful, ethical, and innovative leaders.</p>  </>
              }
              {
                CoreValue&&<><h2 className="text-2xl font-medium pb-4 text-start">Our Core Mission</h2> <p>Grand Valley College envisions being a globally recognized institution that transforms lives through exceptional education, groundbreaking research, and meaningful community engagement. We aspire to be at the forefront of addressing society's most pressing challenges while nurturing the next generation of thoughtful, ethical, and innovative leaders.</p></>  
              }
            </div>
        </div>
    </div>
  )
}

export default SchoolAboutUs