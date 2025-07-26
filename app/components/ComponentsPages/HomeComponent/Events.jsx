import { IoIosArrowRoundForward } from "react-icons/io";
import { HiLocationMarker } from "react-icons/hi";


const Obj = [
    {
        id: 1,
        image: "image 3.png",
        Heading: "Grand Valley College Awarded $2M Research Grant",
        Desc: "The National Science Foundation has awarded Grand Valley College a $2 million grant to support research on sustainable energy solutions.This commitment underscores GVSU's dedication to advancing research and education in sustainable energy solutions, fostering innovation, and promoting environmental stewardship.",
        location:"surat"
    },
    {
        id: 2,
        image: "image 3.png",
        Heading: "Grand Valley College Awarded $2M Research Grant",
        Desc: "The National Science Foundation has awarded Grand Valley College a $2 million grant to support research on sustainable energy solutions.This commitment underscores GVSU's dedication to advancing research and education in sustainable energy solutions, fostering innovation, and promoting environmental stewardship.",
        location:"surat"
    },
    {
        id: 3,
        image: "image 3.png",
        Heading: "Grand Valley College Awarded $2M Research Grant",
        Desc: "The National Science Foundation has awarded Grand Valley College a $2 million grant to support research on sustainable energy solutions.This commitment underscores GVSU's dedication to advancing research and education in sustainable energy solutions, fostering innovation, and promoting environmental stewardship.",
        location:"surat"
    },
    {
        id: 4,
        image: "image 3.png",
        Heading: "Grand Valley College Awarded $2M Research Grant",
        Desc: "The National Science Foundation has awarded Grand Valley College a $2 million grant to support research on sustainable energy solutions.This commitment underscores GVSU's dedication to advancing research and education in sustainable energy solutions, fostering innovation, and promoting environmental stewardship.",
        location:"surat"
    },
]

const Events = () => {
    return (
        <div className='flex justify-center py-7 bg-background pt-8'>
            <div className='w-[90%]'>
                <h1 className="text-center text-[28px] font-medium underline">Upcoming Events</h1>
                <p className="text-center pt-2">Join us for these exciting events happening across campus.</p>

                <div className="pt-5">
                    {Obj.map((data, index) => {
                        return (
                            <div className='flex mt-8 drop-shadow-lg shadow-ring' key={index}>
                                <div className='w-[50%] rounded-tl-4xl rounded-bl-4xl'>
                                    <img className='w-full h-full' src={data.image} alt="" />
                                </div>
                                <div className='bg-secondary rounded-tr-4xl rounded-br-4xl py-6 px-5'>
                                    <h4 className='text-[19px] font-medium'>{data.Heading}</h4>
                                    <p className="flex items-center pt-2"><HiLocationMarker /><span className="pl-1 text-[16px]">{data.location}</span></p>
                                    <p className='pt-3'>{data.Desc}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="flex items-center text-center mt-5  justify-center py-5 text-[#0E7490] font-medium  text-[18px]">
                    <p className="cursor-pointer">View More</p>
                    <div>
                        <IoIosArrowRoundForward className="text-2xl" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Events