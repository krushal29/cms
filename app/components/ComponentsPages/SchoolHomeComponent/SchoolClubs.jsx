import { MdComputer } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";
import { LuHandshake } from "react-icons/lu";
import { RiPokerSpadesLine } from "react-icons/ri";

const CartData = [
  {
    icons:<MdComputer/>,
    ClubName: "Computer Society",
    JoinMember: 100,
    desc: "A forum for IT professionals to exchange views and information, learn and share ideas on emerging technologies.",
    KeyActivities: ["Hackathons", "Coding competitions", "Networking events", "Software development workshops"]
  },
  {
    icons:<LuHandshake/>,
    ClubName: "IEEE Student Branch",
    JoinMember: 120,
    desc: "Connect with the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity.",
    KeyActivities: ["Technical workshops", "Research collaborations", "Networking events", "Project exhibitions"]
  },
  {
    icons:<RiPokerSpadesLine/>,
    ClubName: "Entrepreneurship Club",
    JoinMember: 85,
    desc: "Fostering innovation and entrepreneurial thinking through mentorship, resources, and networking opportunities.",
    KeyActivities: ["Startup weekends", "Business plan competitions", "Venture capital pitches", "Innovation labs"]
  },
]


const SchoolClubs = () => {
  return (
    <div className="bg-background flex justify-center pt-8 py-10">
      <div className="w-[70%] text-center">
        <h1 className="text-[28px] font-bold underline text-center underline-offset-4">Clubs</h1>
        <p className="pt-3 w-[70%] mx-auto font-medium">Engage with our vibrant range of student clubs, each created to spark creativity, leadership, and personal growth beyond the classroom.</p>


        <div className='py-10 grid grid-cols-3 gap-10'>
          {CartData.map((data, index) => (
            <div key={index} className="text-start drop-shadow-lg shadow-ring rounded-2xl">
              <div className="bg-[#d4d4d8] py-2 rounded-tl-2xl rounded-tr-2xl">
                <h4 className="flex items-center font-bold text-[17px]"><span className="px-3">{data.icons}</span>{data.ClubName}</h4>
              </div>
              <div className="bg-secondary rounded-bl-2xl rounded-br-2xl pt-4 px-4 h-full">
                <div className="pb-3">
                  <p className="font-semibold">{data.JoinMember}+ Member</p>
                </div>
                <div className="pb-3">
                  <p>{data.desc}</p>
                </div>
                <div>
                  <p>Key Activities:</p>
                  <ul className="pl-6">
                    {data.KeyActivities.map((key, index1) => (
                      <li key={index1} className="list-disc">{key}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
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

export default SchoolClubs