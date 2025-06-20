import profile from '../../../../public/image 14.png'
import { CiMail } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";


const data=[
    {
        id:1,
        img:profile,
        Name:"Dr. Sarah Johnson",
        role:"Department Head & Professor",
        tech:"Artificial Intelligence,Machine Learning & Cloud Computing",
        Study:"Ph.D. Computer Science, MIT",
        Email:"s.johnson@grandvalley.edu",
        PhoneNumber:"(555) 123-4567",
        JoiningYear:"2007",
        Experince:"15"
    },
    {
        id:2,
        img:profile,
        Name:"Dr. Sarah Johnson",
        role:"Department Head & Professor",
        tech:"Artificial Intelligence,Machine Learning & Cloud Computing",
        Study:"Ph.D. Computer Science, MIT",
        Email:"s.johnson@grandvalley.edu",
        PhoneNumber:"(555) 123-4567",
        JoiningYear:"2007",
        Experince:"15"
    },
    {
        id:3,
        img:profile,
        Name:"Dr. Sarah Johnson",
        role:"Department Head & Professor",
        tech:"Artificial Intelligence,Machine Learning & Cloud Computing",
        Study:"Ph.D. Computer Science, MIT",
        Email:"s.johnson@grandvalley.edu",
        PhoneNumber:"(555) 123-4567",
        JoiningYear:"2007",
        Experince:"15"
    },
    {
        id:4,
        img:profile,
        Name:"Dr. Sarah Johnson",
        role:"Department Head & Professor",
        tech:"Artificial Intelligence,Machine Learning & Cloud Computing",
        Study:"Ph.D. Computer Science, MIT",
        Email:"s.johnson@grandvalley.edu",
        PhoneNumber:"(555) 123-4567",
        JoiningYear:"2007",
        Experince:"15"
    },
    {
        id:5,
        img:profile,
        Name:"Dr. Sarah Johnson",
        role:"Department Head & Professor",
        tech:"Artificial Intelligence,Machine Learning & Cloud Computing",
        Study:"Ph.D. Computer Science, MIT",
        Email:"s.johnson@grandvalley.edu",
        PhoneNumber:"(555) 123-4567",
        JoiningYear:"2007",
        Experince:"17"
    },
    {
        id:6,
        img:profile,
        Name:"Dr. Sarah Johnson",
        role:"Department Head & Professor",
        tech:"Artificial Intelligence,Machine Learning & Cloud Computing",
        Study:"Ph.D. Computer Science, MIT",
        Email:"s.johnson@grandvalley.edu",
        PhoneNumber:"(555) 123-4567",
        JoiningYear:"2007",
        Experince:"16"
    }
]

const DepartmentStaff = () => {
  return (
    <div className='min-h-[45.5vh] flex justify-center py-8'>
        <div className='w-[90%]'>
            <h1 className="font-bold text-3xl text-center underline">Faculties</h1>
            <p className="pt-3 font-medium text-center"> The Computer Science department features experienced and research-active faculty dedicated to academic excellence and student mentorship.</p>

            <div  className="pt-8 grid grid-cols-2 gap-6">

                {data.map((val,index)=>(
                    <div key={index} className='flex bg-background shadow-2xl rounded-[20px]'>
                    <div className='w-1/3 rounded-tl-[20px] rounded-bl-[20px]'>
                        <img src={val.img} alt="" className='w-full rounded-tl-[20px] rounded-bl-[20px]' />
                    </div>
                    <div className='pl-3 py-1'>
                        <h1 className='text-xl font-semibold'>{val.Name}</h1>
                        <p className='font-medium pt-1'>{val.role}</p>
                        <p className='pt-1 font-normal'>{val.tech}</p>
                        <p className=' font-medium'>{val.Study}</p>
                        <p className='flex items-center'><span className='pr-2'><CiMail /></span>{val.Email}</p>
                        <p className='flex items-center'><span className='pr-2'><FiPhone /></span>{val.PhoneNumber}</p>
                        <p>Joining Year: {val.JoiningYear}</p>
                        <p>{val.Experince} + years of Experince</p>
                    </div>
                </div>
    
                ))}
            </div>
        </div>
    </div>
  )
}

export default DepartmentStaff