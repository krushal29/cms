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
    <div className='min-h-[45.5vh] flex justify-center py-10 bg-secondary-[80%]'>
        <div className='w-[85%]'>
            <h1 className="text-center text-4xl font-medium underline">Faculties</h1>
            <p className="pt-4 font-medium text-center w-[50%] mx-auto"> The Computer Science department features experienced and research-active faculty dedicated to academic excellence and student mentorship.</p>

            <div  className="py-15 grid grid-cols-2 gap-10 place-items-center">
                {data.map((val,index)=>(
                    <div key={index} className='flex bg-background drop-shadow-lg shadow-2xs shadow-ring rounded-[20px] h-[180px] w-[92%]'>
                    <div className='w-[38%] h-full rounded-tl-[20px] rounded-bl-[20px]'>
                        <img src={val.img} alt="" className='w-full h-full rounded-tl-[20px] rounded-bl-[20px]' />
                    </div>
                    <div className='px-4 py-1'>
                        <h1 className='text-lg font-semibold'>{val.Name}</h1>
                        <p className='text-sm font-medium'>{val.role}</p>
                        <p className='text-xs pt-1 font-normal'>{val.tech}</p>
                        <p className='text-xs font-medium'>{val.Study}</p>
                        <p className='flex items-center'><span className='pr-2'><CiMail /></span>{val.Email}</p>
                        <p className='flex items-center'><span className='pr-2'><FiPhone /></span>{val.PhoneNumber}</p>
                        <p className='text-xs'>Joining Year: {val.JoiningYear}</p>
                        <p className='text-xs'>{val.Experince} + years of Experince</p>
                    </div>
                </div>
    
                ))}
            </div>
        </div>
    </div>
  )
}

export default DepartmentStaff