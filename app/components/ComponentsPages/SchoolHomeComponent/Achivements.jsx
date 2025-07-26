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
        <div className='min-h-[45.5vh] flex justify-center py-10 bg-secondary-[80%]'>
            <div className='w-[75%]'>
                <h1 className="font-bold text-4xl text-center underline underline-offset-4">Achivements</h1>
                <p className="pt-4 font-medium text-center">Celebrate the remarkable achievements of our departments in research, innovation, student success, and academic excellence</p>



                <div className='mt-8'>
                    {data.map((val, index) => (
                        <div key={index} className='mt-7 flex rounded-[20px] drop-shadow-lg shadow-2xs shadow-ring'>
                            <div className='w-[32%] h-[230px] border-1 rounded-tl-[20px] rounded-bl-[20px]'>
                                <img className='w-full h-full rounded-tl-[20px] rounded-bl-[20px]' src={val.img} alt="" />
                            </div>
                            <div className='px-4 pt-5 bg-background rounded-tr-[20px] rounded-br-[20px]'>
                                <p className='font-medium text-[20px]'>{val.Desc1}</p>
                                <p className='pt-4 font-medium text-[20px]'>{val.Desc2}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Achivements