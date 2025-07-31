// Import additional icons if needed
import { useNavigate } from "react-router";
import { IoReorderThreeOutline } from "react-icons/io5";
import { useState } from "react";
import {
  FaHome, FaBook, FaCalendarAlt, FaBullhorn,
  FaTrophy, FaMoneyBillWave, FaSignOutAlt, FaTimes
} from "react-icons/fa";
import { MdQuiz, MdHowToReg, MdAssessment } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";

const StudentNavbar = () => {
  const navigate = useNavigate();
  const [showSidebar, setShowSidebar] = useState(false);
  const [showQuizClick,setshowQuizClick]=useState(false);
  const [showExamClick,setShowExamClick]=useState(false);
  const [showFeesHover,setShowFeeHover]=useState(false);
  const [showAchievementsHover,setShowAchievementsHover]=useState(false);
  const [showLeaveHover,setShowLeaveHover]=useState(false);

  console.log(showFeesHover);

  return (
    <div className="bg-secondary flex justify-center">
      <div className="flex justify-between items-center w-[95%] py-3">
        <h5
          className="font-bold text-xl cursor-pointer"
          onClick={() => navigate('/StudentDashBoard')}
        >
          Grand Valley College
        </h5>

        {!showSidebar && (
          <IoReorderThreeOutline
            className="text-4xl  cursor-pointer"
            onClick={() => setShowSidebar(true)}
          />
        )}
      </div>

      {/* Sidebar */}
      {showSidebar && (
        <div className="fixed inset-0 z-20 backdrop-blur-[1px]">
          <div className="absolute top-0 left-0 h-full w-[280px] bg-white shadow-lg p-5 overflow-y-auto ">
            <div className="flex justify-between items-center border-b pb-3 mb-4">
              <h2 className="text-lg font-bold text-gray-800">Student</h2>
              <FaTimes
                className="text-xl cursor-pointer"
                onClick={() => setShowSidebar(false)}
              />
            </div>

            <ul className="flex flex-col gap-4 text-gray-800">
              <li onClick={() => { navigate('/StudentDashBoard'); setShowSidebar(false); }} className="flex items-center gap-2 cursor-pointer hover:bg-accent py-2 px-4 rounded-lg">
                <FaHome /> Dashboard
              </li>
              <li onClick={() => { navigate('/StudentAttendance'); setShowSidebar(false); }} className="flex items-center gap-2 cursor-pointer hover:bg-accent py-2 px-4 rounded-lg">
                <MdHowToReg /> Attendance
              </li>
              <li onClick={() => { navigate('/StudentMaterial'); setShowSidebar(false); }} className="flex items-center gap-2 cursor-pointer hover:bg-accent py-2 px-4 rounded-lg">
                <FaBook /> Materials
              </li>
              <li onClick={() => { navigate('/StudentEvent'); setShowSidebar(false); }} className="flex items-center gap-2 cursor-pointer hover:bg-accent py-2 px-4 rounded-lg">
                <FaCalendarAlt /> Events
              </li>
              <li onClick={() => { navigate('/StudentNotice'); setShowSidebar(false); }} className="flex items-center gap-2 cursor-pointer hover:bg-accent py-2 px-4 rounded-lg">
                <FaBullhorn /> Notices
              </li>

              {/* Achievements+Pending */}
              <li onMouseEnter={()=>setShowAchievementsHover(true)} onMouseLeave={()=>setShowAchievementsHover(false)} onClick={() => { navigate('/StudentAchievements'); setShowSidebar(false); }} className=" hover:bg-accent py-2 px-4 rounded-lg">
                 <div className="flex items-center gap-2 cursor-pointer" >
                <FaTrophy /> Achievements
                </div>
                <ul className={`${showAchievementsHover?'block':'hidden'}`}>
                  <li>Upload Achivement</li>
                </ul>
              </li>

              {/* Fees+pending */}
              <li  onMouseEnter={()=>setShowFeeHover(true)} onMouseLeave={()=>setShowFeeHover(false)} onClick={() => { navigate('/StudentFees'); setShowSidebar(false); }} className=" cursor-pointer hover:bg-accent py-2 px-4 rounded-lg relative">
                <div className="flex items-center gap-2" >
                <FaMoneyBillWave /> Fees
                </div>
                <ul className={`${showFeesHover?'block':'hidden'}`}>
                  <li>Pay</li>
                  <li>Verify</li>
                </ul>
              </li>

             {/* Leave */}
              <li  onMouseEnter={()=>setShowLeaveHover(true)} onMouseLeave={()=>setShowLeaveHover(false)}  onClick={() => { navigate('/StudentLeave'); setShowSidebar(false); }} className=" hover:bg-accent py-2 px-4 rounded-lg">
               
                 <div className="flex items-center gap-2 cursor-pointer" >
               <FaSignOutAlt /> Apply for Leave
                </div>
                <ul className={`${showLeaveHover?'block':'hidden'}`}>
                  <li>Apply</li>
                </ul>
              </li>

              {/* Quiz Section */}
              <li className="mt-2 font-semibold text-gray-600" onClick={()=>setshowQuizClick(!showQuizClick)}>
                <div className="cursor-pointer">
                  Quiz Section
                  </div>
                <ul className={`${showQuizClick?'block':'hidden'} pt-2`}>
                   <li onClick={() => { navigate('/QuizUpcomming'); setShowSidebar(false); }} className="flex items-center gap-2 cursor-pointer hover:bg-accent py-2 px-4 rounded-lg">
                <MdQuiz /> Upcoming Quizzes
              </li>
              <li onClick={() => { navigate('/QuizResult'); setShowSidebar(false); }} className="flex items-center gap-2 cursor-pointer hover:bg-accent py-2 px-4 rounded-lg">
                <MdAssessment /> Quiz Results
              </li>
                </ul>
              </li>


              {/* Exam Section */}
              <li className="mt-2 font-semibold text-gray-600">
                <div className="cursor-pointer" onClick={()=>setShowExamClick(!showExamClick)}>
                    Exam Section
                </div>
                <ul className={`${showExamClick?'block':'hidden'} pt-2`}>
               <li onClick={() => { navigate('/ExamInternal'); setShowSidebar(false); }} className="flex items-center gap-2 cursor-pointer hover:bg-accent py-2 px-4 rounded-lg">
                <GiGraduateCap /> Internal Exam
              </li>
              <li onClick={() => { navigate('/ExamExtenal'); setShowSidebar(false); }} className="flex items-center gap-2 cursor-pointer hover:bg-accent py-2 px-4 rounded-lg">
                <GiGraduateCap /> External Exam
              </li>
                </ul>  
                </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentNavbar;



// import {
//   Sidebar,
//   SidebarContent,
//   SidebarGroup,
//   SidebarGroupContent,
//   SidebarGroupLabel,
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
// } from "../../ui/sidebar"
 

// const StudentNavbar = () => {
//   const items = [
//     { title: "Dashboard", url: "/StudentDashBoard" },
//     { title: "Attendance", url: "/StudentAttendance" },
//     { title: "Materials", url: "/StudentMaterial" },
//     { title: "Events", url: "/StudentEvent" },
//     { title: "Notices", url: "/StudentNotice" },
//     { title: "Achievements", url: "/StudentAchievements" },
//     { title: "Fees", url: "/StudentFees" },
//     { title: "Apply for Leave", url: "/StudentLeave" },
//   ];

//   return (
//      <Sidebar>
//       <SidebarContent>
//         <SidebarGroup>
//           <SidebarGroupLabel>Student Menu</SidebarGroupLabel>
//           <SidebarGroupContent>
//             <SidebarMenu>
//               {items.map((item) => (
//                 <SidebarMenuItem key={item.title}>
//                   <SidebarMenuButton asChild>
//                     <a href={item.url}>
//                       <span>{item.title}</span>
//                     </a>
//                   </SidebarMenuButton>
//                 </SidebarMenuItem>
//               ))}
//             </SidebarMenu>
//           </SidebarGroupContent>
//         </SidebarGroup>
//       </SidebarContent>
//     </Sidebar>
//   )
// }

// export default StudentNavbar