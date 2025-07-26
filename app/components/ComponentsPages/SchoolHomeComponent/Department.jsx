import { Button } from "../../ui/button"
import image from '../../../../public/image 13.png'
import { useState } from "react"


const Department = () => {
  const [selectVision, setSelectVision] = useState("Vision");
  return (
    <div className="min-h-[45.5vh]">
      <div className="h-screen">
        <div
          className="relative h-[90%] bg-cover bg-center"
          style={{
            backgroundImage: `url(${image})`,
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

          {/* Text Content */}
          <div className="absolute z-10 flex flex-col items-start justify-center h-full px-8 md:px-20 text-white max-w-4xl">
            <h1 className="text-5xl font-serif font-bold leading-tight mb-6">
              Computer Science and Engineering
            </h1>
            <p className="text-lg md:text-xl font-semibold">
              School of Engineering & Technology
            </p>
          </div>
        </div>
      </div>


      <div className="w-[80%] mx-auto mt-3">
        <h1 className="font-bold text-4xl underline text-center">About  Department </h1>
        <p className="font-medium mt-8 text-[17px]">Department of Computer Engineering offers a four year undergraduate program in Computer Engineering, with an intake of 40 students in the year 1999 (current intake is 60 students), originally affiliated to Sardar Patel University, Vallabh Vidyanagar till 2007 and later to Gujarat Technological University (GTU), Ahmedabad (2008-2020) and with The Charutar Vidya Mandal (CVM) University since 2020. Department started offering a Master of Engineering program from the year 2017-18, with an intake of 18 students. Department offers a B. Tech program in Computer Science and Design with an intake of 60 students from the academic year 2021-22. The department gave its first meritorious batch of Computer Engineering graduates in July 2003.</p>
        <p className="font-medium mt-3 text-[17px]">
          Majority of the passed out students are well placed at Infosys, Wipro, IBM, Intel, Capgemini, Microsoft, Tech Mahindra etc. or have pursued higher studies. The Department has excellent laboratory facilities, both for teaching and research.
          The Department organizes workshops, seminars, conferences at national and international levels on various topics of current relevance and invites eminent speakers from India and abroad to impart state of art knowledge to the students.</p>
      </div>

      <div className="w-[80%] mx-auto my-15">
        <div className="w-[97%] flex justify-between space-x-8">
          <Button className={`w-1/2 cursor-pointer text-[20px] py-5 ${selectVision == "Vision" ? 'bg-black text-white' : 'bg-background text-black'}`} onClick={() => setSelectVision("Vision")}>Vision</Button>
          <Button className={`w-1/2 cursor-pointer text-[20px] py-5 ${selectVision == "Mission" ? 'bg-black text-white' : 'bg-background text-black'}`} onClick={() => setSelectVision("Mission")}>Mission</Button>
        </div>
        {selectVision == "Vision" ? <div className="bg-background mt-10 rounded-2xl py-5 px-7 drop-shadow-lg shadow-2xs shadow-ring text-[16px]">
          <p className="font-medium text-[18px]">Grand Valley College envisions being a globally recognized institution that transforms lives through exceptional education, groundbreaking research, and meaningful community engagement. We aspire to be at the forefront of addressing society's most pressing challenges while nurturing the next generation of thoughtful, ethical, and innovative leaders.</p>
        </div> : <div className="bg-background mt-10 rounded-2xl py-5 px-7 drop-shadow-lg shadow-2xs shadow-ring text-[16px]">
          <p className="font-medium text-[18px]">MisiionGrand Valley College envisions being a globally recognized institution that transforms lives through exceptional education, groundbreaking research, and meaningful community engagement. We aspire to be at the forefront of addressing society's most pressing challenges while nurturing the next generation of thoughtful, ethical, and innovative leaders.</p>
        </div>}

      </div>
    </div>
  )
}

export default Department