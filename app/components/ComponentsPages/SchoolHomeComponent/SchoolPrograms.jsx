import { useState } from "react";
import { Button } from "../../ui/button"
import { LuCalculator } from "react-icons/lu";
import { MdArrowForwardIos } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useNavigate } from "react-router";




const Programs = ["UG", "PG", "Diploma", "P.h.d"]
const UGbranch = ["Computer Science", "Electrical Engineering", "mechanical Engineering", "Civil Engineering"]
const PGbranch = ["Computer Science", "Electrical Engineering", "mechanical Engineering"]
const Diplomabranch = ["Computer Science", "mechanical Engineering"]
const Phdbranch = ["Computer Science"]

const SchoolPrograms = ({ProgramsRef}) => {
  const navigate = useNavigate();
  const [selectProgram, setSelectProgram] = useState("UG");


  const OnClickNavigate = (data) => {
    // if (data == "Computer Science") {
      navigate('/Department');
    // }
  }


  const getSelectBranch = () => {
    switch (selectProgram) {
      case "UG":
        return UGbranch
      case "PG":
        return PGbranch
      case "Diploma":
        return Diplomabranch
      case "P.h.d":
        return Phdbranch
      default:
        return []
    }
  }

  return (
    <div className="bg-background flex justify-center pt-8 py-10" ref={ProgramsRef}>
      <div className="w-[70%]">
        <h1 className="text-[28px] font-bold underline text-center underline-offset-4">Programs</h1>
        <p className="pt-2 w-[70%] mx-auto text-center font-medium">Discover our wide range of academic programs each designed to foster intellectual growth, practical skills, and career readiness.</p>

        <div className="flex py-12">
          {Programs.map((data, index) => (
            <div className="w-full mr-3" key={index}>
              <Button className={`w-full text-xl cursor-pointer py-5 hover:text-white ${selectProgram==data?'bg-black text-white':'bg-secondary text-black'}`} onClick={()=>setSelectProgram(data)}>{data}</Button>
            </div>
          ))}
        </div>


        <div className="bg-secondary pt-1 pb-10 drop-shadow-lg shadow-ring">
          {
            getSelectBranch().map((data, index) => (
              <div className={`flex items-center border w-[85%] justify-between mx-auto mt-7 px-5 rounded-2xl cursor-pointer py-3 bg-background drop-shadow-xs shadow-ring`} onClick={() => OnClickNavigate(data)} key={index}>
                <div>
                  <LuCalculator />
                </div>
                <div>
                  <p className="text-[17px] font-medium">{data}</p>
                </div>
                <div>
                  <MdArrowForwardIos />
                </div>
              </div>
            ))
          }
        </div>

        <div className="flex items-center text-center  justify-center mt-12 text-[#0E7490] font-medium cursor-pointer text-[18px]">
          <p>View More</p>
          <div>
            <IoIosArrowRoundForward className="text-2xl" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SchoolPrograms