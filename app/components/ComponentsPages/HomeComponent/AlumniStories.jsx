import { IoIosArrowRoundForward } from "react-icons/io";

const AlumniStories = () => {
    return (
        <div className="flex w-full justify-center py-10 bg-secondary">
            <div className="w-[90%]">
                <h1 className="text-[28px] font-medium underline text-center">Alumni Success Stories</h1>
                <p className="text-center pt-3">Our graduates are making significant contributions across industries and around the world.</p>


                <div className="cart grid grid-cols-4 gap-10 pt-9">
                    {[0, 1, 2, 4].map((data, index) => {
                        return (
                            <div className='h-full rounded-3xl bg-background drop-shadow-lg shadow-ring' key={index}>
                                <div className='rounded-tl-3xl rounded-tr-3xl'>
                                    <img src="image 6.png" className='w-full h-full' alt="" />
                                </div>
                                <div className='px-4 py-3 text-start'>
                                    <h4 className='font-bold text-xl'>Main Library</h4>
                                    <p className="py-2">Class of 2005</p>
                                    <p>My experience in the computer science program provided the foundation for my career in technology. The hands-on projects and internship opportunities were invaluable."</p>
                                </div>
                            </div>
                        )
                    })}

                </div>

                <div className="flex items-center text-center pb-5  justify-center mt-12 text-[#0E7490] font-medium cursor-pointer text-[18px]">
                    <p>View More</p>
                    <div>
                        <IoIosArrowRoundForward className="text-2xl" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AlumniStories