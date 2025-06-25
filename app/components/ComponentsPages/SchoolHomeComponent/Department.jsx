import { Button } from "../../ui/button"
import image from '../../../../public/image 13.png'


const Department = () => {
  return (
    <div className="min-h-[45.5vh]">
      <div style={{backgroundImage:`url(${image})`}} className="w-full h-screen bg-cover flex flex-col justify-center text-white backdrop-opacity-5 inset-0 pl-8">
         <h1 className="text-5xl ">Computer Science and Engineering</h1>
         <p className="text-2xl pt-2">School of Engineering & Technology</p>
      </div>

      <div className="w-[95%] mx-auto mt-10">
        <h1 className="font-bold text-2xl underline text-center">About  Department </h1>
        <p className="font-medium mt-8">Department of Computer Engineering offers a four year undergraduate program in Computer Engineering, with an intake of 40 students in the year 1999 (current intake is 60 students), originally affiliated to Sardar Patel University, Vallabh Vidyanagar till 2007 and later to Gujarat Technological University (GTU), Ahmedabad (2008-2020) and with The Charutar Vidya Mandal (CVM) University since 2020. Department started offering a Master of Engineering program from the year 2017-18, with an intake of 18 students. Department offers a B. Tech program in Computer Science and Design with an intake of 60 students from the academic year 2021-22. The department gave its first meritorious batch of Computer Engineering graduates in July 2003.</p>
        <p className="font-medium mt-3">
          Majority of the passed out students are well placed at Infosys, Wipro, IBM, Intel, Capgemini, Microsoft, Tech Mahindra etc. or have pursued higher studies. The Department has excellent laboratory facilities, both for teaching and research.
          The Department organizes workshops, seminars, conferences at national and international levels on various topics of current relevance and invites eminent speakers from India and abroad to impart state of art knowledge to the students.</p>
      </div>

      <div className="w-[90%] mx-auto my-8">
        <div className="w-1/3 flex justify-between space-x-8">
          <Button className="w-1/2 cursor-pointer">Vision</Button>
          <Button className="w-1/2 cursor-pointer">Mission</Button>
        </div>
        <div className="bg-background mt-5 rounded-2xl shadow-2xl py-3 px-4 text-[16px]">
          <p className="font-medium">Grand Valley College envisions being a globally recognized institution that transforms lives through exceptional education, groundbreaking research, and meaningful community engagement. We aspire to be at the forefront of addressing society's most pressing challenges while nurturing the next generation of thoughtful, ethical, and innovative leaders.</p>
        </div>
      </div>
    </div>
  )
}

export default Department