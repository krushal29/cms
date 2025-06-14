import { useState } from "react";
import { Button } from "../../ui/button"
import { LuCalculator } from "react-icons/lu";
import { MdArrowForwardIos } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";




const Programs = ["UG", "PG", "Diploma", "P.h.d"]
const UGbranch = ["Computer Science", "Electrical Engineering", "mechanical Engineering", "Civil Engineering"]
const PGbranch = ["Computer Science", "Electrical Engineering", "mechanical Engineering"]
const Diplomabranch = ["Computer Science", "mechanical Engineering"]
const Phdbranch = ["Computer Science"]

const SchoolPrograms = () => {

  return (
    <div className="bg-background flex justify-center pt-8 py-8">
      <div className="w-[60%] text-center">
        <h1 className="text-2xl underline font-medium">Programs</h1>
        <p className="pt-2 w-[70%] mx-auto">Discover our wide range of academic programs each designed to foster intellectual growth, practical skills, and career readiness.</p>
        <div className="flex py-8">
          {Programs.map((data, index) => (
            <div className="w-full mr-3" key={index}>
              <Button className={`w-full text-xl cursor-pointer py-5`}>{data}</Button>
            </div>
          ))}
        </div>

        <div className="bg-secondary pt-1 pb-10">
          {
            UGbranch.map((data, index) => (
              <div className={`flex items-center border w-[65%] justify-between mx-auto mt-7 px-5 rounded-2xl cursor-pointer py-3 bg-background`} key={index}>
                <div>
                  <LuCalculator />
                </div>
                <div>
                  <p className="text-[15px] font-medium">{data}</p>
                </div>
                <div>
                  <MdArrowForwardIos />
                </div>
              </div>
            ))
          }
        </div>

        <div className="flex items-center text-center  justify-center mt-12 text-[#0E7490] font-medium cursor-pointer">
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