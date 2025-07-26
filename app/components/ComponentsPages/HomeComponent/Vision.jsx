import { useState } from "react"
import { Button } from "../../ui/button"


const Vision = () => { 
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
    <div className="w-full flex justify-center py-10 pb-20 bg-secondary">
        <div className="w-[85%]">
            <div className=" flex w-[65%]">
                <Button className={`py-5 cursor-pointer w-[50%] text-[17px] hover:text-white ${vision?"bg-black text-white":"bg-background text-black"}`} onClick={visionHandle}>Vision</Button>
                <Button className={`py-5 cursor-pointer w-[50%] text-[17px] mx-3 bg-background  hover:text-white text-black ${Mission?"bg-black text-white":"bg-background text-black"}`} onClick={missionhandle}>Mission</Button>
                <Button className={`py-5 cursor-pointer text-[17px] w-[50%] bg-background hover:text-white text-black ${CoreValue?"bg-black text-white":"bg-background text-black"}`} onClick={Corehandle}>Core Values</Button>
            </div>
            <div className="bg-secondary rounded-2xl mt-8 px-8 py-5 drop-shadow-lg shadow-ring">
              {
                vision&&<><h2 className="text-2xl font-bold pb-4">Our Vision</h2><p className="text-[17px]">Grand Valley College envisions being a globally recognized institution that transforms lives through exceptional education, groundbreaking research, and meaningful community engagement. We aspire to be at the forefront of addressing society's most pressing challenges while nurturing the next generation of thoughtful, ethical, and innovative leaders.</p></>   
              }
              {
                Mission&&<><h2 className="text-2xl font-bold pb-4">Our Mission</h2> <p>Grand Valley College envisions being a globally recognized institution that transforms lives through exceptional education, groundbreaking research, and meaningful community engagement. We aspire to be at the forefront of addressing society's most pressing challenges while nurturing the next generation of thoughtful, ethical, and innovative leaders.</p>  </>
              }
              {
                CoreValue&&<><h2 className="text-2xl font-bold pb-4">Our Core Value</h2> <p>Grand Valley College envisions being a globally recognized institution that transforms lives through exceptional education, groundbreaking research, and meaningful community engagement. We aspire to be at the forefront of addressing society's most pressing challenges while nurturing the next generation of thoughtful, ethical, and innovative leaders.</p></>  
              }
            </div>
        </div>
    </div>
  )
}

export default Vision