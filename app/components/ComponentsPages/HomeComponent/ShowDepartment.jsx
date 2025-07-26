import { LuCalculator } from "react-icons/lu";
import { MdArrowForwardIos } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useNavigate } from "react-router";


const ShowDepartment = ({AcaRef}) => {
    const navigate = useNavigate();
    return (
        <div className="bg-background flex justify-center pt-8 py-8" ref={AcaRef}>
            <div className="w-[60%] text-center">
                <h1 className="text-[26px] underline font-medium">Academic Schools & Departments</h1>
                <p className="pt-4 w-[70%] mx-auto">Explore our diverse Academic offerings,across distinct Schools,each commited to excellence in teaching,research,and service</p>

                <div className="flex items-center border w-[88%] justify-between mx-auto mt-10 px-5 rounded-2xl cursor-pointer py-3 bg-secondary drop-shadow-lg shadow-ring" onClick={() => navigate("/SchoolPage")}>
                    <div>
                        <LuCalculator className="text-xl"/>
                    </div>
                    <div>
                        <p className="text-[17px] font-semibold">School of Engineering and Technology</p>
                    </div>
                    <div>
                        <MdArrowForwardIos />
                    </div>
                </div>

                <div className="flex items-center border w-[88%] justify-between mx-auto mt-6 px-5 rounded-2xl cursor-pointer py-3 bg-secondary drop-shadow-lg shadow-ring">
                    <div>
                        <LuCalculator className="text-xl"/>
                    </div>
                    <div>
                        <p className="text-[17px] font-semibold">College of Arts and Sciences</p>
                    </div>
                    <div>
                        <MdArrowForwardIos />
                    </div>
                </div>


                <div className="flex items-center border w-[88%] justify-between mx-auto mt-6 px-5 rounded-2xl cursor-pointer py-3 bg-secondary drop-shadow-lg shadow-ring">
                    <div>
                        <LuCalculator className="text-xl"/>
                    </div>
                    <div>
                        <p className="text-[17px] font-semibold">School of Bussiness and Management</p>
                    </div>
                    <div>
                        <MdArrowForwardIos />
                    </div>
                </div>

                <div className="flex items-center border w-[88%] justify-between mx-auto mt-6 px-5 rounded-2xl cursor-pointer py-3 bg-secondary drop-shadow-lg shadow-ring">
                    <div>
                        <LuCalculator className="text-xl"/>
                    </div>
                    <div>
                        <p className="text-[17px] font-semibold">School of Education</p>
                    </div>
                    <div>
                        <MdArrowForwardIos />
                    </div>
                </div>

                <div className="flex items-center border w-[88%] justify-between mx-auto mt-6 px-5 rounded-2xl cursor-pointer py-3 bg-secondary drop-shadow-lg shadow-ring">
                    <div>
                        <LuCalculator className="text-xl"/>
                    </div>
                    <div>
                        <p className="text-[17px] font-semibold">School of Life Sciences</p>
                    </div>
                    <div>
                        <MdArrowForwardIos />
                    </div>
                </div>


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