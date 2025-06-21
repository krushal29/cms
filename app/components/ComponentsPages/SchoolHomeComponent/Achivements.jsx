import Profile from '../../../../public/image 14.png'

const data = [
    {
        id: 1,
        img:Profile,
        Desc1: "Our students clinched the top prize at ITCON Hackathon, winning $10,000 with their innovative tech solution.",
        Desc2: "A proud moment of creativity, teamwork, and real-world impact!"
    },
    {
        id: 2,
        img:Profile,
        Desc1: "Our students clinched the top prize at ITCON Hackathon, winning $10,000 with their innovative tech solution.",
        Desc2: "A proud moment of creativity, teamwork, and real-world impact!"
    },
    {
        id: 3,
        img:Profile,
        Desc1: "Our students clinched the top prize at ITCON Hackathon, winning $10,000 with their innovative tech solution.",
        Desc2: "A proud moment of creativity, teamwork, and real-world impact!"
    }, {
        id: 4,
        img:Profile,
        Desc1: "Our students clinched the top prize at ITCON Hackathon, winning $10,000 with their innovative tech solution.",
        Desc2: "A proud moment of creativity, teamwork, and real-world impact!"
    }
]

const Achivements = () => {
    return (
        <div className='min-h-[45.5vh] flex justify-center py-8'>
            <div className='w-[64%]'>
                <h1 className="font-bold text-3xl text-center underline">Achivements</h1>
                <p className="pt-3 font-medium text-center">Celebrate the remarkable achievements of our departments in research, innovation, student success, and academic excellence</p>



                <div className='mt-8'>
                    {data.map((val, index) => (
                        <div key={index} className='mt-7 flex items-center bg-background rounded-[20px] shadow-2xl'>
                            <div className='w-[40%] h-[180px] border-1 rounded-tl-[20px] rounded-bl-[20px]'>
                                <img className='w-full h-full rounded-tl-[20px] rounded-bl-[20px]' src={val.img} alt="" />
                            </div>
                            <div className='px-4 '>
                                <p className='font-medium text-[18px]'>{val.Desc1}</p>
                                <p className='pt-4 font-medium text-[18px]'>{val.Desc2}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Achivements