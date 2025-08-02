// Import additional icons if needed
import { useNavigate } from "react-router";
import { IoReorderThreeOutline } from "react-icons/io5";
import { useState } from "react";
import {
  FaHome, FaBook, FaCalendarAlt, FaBullhorn,
  FaTrophy, FaMoneyBillWave, FaSignOutAlt, FaTimes,FaQuestionCircle , FaClipboardList,FaCreditCard,FaCheckCircle,FaPaperPlane,FaCloudUploadAlt
} from "react-icons/fa";
import { MdQuiz, MdHowToReg, MdAssessment,MdLogout } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import ApplyLeave from "./ApplyLeave";
import AddAchievements from "./AddAchievements";
import PayFeePopup from "./PayFeePopup";
import VerifyFees from "./VerifyFees";


const StudentNavbar = () => {
  const navigate = useNavigate();
  const [showSidebar, setShowSidebar] = useState(false);
  const [showQuizClick,setshowQuizClick]=useState(false);
  const [showExamClick,setShowExamClick]=useState(false);
  const [showFeesClick,setShowFeeClick]=useState(false);
  const [showAchievementsClick,setshowAchievementsClick]=useState(false);
  
  
  //Leave Popup
  const [showLeaveClick,setShowLeaveClick]=useState(false);
    const [form, setForm] = useState({
      EnrollmentNumber: '',
      LeaveType: '',
      FromDate: '',
      ToDate: '',
      ProvideReason: '',
      UploadCertificate: '',
    });
  const [LeavePopup, setLeavePopup] = useState(false);
    const onCloseLeave = () => {
    setLeavePopup(false);
  };
  const onChangeHandle = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const onSubmitHandle = (e) => {
    e.preventDefault();
    try {
      console.log(form);
    } catch (e) {
      console.log(e);
    }
  };
  // End of Leave Popup

  // Achievement Popup
  const [showAddAchievement,setShowAddAchievement]=useState(false);
    const [Achievementform,AchievementsetForm]=useState({
    AchievementTitle:"",
    AchievementType:"",
    Location:"",
    OrganisedBy:"",
    Date:"",
    ProvideReason:"",
    UploadCertificate:""
  })
  const onCloseAchievement=()=>setShowAddAchievement(false);

  const onChangeAchievementHandle=(e)=>{
      const {name,value}=e.target;  
      AchievementsetForm({...Achievementform,[name]:value});
  }

    const onSubmitAchievementHandle=(e)=>{
    e.preventDefault();
    try{
      console.log(Achievementform);
    }catch(e){
      console.log(e);
    }
  }

  // End of Achievement Popup


  // Fees Pay popup
    const [showPaypopup, setShowPayPopup] = useState(false);

    const onClosePayPopup = () => setShowPayPopup(false);

    // End of pay popup



    //Verify popup
     const [showVerifyPopup, setShowVerifyPopup] = useState(false);
      const [verifyform, setverifyForm] = useState({
        EnrollmentNumber: "",
        Semester: "",
        Amount: "",
        PaymentType: "",
        UploadReceipt: ""
    })

    const onChangeVerifyHandle = (e) => {
        const { name, value } = e.target;
        setverifyForm({ ...verifyform, [name]: value })
    }

    const onVerifySubmit = (e) => {
        e.preventDefault();
        try {
            console.log(verifyform);
        } catch (e) {
            console.log(e);
        }
    }

    const onCloseVerifyPopup = () => setShowVerifyPopup(false);
    // End of Verify Popup



    // logout
    const LogoutHandle=()=>{
      alert("Logout Successfull")
    }

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
            <div className="flex justify-between items-center border-b pb-3 mb-3">
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


              {/* Achievements */}
              <li  onClick={()=>setshowAchievementsClick(!showAchievementsClick)}>
                <div className="cursor-pointer flex justify-between items-center px-4 py-2 hover:bg-accent rounded-lg">
                  <div className="flex items-center gap-2">
                      <FaTrophy /> 
                      <span>Achievements Section</span>
                  </div>
                 <span>{showAchievementsClick ? '▾' : '▸'}</span>
                </div>
                <ul className={`${showAchievementsClick?'block':'hidden'} pt-2 pl-7`}>
                  <li onClick={() => { navigate('/StudentAchievements'); setShowSidebar(false); }} className="flex items-center gap-2 cursor-pointer hover:bg-accent py-2 px-4 rounded-lg">
                <FaTrophy /> Achievements
              </li>
                  <li className="flex items-center gap-2 cursor-pointer hover:bg-accent py-2 px-4 rounded-lg" onClick={()=>{setShowAddAchievement(true);setShowSidebar(false);}}>
                <FaCloudUploadAlt /> Upload Achivement
              </li>
                </ul>
              </li>



              {/* Fees */}
              <li onClick={()=>setShowFeeClick(!showFeesClick)}>
                <div className="cursor-pointer flex justify-between items-center px-4 py-2 hover:bg-accent rounded-lg">
                  <div className="flex items-center gap-2">
                      <FaMoneyBillWave /> {/* Icon for Quiz Section title */}
                      <span>Fees Section</span>
                  </div>
                 <span>{showFeesClick ? '▾' : '▸'}</span>
                </div>
                <ul className={`${showFeesClick?'block':'hidden'} pt-2 pl-7`}>
                  <li onClick={() => { navigate('/StudentFees'); setShowSidebar(false); }} className="flex items-center gap-2 cursor-pointer hover:bg-accent py-2 px-4 rounded-lg">
                <FaMoneyBillWave /> Fees
              </li>
              <li className="flex items-center gap-2 cursor-pointer hover:bg-accent py-2 px-4 rounded-lg"  onClick={() => {setShowPayPopup(true);setShowSidebar(false)}}>
                <FaCreditCard /> Pay
              </li>
              <li className="flex items-center gap-2 cursor-pointer hover:bg-accent py-2 px-4 rounded-lg" onClick={() => {setShowVerifyPopup(true);setShowSidebar(false)}}>
                <FaCheckCircle /> Verify
              </li>
                </ul>
              </li>
              

             {/* Leave */}
              <li onClick={()=>setShowLeaveClick(!showLeaveClick)} >
                  <div className="cursor-pointer flex justify-between items-center px-4 py-2 hover:bg-accent rounded-lg">
                  <div className="flex items-center gap-2">
                      <FaSignOutAlt /> 
                      <span>Leave Section</span>
                  </div>
                 <span>{showLeaveClick ? '▾' : '▸'}</span>
                </div>
                <ul className={`${showLeaveClick?'block':'hidden'} pt-2 pl-7`}>
                  <li onClick={() => { navigate('/StudentLeave'); setShowSidebar(false); }} className="flex items-center gap-2 cursor-pointer hover:bg-accent py-2 px-4 rounded-lg">
                <FaSignOutAlt /> Leave
              </li>
                  <li className="flex items-center gap-2 cursor-pointer hover:bg-accent py-2 px-4 rounded-lg" onClick={()=>{
                    setLeavePopup(true);
                    setShowSidebar(false);
                  }}><FaPaperPlane/>Apply for leave</li>
                </ul>
              </li>



              {/* Quiz Section */}
              <li onClick={()=>setshowQuizClick(!showQuizClick)}>
                <div className="cursor-pointer flex justify-between items-center px-4 py-2 hover:bg-accent rounded-lg">
                   <div className="flex items-center gap-2">
                      <FaQuestionCircle /> {/* Icon for Quiz Section title */}
                      <span>Quiz Section</span>
                  </div>
                   <span>{showQuizClick ? '▾' : '▸'}</span>
                  </div>
                <ul className={`${showQuizClick?'block':'hidden'} pt-2 pl-7`}>
                   <li onClick={() => { navigate('/QuizUpcomming'); setShowSidebar(false); }} className="flex items-center gap-2 cursor-pointer hover:bg-accent py-2 px-4 rounded-lg">
                <MdQuiz /> Upcoming Quizzes
              </li>
              <li onClick={() => { navigate('/QuizResult'); setShowSidebar(false); }} className="flex items-center gap-2 cursor-pointer hover:bg-accent py-2 px-4 rounded-lg">
                <MdAssessment /> Quiz Results
              </li>
                </ul>
              </li>



              {/* Exam Section */}
              <li onClick={()=>setShowExamClick(!showExamClick)}>
                <div className="cursor-pointer flex justify-between items-center px-4 py-2 hover:bg-accent rounded-lg">          
                 <div className="flex items-center gap-2">
                   <FaClipboardList /> 
                   <span>Exam Section</span>
                 </div>
                   <span>{showExamClick ? '▾' : '▸'}</span>
                </div>
                <ul className={`${showExamClick?'block':'hidden'} pt-2 pl-7`}>
               <li onClick={() => { navigate('/ExamInternal'); setShowSidebar(false); }} className="flex items-center gap-2 cursor-pointer hover:bg-accent py-2 px-4 rounded-lg">
                <GiGraduateCap /> Internal Exam
              </li>
              <li onClick={() => { navigate('/ExamExtenal'); setShowSidebar(false); }} className="flex items-center gap-2 cursor-pointer hover:bg-accent py-2 px-4 rounded-lg">
                <GiGraduateCap /> External Exam
              </li>
                </ul>  
                </li>

                {/* Logout */}
                <li className="cursor-pointer flex items-center gap-2 px-4 py-2 hover:bg-accent rounded-lg" onClick={LogoutHandle}><MdLogout/> Logout</li>
            </ul>
          </div>
        </div>
      )}





      {/* popup + may be change */} 
       {LeavePopup && (
        <div className="backdrop-blur-[3px] fixed inset-0 drop-shadow-lg shadow-ring z-10">
          <ApplyLeave
            onCloseLeave={onCloseLeave}
            form={form}
            onChangeHandle={onChangeHandle}
            onSubmitHandle={onSubmitHandle}
          />
        </div>
      )}

        {/*Achievements+may be change  */}
        {showAddAchievement&&<div className='fixed inset-0 backdrop-blur-[1px] drop-shadow-lg shadow-ring z-10'><AddAchievements onCloseAchievement={onCloseAchievement} onChangeHandle={onChangeAchievementHandle} form={Achievementform} onSubmitHandle={onSubmitAchievementHandle}/></div>}



        {/* Fees Pay+may be change */}
        {showPaypopup && <div className='fixed inset-0 backdrop-blur-[3px] drop-shadow-lg shadow-ring z-10'><PayFeePopup onClosePayPopup={onClosePayPopup} /></div>}


         {/* Verify + may br change */}
         {showVerifyPopup && <div className='fixed inset-0 backdrop-blur-[3px] drop-shadow-lg shadow-ring z-10'><VerifyFees onCloseVerifyPopup={onCloseVerifyPopup} verifyform={verifyform} onChangeVerifyHandle={onChangeVerifyHandle} onVerifySubmit={onVerifySubmit}/></div>}
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