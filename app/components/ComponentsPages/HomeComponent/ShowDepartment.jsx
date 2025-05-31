import { LuCalculator } from "react-icons/lu";
import { MdArrowForwardIos } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";


const ShowDepartment = () => {
    return (
        <div className="bg-background flex justify-center mt-8 py-8">
            <div className="w-[60%] text-center">
                <h1 className="text-2xl underline font-medium">Academic Schools & Departments</h1>
                <p className="pt-2 w-[70%] mx-auto">Explore our diverse Academic offerings,across distinct Schools,each commited to excellence in teaching,research,and service</p>

                <div className="flex items-center border w-[55%] justify-between mx-auto mt-7 px-5 rounded-2xl cursor-pointer py-3 bg-secondary shadow-2xl">
                    <div>
                        <LuCalculator />
                    </div>
                    <div>
                        <p className="text-[15px] font-medium">School of Engineering and Technology</p>
                    </div>
                    <div>
                        <MdArrowForwardIos />
                    </div>
                </div>

                 <div className="flex items-center border w-[55%] justify-between mx-auto mt-5 px-5 rounded-2xl cursor-pointer py-3 bg-secondary shadow-2xl">
                    <div>
                        <LuCalculator />
                    </div>
                    <div>
                        <p className="text-[15px] font-medium">School of Engineering and Technology</p>
                    </div>
                    <div>
                        <MdArrowForwardIos />
                    </div>
                </div>


                 <div className="flex items-center border w-[55%] justify-between mx-auto mt-5 px-5 rounded-2xl cursor-pointer py-3 bg-secondary shadow-2xl">
                    <div>
                        <LuCalculator />
                    </div>
                    <div>
                        <p className="text-[15px] font-medium">School of Engineering and Technology</p>
                    </div>
                    <div>
                        <MdArrowForwardIos />
                    </div>
                </div>

                 <div className="flex items-center border w-[55%] justify-between mx-auto mt-5 px-5 rounded-2xl cursor-pointer py-3 bg-secondary shadow-2xl">
                    <div>
                        <LuCalculator />
                    </div>
                    <div>
                        <p className="text-[15px] font-medium">School of Engineering and Technology</p>
                    </div>
                    <div>
                        <MdArrowForwardIos />
                    </div>
                </div>

                <div className="flex items-center border w-[55%] justify-between mx-auto mt-5 px-5 rounded-2xl cursor-pointer py-3 bg-secondary shadow-2xl">
                    <div>
                        <LuCalculator />
                    </div>
                    <div>
                        <p className="text-[15px] font-medium">School of Engineering and Technology</p>
                    </div>
                    <div>
                        <MdArrowForwardIos />
                    </div>
                </div>


                <div className="flex items-center text-center  justify-center mt-12 text-[#0E7490] font-medium cursor-pointer">
                    <p>View More</p>
                    <div>
                        <IoIosArrowRoundForward className="text-2xl"/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ShowDepartment