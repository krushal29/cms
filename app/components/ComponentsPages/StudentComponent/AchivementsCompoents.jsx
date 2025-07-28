import { Button } from '../../ui/button'
import { MdOutlineFileDownload } from "react-icons/md";
import { FiAward } from "react-icons/fi";
import { useState } from 'react';
import AddAchievements from './AddAchievements';
import EditAchievements from './EditAchievements';

const data = [
  {
    id: 1,
    heading: "Best Project Award",
    Type: "Academic",
    desc: "Won first place in Computer Science project competition",
    OrganisedBy: "CVM University",
    Date: "15-6-2024",
    Location: "ADIT College",
    status: "Approved",
  },
  {
    id: 2,
    heading: "Hackathon Winner",
    Type: "Academic",
    desc: "Secured 2nd runner-up at SSIP Hackathon",
    OrganisedBy: "GTU & SSIP",
    Date: "2024-05-10",
    Location: "LDCE Ahmedabad",
    status: "Approved",
  },
  {
    id: 3,
    heading: "AI Workshop Certificate",
    Type: "Workshop",
    desc: "Participated in AI & ML hands-on training workshop",
    OrganisedBy: "IIT Bombay",
    Date: "2023-12-18",
    Location: "IIT Bombay",
    status: "Pending",
  },
  {
    id: 4,
    heading: "Paper Presentation",
    Type: "Research",
    desc: "Presented paper on Blockchain in Education",
    OrganisedBy: "IEEE Gujarat Section",
    Date: "2024-02-28",
    Location: "Nirma University",
    status: "Approved",
  },
  {
    id: 5,
    heading: "Coding Contest Finalist",
    Type: "Competitive",
    desc: "Top 10 finalist in national level coding competition",
    OrganisedBy: "CodeChef",
    Date: "2024-03-22",
    Location: "Online",
    status: "Pending",
  },
  {
    id: 6,
    heading: "Volunteer Appreciation",
    Type: "Social",
    desc: "Appreciated for volunteering in blood donation camp",
    OrganisedBy: "Red Cross India",
    Date: "2023-11-01",
    Location: "Anand",
    status: "Approved",
  },
  {
    id: 7,
    heading: "Sports Championship",
    Type: "Sports",
    desc: "Gold medalist in Inter-college Table Tennis",
    OrganisedBy: "CVM Sports Committee",
    Date: "2024-01-12",
    Location: "GCET College",
    status: "Pending",
  },
  {
    id: 8,
    heading: "Internship Completion",
    Type: "Professional",
    desc: "Successfully completed internship in Web Development",
    OrganisedBy: "TCS iON",
    Date: "2023-07-31",
    Location: "Remote",
    status: "Approved",
  },
  {
    id: 9,
    heading: "Startup Pitching Contest",
    Type: "Entrepreneurship",
    desc: "Presented startup idea and reached final round",
    OrganisedBy: "Startup India",
    Date: "2024-04-20",
    Location: "IIM Ahmedabad",
    status: "Pending",
  },
  {
    id: 10,
    heading: "Open Source Contributor",
    Type: "Technical",
    desc: "Contributed to open-source project on GitHub",
    OrganisedBy: "GitHub Community",
    Date: "2024-06-05",
    Location: "Online",
    status: "Approved",
  },
];




const AchivementsCompoents = () => {
  const [showAddAchievement,setShowAddAchievement]=useState(false);
  const [showEditAchievement,setShowEditAchievement]=useState(false);
  const [editData,setEditData]=useState({});

  const onCloseAchievement=()=>setShowAddAchievement(false);
  const onEditCloseAchievement=()=>setShowEditAchievement(false);
  
  const onEditHandle=(id)=>{
    setShowEditAchievement(true);

    const filterData=data.find((val)=>val.id==id);
    setEditData(filterData);
  }
  return (
    <div className='bg-background min-h-[50.8vh] flex justify-center py-10'>
      <div className='w-[80%]'>
        <h1 className='font-bold text-4xl text-center underline'>Achivements</h1>

        <div className='flex items-center py-10'>
          <p className='text-[18px] font-semibold'>Upload Your Achivement :</p>
          <Button className='ml-5 px-10 cursor-pointer' onClick={()=>setShowAddAchievement(true)}>Upload Achivement <span><MdOutlineFileDownload /></span></Button>
        </div>

        <div className='grid grid-cols-3 gap-10 py-10'>
          {data.map((val, index) => (
            <div className='bg-secondary py-7 px-5 rounded-2xl drop-shadow-lg shadow-ring' key={index}>
              <div className='flex justify-between'>
                <p className='bg-cyan-200 text-cyan-600 py-1 px-3 rounded-2xl'>{val.Type}</p>
                <p className={`${val.status=="Pending"?'bg-rose-200 text-rose-600':'bg-green-200 text-green-600'}  py-1 px-3 rounded-2xl`}>{val.status}</p>
              </div>

              <div className='flex items-center pt-3'>
                <p><FiAward className='text-xl'/></p>
                <p className='text-xl font-semibold pl-2'>{val.heading}</p>
              </div>

              <div className='pt-4'>
                <p>{val.desc}</p>
              </div>

              <div className='pt-4'>
                <div className='flex justify-between'>
                  <p className='font-semibold'>Organised By :</p>
                  <p className='font-semibold'>{val.OrganisedBy}</p>
                </div>
                <div className='flex justify-between pt-1'>
                  <p className='font-semibold'>Date:</p>
                  <p className='font-semibold'>{val.Date}</p>
                </div>
                <div className='flex justify-between pt-1'>
                  <p className='font-semibold'>Location:</p>
                  <p className='font-semibold'>{val.Location}</p>
                </div>
              </div>

              <div className='pt-4 w-full space-x-8'>
                <Button className='bg-primary-foreground text-black w-[45%] hover:bg-primary-foreground cursor-pointer border border-gray'>View Certificate</Button>
                <Button className='w-[45%] bg-primary-foreground text-black hover:bg-primary-foreground cursor-pointer border border-gray' onClick={()=>onEditHandle(val.id)}>Edit</Button>
              </div>
            </div>
          ))}

        </div>
      </div>

      {showAddAchievement&&<div className='fixed inset-0 backdrop-blur-[1px] drop-shadow-lg shadow-ring'><AddAchievements onCloseAchievement={onCloseAchievement}/></div>}

      {showEditAchievement&&<div className='fixed inset-0 backdrop-blur-[1px] drop-shadow-lg shadow-ring'><EditAchievements onEditCloseAchievement={onEditCloseAchievement} editData={editData}/></div>}
    </div>
  )
}

export default AchivementsCompoents