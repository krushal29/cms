import { IoCalendarClearOutline } from "react-icons/io5";


const data = [
    {
        id: 1,
        Heading: "Mid-term Examination Schedule",
        date: "3/1/2024",
        author: "Academic Office",
        desc: "Mid-term examinations will be conducted from March 15-25, 2024. Please check your individual timetables for specific dates and timings.",
        role: "Academic"
    },
    {
        id: 2,
        Heading: "Library Hours Extended",
        date: "2/28/2024",
        author: "Library Administration",
        desc: "Library hours have been extended during examination period. The library will now be open from 8:00 AM to 10:00 PM on weekdays.",
        role: "Facility"
    },
    {
        id: 3,
        Heading: "New Course Registration",
        date: "2/25/2024",
        author: "Academic Office",
        desc: "Registration for elective courses for the next semester is now open. Please visit the academic portal to register before the deadline.",
        role: "Facility"
    },

]



const Notices = () => {
    return (
        <div className="bg-background min-h-[50.8vh] flex justify-center py-10 font-[lora]">
            <div className="w-[90%]">
                <h1 className="font-bold text-4xl text-center underline font-[inner]">NOTICES</h1>
                <div className="my-10 space-y-8">
                    {data.map((val, index) => (
                        <div className="bg-secondary rounded-[15px] p-5 drop-shadow-lg shadow-ring border-l-13 border-black" key={index}>
                            <div className="flex justify-between items-center ">
                                <h1 className="font-medium text-2xl">{val.Heading}</h1>
                                <p className={`${val.role=="Academic"?'bg-cyan-200 text-cyan-950':val.role=="Facility"?'bg-violet-200 text-violet-800':val.role=="Facility"?'bg-rose-200 text-pink-900':''} py-1 px-5 rounded-2xl`}>{val.role}</p>
                            </div>
                            <div className="flex items-center pt-2 text-[15px]">
                                <div className="font-bold">
                                    <IoCalendarClearOutline />
                                </div>
                                <div className="pl-3">
                                    <p>{val.date} . By {val.author}</p>
                                </div>
                            </div>
                            <div>
                                <p className="pt-2 text-[17px]">
                                    {val.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Notices