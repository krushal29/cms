import { AiOutlineTrophy } from "react-icons/ai";


const AchivementsData=[
  {
    AchivementsHeading:"NAAC A+ Accreditation",
    Desc:"Received the highest grade from National Assessment and Accreditation Council",
    Year:2023
  },
  {
    AchivementsHeading:"Best Engineering School",
    Desc:"Recognized as the Best Engineering School in the region by Education ",
    Year:2022
  },
  {
    AchivementsHeading:"NAAC A+ Accreditation",
    Desc:"Received the highest grade from National Assessment and Accreditation Council",
    Year:2023
  },
  {
    AchivementsHeading:"NAAC A+ Accreditation",
    Desc:"Received the highest grade from National Assessment and Accreditation Council",
    Year:2023
  },
  {
    AchivementsHeading:"NAAC A+ Accreditation",
    Desc:"Received the highest grade from National Assessment and Accreditation Council",
    Year:2023
  },
  {
    AchivementsHeading:"NAAC A+ Accreditation",
    Desc:"Received the highest grade from National Assessment and Accreditation Council",
    Year:2023
  },

]

const SchoolAchivements = () => {
  return (
    <div className="bg-secondary flex justify-center pt-8 py-8">
      <div className="w-[60%] text-center">
        <h1  className="text-2xl underline font-medium">Achivements</h1>
        <p className="pt-2 w-[70%] mx-auto font-medium">Celebrate our proud legacy of student achievements milestones that showcase excellence,  and innovation across academics, sports,and community impact</p>

        <div className="grid grid-cols-3 gap-6 py-8">
          {AchivementsData.map((data,index)=>(
            <div key={index} className="bg-background shadow-2xl rounded-2xl">
              <div className="bg-[#d4d4d8] py-3 rounded-tl-2xl rounded-tr-2xl">
                <h4 className="flex items-center font-medium"><span className="px-3"><AiOutlineTrophy /></span>{data.AchivementsHeading}</h4>
              </div>
              <div className="py-4 px-2">
                <p>{data.Desc}</p>
                <p className="bg-[#D9D9D9] inline-block py-1 px-6 mt-3 rounded-2xl">{data.Year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SchoolAchivements