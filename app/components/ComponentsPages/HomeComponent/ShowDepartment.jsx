import { LuCalculator } from "react-icons/lu";
import { MdArrowForwardIos } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useNavigate } from "react-router";
import { Button } from "../../ui/button";
import { useState } from "react";

const Programs = ["UG", "PG", "Diploma", "P.h.d"]
const UGbranch = ["School of Engineering and Technology", "College of Arts and Sciences", "School of Bussiness and Management", "School of Education", "School of Life Sciences"]
const PGbranch = ["Computer Science", "Electrical Engineering", "mechanical Engineering"]
const Diplomabranch = ["Computer Science", "mechanical Engineering"]
const Phdbranch = ["Computer Science"]




const ShowDepartment = ({ AcaRef }) => {
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

    console.log(selectProgram);
    return (
        <div className="bg-background flex justify-center pt-8 py-8" ref={AcaRef}>
            <div className="w-[60%] text-center">
                <h1 className="text-[26px] underline font-medium">Academic Schools & Departments</h1>
                <p className="pt-4 w-[70%] mx-auto">Explore our diverse Academic offerings,across distinct Schools,each commited to excellence in teaching,research,and service</p>

                {/* filter */}
                <div className="flex py-8">
                    {Programs.map((data, index) => (
                        <div className="w-full  mr-3" key={index}>
                            <Button className={`w-full text-xl cursor-pointer py-5 hover:text-white ${selectProgram === data ? 'bg-black text-white' : 'bg-secondary text-black'}`} onClick={() => setSelectProgram(data)}>{data}</Button>
                        </div>
                    ))}
                </div>

                {getSelectBranch().map((val, index) => (
                    <div className="flex items-center border w-full justify-between mx-auto mt-8 px-5 rounded-2xl cursor-pointer py-3 bg-secondary drop-shadow-lg shadow-ring" onClick={() => navigate("/SchoolPage")} key={index}>
                        <div>
                            <LuCalculator className="text-xl" />
                        </div>
                        <div>
                            <p className="text-[17px] font-semibold">{val}</p>
                        </div>
                        <div>
                            <MdArrowForwardIos />
                        </div>
                    </div>
                ))}

                <div className="flex items-center text-center justify-center mt-12 text-[#0E7490] font-medium cursor-pointer  text-[18px]">
                    <p>View More</p>
                    <div>
                        <IoIosArrowRoundForward className="text-2xl" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ShowDepartment