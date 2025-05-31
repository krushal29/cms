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
    <div className="w-full flex justify-center py-8">
        <div className="w-[80%]">
            <div className=" flex w-[50%]">
                <Button className={`py-5 cursor-pointer w-[50%] hover:text-white ${vision?"bg-black text-white":"bg-background text-black"}`} onClick={visionHandle}>Vision</Button>
                <Button className={`py-5 cursor-pointer w-[50%] mx-3 bg-background  hover:text-white text-black ${Mission?"bg-black text-white":"bg-background text-black"}`} onClick={missionhandle}>Mission</Button>
                <Button className={`py-5 cursor-pointer w-[50%] bg-background hover:text-white text-black ${CoreValue?"bg-black text-white":"bg-background text-black"}`} onClick={Corehandle}>Core Values</Button>
            </div>
            <div className="bg-secondary rounded-2xl mt-3 px-8 py-3 shadow-2xl">
              {
                vision&&<><h2 className="text-2xl font-bold pb-4">Our Vision</h2><p>Grand Valley College envisions being a globally recognized institution that transforms lives through exceptional education, groundbreaking research, and meaningful community engagement. We aspire to be at the forefront of addressing society's most pressing challenges while nurturing the next generation of thoughtful, ethical, and innovative leaders.</p></>   
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