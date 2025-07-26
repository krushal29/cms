
import { IoIosArrowRoundForward } from "react-icons/io";

const CampusFacilities = () => {
    return (
        <div className="flex w-full justify-center py-7 pt-10 bg-secondary">
            <div className="w-[90%]">
                <h1 className="text-center text-[28px] font-medium underline">Campus Facilities</h1>
                <p className="text-center pt-3">Our beautiful campus features modern facilities designed to enhance the academic, social, and personal growth of our students.</p>


                <div className="cart grid grid-cols-4 gap-10 pt-12">
                    {[0, 1, 2, 4].map((data, index) => {
                        return (
                            <div className='h-full rounded-3xl bg-background drop-shadow-lg shadow-ring' key={index}>
                                <div className='rounded-tl-3xl rounded-tr-3xl'>
                                    <img src="image 6.png" className='w-full h-full' alt="" />
                                </div>
                                <div className='px-4 py-3'>
                                    <h4 className='font-semibold text-xl'>Main Library</h4>
                                    <p className='pt-1'>Our state-of-the-art library houses over 1.2 million volumes and provides extensive digital resources, study spaces, and specialized collections.</p>
                                    <h5 className='font-bold py-2'>key features :</h5>
                                    <div className='flex justify-between'>
                                        <p>24/7 Study</p>
                                        <p>Digital Media Lab</p>
                                    </div>
                                    <div className='flex justify-between'>
                                        <p>Areas</p>
                                        <p>Research</p>
                                    </div>
                                    <div className='flex justify-between'>
                                        <p>Special Collections</p>
                                        <p>Assistance</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

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

export default CampusFacilities