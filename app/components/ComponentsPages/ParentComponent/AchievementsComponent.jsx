import { Button } from '../../ui/button'
import { FiAward } from "react-icons/fi";


const data = [
  {
    id: 1,
    heading: "Best Project Award",
    Type: "Academic",
    desc: "Won first place in Computer Science project competition",
    OrganisedBy: "CVM University",
    Date: "15-6-2024",
    Location: "ADIT College",
  },
  {
    id: 2,
    heading: "Hackathon Winner",
    Type: "Academic",
    desc: "Secured 2nd runner-up at SSIP Hackathon",
    OrganisedBy: "GTU & SSIP",
    Date: "2024-05-10",
    Location: "LDCE Ahmedabad",
  },
  {
    id: 3,
    heading: "AI Workshop Certificate",
    Type: "Workshop",
    desc: "Participated in AI & ML hands-on training workshop",
    OrganisedBy: "IIT Bombay",
    Date: "2023-12-18",
    Location: "IIT Bombay",
  },
  {
    id: 4,
    heading: "Paper Presentation",
    Type: "Research",
    desc: "Presented paper on Blockchain in Education",
    OrganisedBy: "IEEE Gujarat Section",
    Date: "2024-02-28",
    Location: "Nirma University",
  },
  {
    id: 5,
    heading: "Coding Contest Finalist",
    Type: "Competitive",
    desc: "Top 10 finalist in national level coding competition",
    OrganisedBy: "CodeChef",
    Date: "2024-03-22",
    Location: "Online",
  },
  {
    id: 6,
    heading: "Volunteer Appreciation",
    Type: "Social",
    desc: "Appreciated for volunteering in blood donation camp",
    OrganisedBy: "Red Cross India",
    Date: "2023-11-01",
    Location: "Anand",
  },
  {
    id: 8,
    heading: "Internship Completion",
    Type: "Professional",
    desc: "Successfully completed internship in Web Development",
    OrganisedBy: "TCS iON",
    Date: "2023-07-31",
    Location: "Remote",
  },
  {
    id: 9,
    heading: "Startup Pitching Contest",
    Type: "Entrepreneurship",
    desc: "Presented startup idea and reached final round",
    OrganisedBy: "Startup India",
    Date: "2024-04-20",
    Location: "IIM Ahmedabad",
  },
  {
    id: 10,
    heading: "Open Source Contributor",
    Type: "Technical",
    desc: "Contributed to open-source project on GitHub",
    OrganisedBy: "GitHub Community",
    Date: "2024-06-05",
    Location: "Online",
  },
];

const AchievementsComponent = () => {
    return (
    <div className='bg-background min-h-[50.8vh] flex justify-center py-10'>
      <div className='w-[80%] drop-shadow-2xl shadow-ring'>
        <h1 className='font-bold text-4xl text-center underline'>Achivements</h1>


      {/* All Achivements */}
        <div className='grid grid-cols-3 gap-10 py-15'>
          {data.map((val, index) => (
            <div className='bg-secondary py-7 px-5 rounded-2xl drop-shadow-lg shadow-ring' key={index}>
              <div className='flex justify-between'>
                <p className='bg-cyan-200 text-cyan-600 py-1 px-3 rounded-2xl'>{val.Type}</p>
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
                <Button className='bg-primary-foreground text-black w-full hover:bg-primary-foreground cursor-pointer border border-gray'>View Certificate</Button>
                {/* <Button className='w-[45%] bg-primary-foreground text-black hover:bg-primary-foreground cursor-pointer border border-gray' onClick={()=>onEditFilterHandle(val.id)}>Edit</Button> */}
              </div>
            </div>
          ))}

        </div>
      </div>

  
     
    </div>
  )
}

export default AchievementsComponent