
// import {
//   Sidebar,
//   SidebarContent,
//   SidebarGroup,
//   SidebarGroupContent,
//   SidebarGroupLabel,
//   SidebarMenu,
//   SidebarMenuItem,
//   SidebarMenuButton,
// } from "../../ui/sidebar";
// import { useNavigate } from "react-router";
// import { useState } from "react";

// import {
//   FaHome, FaBook, FaCalendarAlt, FaBullhorn,
//   FaTrophy, FaMoneyBillWave, FaSignOutAlt,
//   FaCloudUploadAlt, FaCreditCard, FaCheckCircle,
//   FaQuestionCircle, FaClipboardList, FaPaperPlane
// } from "react-icons/fa";
// import { FaAngleDown, FaAngleRight } from "react-icons/fa6";
// import { MdQuiz, MdAssessment, MdHowToReg, MdLogout } from "react-icons/md";
// import { GiGraduateCap } from "react-icons/gi";
// import { useLocation } from "react-router";
// import ApplyLeave from "./ApplyLeave";
// import AddAchievements from "./AddAchievements";
// import PayFeePopup from "./PayFeePopup";
// import VerifyFees from "./VerifyFees";


// const AppSidebar = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   console.log("location", location.pathname);



//   // collapsible toggles
//   const [openAchievements, setOpenAchievements] = useState(false);
//   const [openFees, setOpenFees] = useState(false);
//   const [openLeave, setOpenLeave] = useState(false);
//   const [openQuiz, setOpenQuiz] = useState(false);
//   const [openExam, setOpenExam] = useState(false);


//   //Leave Popup
//   const [form, setForm] = useState({
//     EnrollmentNumber: '',
//     LeaveType: '',
//     FromDate: '',
//     ToDate: '',
//     ProvideReason: '',
//     UploadCertificate: '',
//   });
//   const [LeavePopup, setLeavePopup] = useState(false);
//   const onShowLeave = () => setLeavePopup(true)
//   const onCloseLeave = () => {
//     setLeavePopup(false);
//   };
//   const onChangeHandle = (e) => {
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: value });
//   };

//   const onSubmitHandle = (e) => {
//     e.preventDefault();
//     try {
//       console.log(form);
//     } catch (e) {
//       console.log(e);
//     }
//   };
//   //   // End of Leave Popup



//   // Fees Pay popup
//   const [showPaypopup, setShowPayPopup] = useState(false);

//   const onShowPay = () => setShowPayPopup(true);
//   const onClosePayPopup = () => setShowPayPopup(false);

//   // End of pay popup


//   //Verify popup
//   const [showVerifyPopup, setShowVerifyPopup] = useState(false);
//   const [verifyform, setverifyForm] = useState({
//     EnrollmentNumber: "",
//     Semester: "",
//     Amount: "",
//     PaymentType: "",
//     UploadReceipt: ""
//   })

//   const onShowVerify = () => setShowVerifyPopup(true);

//   const onChangeVerifyHandle = (e) => {
//     const { name, value } = e.target;
//     setverifyForm({ ...verifyform, [name]: value })
//   }

//   const onVerifySubmit = (e) => {
//     e.preventDefault();
//     try {
//       console.log(verifyform);
//     } catch (e) {
//       console.log(e);
//     }
//   }

//   const onCloseVerifyPopup = () => setShowVerifyPopup(false);
//   // End of Verify Popup


//   // Achievement Popup
//   const [showAddAchievement, setShowAddAchievement] = useState(false);
//   const [Achievementform, AchievementsetForm] = useState({
//     AchievementTitle: "",
//     AchievementType: "",
//     Location: "",
//     OrganisedBy: "",
//     Date: "",
//     ProvideReason: "",
//     UploadCertificate: ""
//   })
//   const onCloseAchievement = () => setShowAddAchievement(false);

//   const onShowAchievement = () => setShowAddAchievement(true);
//   const onChangeAchievementHandle = (e) => {
//     const { name, value } = e.target;
//     AchievementsetForm({ ...Achievementform, [name]: value });
//   }

//   const onSubmitAchievementHandle = (e) => {
//     e.preventDefault();
//     try {
//       console.log(Achievementform);
//     } catch (e) {
//       console.log(e);
//     }
//   }
//   // End of Achievement Popup



//   const onLogout = () => { }

//   return (
//     <Sidebar>
//       <SidebarContent>
//         <SidebarGroup>
//           <SidebarGroupLabel><h2 className="text-xl font-bold text-gray-800 mt-5">Student</h2></SidebarGroupLabel>
//           <SidebarGroupContent>
//             <SidebarMenu className="mt-5">

//               {/* Dashboard */}
//               <SidebarMenuItem className="mt-2">
//                 <SidebarMenuButton className={`text-[15px] ${location.pathname === "/StudentDashBoard" ? 'bg-primary-foreground' : ''}`} onClick={() => navigate("/StudentDashBoard")}>
//                   <FaHome /> Dashboard
//                 </SidebarMenuButton>
//               </SidebarMenuItem>

//               {/* Attendance */}
//               <SidebarMenuItem className="mt-2">
//                 <SidebarMenuButton className={`text-[15px] ${location.pathname === "/StudentAttendance" ? 'bg-primary-foreground' : ''}`} onClick={() => navigate("/StudentAttendance")}>
//                   <MdHowToReg /> Attendance
//                 </SidebarMenuButton>
//               </SidebarMenuItem>

//               {/* Materials */}
//               <SidebarMenuItem className="mt-2">
//                 <SidebarMenuButton className={`text-[15px] ${location.pathname === "/StudentMaterial" ? 'bg-primary-foreground' : ''}`} onClick={() => navigate("/StudentMaterial")}>
//                   <FaBook /> Materials
//                 </SidebarMenuButton>
//               </SidebarMenuItem>

//               {/* Events */}
//               <SidebarMenuItem className="mt-2">
//                 <SidebarMenuButton className={`text-[15px] ${location.pathname === "/StudentEvent" ? 'bg-primary-foreground' : ''}`} onClick={() => navigate("/StudentEvent")}>
//                   <FaCalendarAlt /> Events
//                 </SidebarMenuButton>
//               </SidebarMenuItem>

//               {/* Notices */}
//               <SidebarMenuItem className="mt-2">
//                 <SidebarMenuButton className={`text-[15px] ${location.pathname === "/StudentNotice" ? 'bg-primary-foreground' : ''}`} onClick={() => navigate("/StudentNotice")}>
//                   <FaBullhorn /> Notices
//                 </SidebarMenuButton>
//               </SidebarMenuItem>

//               {/* Achievements */}
//               <SidebarMenuItem className="mt-2">
//                 <SidebarMenuButton className={`text-[15px] flex justify-between ${location.pathname === "/StudentAchievements" ? 'bg-primary-foreground' : ''}`} onClick={() => setOpenAchievements(!openAchievements)}>
//                   <div className="flex items-center gap-2">
//                     <FaTrophy /> Achievements Section
//                   </div><div> {openAchievements ? <FaAngleDown /> : <FaAngleRight />}</div>
//                 </SidebarMenuButton>
//                 {openAchievements && (
//                   <div className="ml-6 space-y-2">
//                     <SidebarMenuButton onClick={() => navigate("/StudentAchievements")}>
//                       <FaTrophy /> Achievements
//                     </SidebarMenuButton>
//                     <SidebarMenuButton onClick={onShowAchievement}>
//                       <FaCloudUploadAlt /> Upload Achievement
//                     </SidebarMenuButton>
//                   </div>
//                 )}
//               </SidebarMenuItem>

//               {/* Fees */}
//               <SidebarMenuItem className="mt-2">
//                 <SidebarMenuButton className={`text-[15px] flex justify-between ${location.pathname === "/StudentFees" ? 'bg-primary-foreground' : ''}`} onClick={() => setOpenFees(!openFees)}>
//                   <div className="flex items-center gap-2">
//                     <FaMoneyBillWave /> Fees Section
//                   </div>
//                   <div>
//                     {openFees ? <FaAngleDown /> : <FaAngleRight />}
//                   </div>
//                 </SidebarMenuButton>
//                 {openFees && (
//                   <div className="ml-6 space-y-2">
//                     <SidebarMenuButton onClick={() => navigate("/StudentFees")}>
//                       <FaMoneyBillWave /> Fees
//                     </SidebarMenuButton>
//                     <SidebarMenuButton onClick={onShowPay}>
//                       <FaCreditCard /> Pay
//                     </SidebarMenuButton>
//                     <SidebarMenuButton onClick={onShowVerify}>
//                       <FaCheckCircle /> Verify
//                     </SidebarMenuButton>
//                   </div>
//                 )}
//               </SidebarMenuItem>

//               {/* Leave */}
//               <SidebarMenuItem className="mt-2">
//                 <SidebarMenuButton className={`text-[15px] flex justify-between ${location.pathname === "/StudentLeave" ? 'bg-primary-foreground' : ''}`} onClick={() => setOpenLeave(!openLeave)}>
//                   <div className="flex items-center gap-2">
//                     <FaSignOutAlt /> Leave Section
//                   </div>
//                   <div>
//                     {openLeave ? <FaAngleDown /> : <FaAngleRight />}
//                   </div>
//                 </SidebarMenuButton>
//                 {openLeave && (
//                   <div className="ml-6 space-y-2">
//                     <SidebarMenuButton onClick={() => navigate("/StudentLeave")}>
//                       <FaSignOutAlt /> Leave
//                     </SidebarMenuButton>
//                     <SidebarMenuButton onClick={onShowLeave}>
//                       <FaPaperPlane /> Apply for Leave
//                     </SidebarMenuButton>
//                   </div>
//                 )}
//               </SidebarMenuItem>

//               {/* Quiz */}
//               <SidebarMenuItem className="mt-2">
//                 <SidebarMenuButton className={`text-[15px] flex justify-between ${location.pathname === "/QuizUpcomming" ? 'bg-primary-foreground' : ''}`} onClick={() => setOpenQuiz(!openQuiz)}>
//                   <div className="flex items-center gap-2">
//                     <FaQuestionCircle /> Quiz Section
//                   </div>
//                   <div>{openQuiz ? <FaAngleDown /> : <FaAngleRight />}</div>
//                 </SidebarMenuButton>
//                 {openQuiz && (
//                   <div className="ml-6 space-y-2">
//                     <SidebarMenuButton onClick={() => navigate("/QuizUpcomming")}>
//                       <MdQuiz /> Upcoming Quizzes
//                     </SidebarMenuButton>
//                     <SidebarMenuButton onClick={() => navigate("/QuizResult")}>
//                       <MdAssessment /> Quiz Results
//                     </SidebarMenuButton>
//                   </div>
//                 )}
//               </SidebarMenuItem>

//               {/* Exam */}
//               <SidebarMenuItem className="mt-2">
//                 <SidebarMenuButton className={`text-[15px] flex justify-between ${location.pathname === "/ExamInternal" || location.pathname === "/ExamExtenal" ? 'bg-primary-foreground' : ''}`} onClick={() => setOpenExam(!openExam)}>
//                   <div className="flex items-center gap-2">
//                     <FaClipboardList /> Exam Section
//                   </div>
//                   <div>{openExam ? <FaAngleDown /> : <FaAngleRight />}</div>
//                 </SidebarMenuButton>
//                 {openExam && (
//                   <div className="ml-6 space-y-2">
//                     <SidebarMenuButton onClick={() => navigate("/ExamInternal")}>
//                       <GiGraduateCap /> Internal Exam
//                     </SidebarMenuButton>
//                     <SidebarMenuButton onClick={() => navigate("/ExamExtenal")}>
//                       <GiGraduateCap /> External Exam
//                     </SidebarMenuButton>
//                   </div>
//                 )}
//               </SidebarMenuItem>

//               {/* Logout */}
//               <SidebarMenuItem className="mt-2">
//                 <SidebarMenuButton className={`text-[15px]`} onClick={onLogout}>
//                   <MdLogout /> Logout
//                 </SidebarMenuButton>
//               </SidebarMenuItem>
//             </SidebarMenu>
//           </SidebarGroupContent>
//         </SidebarGroup>
//       </SidebarContent>



//       {/* popup + may be change */}
//       {LeavePopup && (
//         <div className="backdrop-blur-[3px] fixed inset-0 drop-shadow-lg shadow-ring z-10">
//           <ApplyLeave
//             onCloseLeave={onCloseLeave}
//             form={form}
//             onChangeHandle={onChangeHandle}
//             onSubmitHandle={onSubmitHandle}
//           />
//         </div>
//       )}

//       {/*Achievements+may be change  */}
//       {showAddAchievement && <div className='fixed inset-0 backdrop-blur-[1px] drop-shadow-lg shadow-ring z-10'><AddAchievements onCloseAchievement={onCloseAchievement} onChangeHandle={onChangeAchievementHandle} form={Achievementform} onSubmitHandle={onSubmitAchievementHandle} /></div>}



//       {/* Fees Pay+may be change */}
//       {showPaypopup && <div className='fixed inset-0 backdrop-blur-[3px] drop-shadow-lg shadow-ring z-10'><PayFeePopup onClosePayPopup={onClosePayPopup} /></div>}


//       {/* Verify + may br change */}
//       {showVerifyPopup && <div className='fixed inset-0 backdrop-blur-[3px] drop-shadow-lg shadow-ring z-10'><VerifyFees onCloseVerifyPopup={onCloseVerifyPopup} verifyform={verifyform} onChangeVerifyHandle={onChangeVerifyHandle} onVerifySubmit={onVerifySubmit} /></div>}
//     </Sidebar>
//   );
// };

// export default AppSidebar;


import React, { useState } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "../../ui/sidebar";
import { useNavigate, useLocation } from "react-router";

import {
  FaHome,
  FaBook,
  FaCalendarAlt,
  FaBullhorn,
  FaTrophy,
  FaMoneyBillWave,
  FaSignOutAlt,
  FaCloudUploadAlt,
  FaCreditCard,
  FaCheckCircle,
  FaQuestionCircle,
  FaClipboardList,
  FaPaperPlane,
  FaAngleDown,
  FaAngleRight,
} from "react-icons/fa";
import { MdQuiz, MdAssessment, MdHowToReg, MdLogout } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";

import ApplyLeave from "./ApplyLeave";
import AddAchievements from "./AddAchievements";
import PayFeePopup from "./PayFeePopup";
import VerifyFees from "./VerifyFees";

const AppSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // single open section at a time
  const [openSection, setOpenSection] = useState(null); // values: "achievements", "fees", "leave", "quiz", "exam", or null

  const toggleSection = (section) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  // Active helpers
  const isActive = (path) => location.pathname === path;
  const isActiveAny = (paths = []) => paths.includes(location.pathname);

  // submenu transition class
  const submenuClass = (section) =>
    `ml-6 mt-2 overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
      openSection === section ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
    }`;

  // Popup States
  const [showLeave, setShowLeave] = useState(false);
  const [showAchievement, setShowAchievement] = useState(false);
  const [showPay, setShowPay] = useState(false);
  const [showVerify, setShowVerify] = useState(false);

  // Leave form
  const [leaveForm, setLeaveForm] = useState({
    EnrollmentNumber: "",
    LeaveType: "",
    FromDate: "",
    ToDate: "",
    ProvideReason: "",
    UploadCertificate: "",
  });
  const onLeaveChange = (e) => {
    const { name, value } = e.target;
    setLeaveForm((prev) => ({ ...prev, [name]: value }));
  };
  const onLeaveSubmit = (e) => {
    e.preventDefault();
    console.log("Leave Form:", leaveForm);
  };

  // Achievement form
  const [achievementForm, setAchievementForm] = useState({
    AchievementTitle: "",
    AchievementType: "",
    Location: "",
    OrganisedBy: "",
    Date: "",
    ProvideReason: "",
    UploadCertificate: "",
  });
  const onAchievementChange = (e) => {
    const { name, value } = e.target;
    setAchievementForm((prev) => ({ ...prev, [name]: value }));
  };
  const onAchievementSubmit = (e) => {
    e.preventDefault();
    console.log("Achievement Form:", achievementForm);
  };

  // Verify Fee form
  const [verifyForm, setVerifyForm] = useState({
    EnrollmentNumber: "",
    Semester: "",
    Amount: "",
    PaymentType: "",
    UploadReceipt: "",
  });
  const onVerifyChange = (e) => {
    const { name, value } = e.target;
    setVerifyForm((prev) => ({ ...prev, [name]: value }));
  };
  const onVerifySubmit = (e) => {
    e.preventDefault();
    console.log("Verify Fee:", verifyForm);
  };

  const onLogout = () => {
    console.log("Logout clicked");
    // TODO: clear token, redirect to login
    // navigate("/login");
  };

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            <h2 className="text-xl font-bold text-gray-800 mt-5">Student</h2>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="mt-5">

              {/* Dashboard */}
              <SidebarMenuItem className="mt-2">
                <SidebarMenuButton
                  className={`text-[15px] flex items-center gap-2 ${
                    isActive("/StudentDashBoard") ? "bg-primary-foreground" : ""
                  }`}
                  onClick={() => navigate("/StudentDashBoard")}
                >
                  <FaHome /> Dashboard
                </SidebarMenuButton>
              </SidebarMenuItem>

              {/* Attendance */}
              <SidebarMenuItem className="mt-2">
                <SidebarMenuButton
                  className={`text-[15px] flex items-center gap-2 ${
                    isActive("/StudentAttendance") ? "bg-primary-foreground" : ""
                  }`}
                  onClick={() => navigate("/StudentAttendance")}
                >
                  <MdHowToReg /> Attendance
                </SidebarMenuButton>
              </SidebarMenuItem>

              {/* Materials */}
              <SidebarMenuItem className="mt-2">
                <SidebarMenuButton
                  className={`text-[15px] flex items-center gap-2 ${
                    isActive("/StudentMaterial") ? "bg-primary-foreground" : ""
                  }`}
                  onClick={() => navigate("/StudentMaterial")}
                >
                  <FaBook /> Materials
                </SidebarMenuButton>
              </SidebarMenuItem>

              {/* Events */}
              <SidebarMenuItem className="mt-2">
                <SidebarMenuButton
                  className={`text-[15px] flex items-center gap-2 ${
                    isActive("/StudentEvent") ? "bg-primary-foreground" : ""
                  }`}
                  onClick={() => navigate("/StudentEvent")}
                >
                  <FaCalendarAlt /> Events
                </SidebarMenuButton>
              </SidebarMenuItem>

              {/* Notices */}
              <SidebarMenuItem className="mt-2">
                <SidebarMenuButton
                  className={`text-[15px] flex items-center gap-2 ${
                    isActive("/StudentNotice") ? "bg-primary-foreground" : ""
                  }`}
                  onClick={() => navigate("/StudentNotice")}
                >
                  <FaBullhorn /> Notices
                </SidebarMenuButton>
              </SidebarMenuItem>

              {/* Achievements (collapsible) */}
              <SidebarMenuItem className="mt-2">
                <SidebarMenuButton
                  className="text-[15px] flex justify-between items-center"
                  onClick={() => toggleSection("achievements")}
                >
                  <div className="flex items-center gap-2">
                    <FaTrophy /> Achievements
                  </div>
                  <div>
                    {openSection === "achievements" ? (
                      <FaAngleDown />
                    ) : (
                      <FaAngleRight />
                    )}
                  </div>
                </SidebarMenuButton>

                <div className={submenuClass("achievements")}>
                  <div className="flex flex-col gap-2 pt-2">
                    <SidebarMenuButton
                      onClick={() => navigate("/StudentAchievements")}
                      className={`text-[14px] flex items-center gap-2 justify-start ${
                        isActive("/StudentAchievements")
                          ? "bg-primary-foreground/80"
                          : ""
                      }`}
                    >
                      <FaTrophy /> View Achievements
                    </SidebarMenuButton>
                    <SidebarMenuButton
                      className="text-[14px] flex items-center gap-2 justify-start"
                      onClick={() => setShowAchievement(true)}
                    >
                      <FaCloudUploadAlt /> Upload Achievement
                    </SidebarMenuButton>
                  </div>
                </div>
              </SidebarMenuItem>

              {/* Fees (collapsible) */}
              <SidebarMenuItem className="mt-2">
                <SidebarMenuButton
                  className="text-[15px] flex justify-between items-center"
                  onClick={() => toggleSection("fees")}
                >
                  <div className="flex items-center gap-2">
                    <FaMoneyBillWave /> Fees Section
                  </div>
                  <div>
                    {openSection === "fees" ? <FaAngleDown /> : <FaAngleRight />}
                  </div>
                </SidebarMenuButton>

                <div className={submenuClass("fees")}>
                  <div className="flex flex-col gap-2 pt-2">
                    <SidebarMenuButton
                      onClick={() => navigate("/StudentFees")}
                      className={`text-[14px] flex items-center gap-2 justify-start ${
                        isActive("/StudentFees")
                          ? "bg-primary-foreground/80"
                          : ""
                      }`}
                    >
                      <FaMoneyBillWave /> View Fees
                    </SidebarMenuButton>
                    <SidebarMenuButton
                      className="text-[14px] flex items-center gap-2 justify-start"
                      onClick={() => setShowPay(true)}
                    >
                      <FaCreditCard /> Pay Fees
                    </SidebarMenuButton>
                    <SidebarMenuButton
                      className="text-[14px] flex items-center gap-2 justify-start"
                      onClick={() => setShowVerify(true)}
                    >
                      <FaCheckCircle /> Verify Fees
                    </SidebarMenuButton>
                  </div>
                </div>
              </SidebarMenuItem>

              {/* Leave (collapsible) */}
              <SidebarMenuItem className="mt-2">
                <SidebarMenuButton
                  className="text-[15px] flex justify-between items-center"
                  onClick={() => toggleSection("leave")}
                >
                  <div className="flex items-center gap-2">
                    <FaSignOutAlt /> Leave Section
                  </div>
                  <div>
                    {openSection === "leave" ? <FaAngleDown /> : <FaAngleRight />}
                  </div>
                </SidebarMenuButton>

                <div className={submenuClass("leave")}>
                  <div className="flex flex-col gap-2 pt-2">
                    <SidebarMenuButton
                      onClick={() => navigate("/StudentLeave")}
                      className={`text-[14px] flex items-center gap-2 justify-start ${
                        isActive("/StudentLeave")
                          ? "bg-primary-foreground/80"
                          : ""
                      }`}
                    >
                      <FaClipboardList /> View Leave
                    </SidebarMenuButton>
                    <SidebarMenuButton
                      className="text-[14px] flex items-center gap-2 justify-start"
                      onClick={() => setShowLeave(true)}
                    >
                      <FaPaperPlane /> Apply for Leave
                    </SidebarMenuButton>
                  </div>
                </div>
              </SidebarMenuItem>

              {/* Quiz (collapsible) */}
              <SidebarMenuItem className="mt-2">
                <SidebarMenuButton
                  className="text-[15px] flex justify-between items-center"
                  onClick={() => toggleSection("quiz")}
                >
                  <div className="flex items-center gap-2">
                    <FaQuestionCircle /> Quiz Section
                  </div>
                  <div>
                    {openSection === "quiz" ? <FaAngleDown /> : <FaAngleRight />}
                  </div>
                </SidebarMenuButton>

                <div className={submenuClass("quiz")}>
                  <div className="flex flex-col gap-2 pt-2">
                    <SidebarMenuButton
                      onClick={() => navigate("/QuizUpcomming")}
                      className={`text-[14px] flex items-center gap-2 justify-start ${
                        isActive("/QuizUpcomming")
                          ? "bg-primary-foreground/80"
                          : ""
                      }`}
                    >
                      <MdQuiz /> Upcoming Quiz
                    </SidebarMenuButton>
                    <SidebarMenuButton
                      onClick={() => navigate("/QuizResult")}
                      className={`text-[14px] flex items-center gap-2 justify-start ${
                        isActive("/QuizResult")
                          ? "bg-primary-foreground/80"
                          : ""
                      }`}
                    >
                      <MdAssessment /> Quiz Results
                    </SidebarMenuButton>
                  </div>
                </div>
              </SidebarMenuItem>

              {/* Exam (collapsible) */}
              <SidebarMenuItem className="mt-2">
                <SidebarMenuButton
                  className="text-[15px] flex justify-between items-center"
                  onClick={() => toggleSection("exam")}
                >
                  <div className="flex items-center gap-2">
                    <FaClipboardList /> Exam Section
                  </div>
                  <div>
                    {openSection === "exam" ? <FaAngleDown /> : <FaAngleRight />}
                  </div>
                </SidebarMenuButton>

                <div className={submenuClass("exam")}>
                  <div className="flex flex-col gap-2 pt-2">
                    <SidebarMenuButton
                      onClick={() => navigate("/ExamInternal")}
                      className={`text-[14px] flex items-center gap-2 justify-start ${
                        isActive("/ExamInternal")
                          ? "bg-primary-foreground/80"
                          : ""
                      }`}
                    >
                      <GiGraduateCap /> Internal Exam
                    </SidebarMenuButton>
                    <SidebarMenuButton
                      onClick={() => navigate("/ExamExtenal")}
                      className={`text-[14px] flex items-center gap-2 justify-start ${
                        isActive("/ExamExtenal")
                          ? "bg-primary-foreground/80"
                          : ""
                      }`}
                    >
                      <GiGraduateCap /> External Exam
                    </SidebarMenuButton>
                  </div>
                </div>
              </SidebarMenuItem>

              {/* Logout */}
              <SidebarMenuItem className="mt-4">
                <SidebarMenuButton
                  className="text-[15px] flex items-center gap-2"
                  onClick={onLogout}
                >
                  <MdLogout /> Logout
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Popups */}
      {showLeave && (
        <div className="fixed inset-0 backdrop-blur-[2px] z-50">
          <ApplyLeave
            onCloseLeave={() => setShowLeave(false)}
            form={leaveForm}
            onChangeHandle={onLeaveChange}
            onSubmitHandle={onLeaveSubmit}
          />
        </div>
      )}

      {showAchievement && (
        <div className="fixed inset-0 backdrop-blur-[2px] z-50">
          <AddAchievements
            onCloseAchievement={() => setShowAchievement(false)}
            onChangeHandle={onAchievementChange}
            form={achievementForm}
            onSubmitHandle={onAchievementSubmit}
          />
        </div>
      )}

      {showPay && (
        <div className="fixed inset-0 backdrop-blur-[2px] z-50">
          <PayFeePopup onClosePayPopup={() => setShowPay(false)} />
        </div>
      )}

      {showVerify && (
        <div className="fixed inset-0 backdrop-blur-[2px] z-50">
          <VerifyFees
            onCloseVerifyPopup={() => setShowVerify(false)}
            verifyform={verifyForm}
            onChangeVerifyHandle={onVerifyChange}
            onVerifySubmit={onVerifySubmit}
          />
        </div>
      )}
    </Sidebar>
  );
};

export default AppSidebar;
