
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
// import { FaAngleDown, FaAngleRight } from "react-icons/fa6";
// import {
//   FaHome, FaBullhorn,
//   FaTrophy, FaMoneyBillWave, FaSignOutAlt, FaCreditCard, FaCheckCircle,
//   FaQuestionCircle, FaClipboardList
// } from "react-icons/fa";
// import { MdQuiz, MdAssessment, MdHowToReg, MdLogout } from "react-icons/md";
// import { GiGraduateCap } from "react-icons/gi";
// import { useLocation } from "react-router";
// import FeePopup from "./popup/FeePopup";
// import VerifyFees from "./popup/VerifyFees";



// const ParentNavbar = () => {
//   const navigate = useNavigate();
//   const location = useLocation();



//   // collapsible toggles
//   const [openFees, setOpenFees] = useState(false);
//   const [openQuiz, setOpenQuiz] = useState(false);
//   const [openExam, setOpenExam] = useState(false);




//     // Fees Pay popup
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



//   const onLogout = () => { }

//   return (
//     <Sidebar>
//       <SidebarContent>
//         <SidebarGroup>
//           <SidebarGroupLabel><h2 className="text-xl font-bold text-gray-800 mt-5">Parent</h2></SidebarGroupLabel>
//           <SidebarGroupContent>
//             <SidebarMenu className="mt-5">

//               {/* Dashboard */}
//               <SidebarMenuItem className="mt-2">
//                 <SidebarMenuButton className={`text-[15px] ${location.pathname === "/parent-dashboard" ? 'bg-primary-foreground' : ''}`} onClick={() => navigate("/parent-dashboard")}>
//                   <FaHome /> Dashboard
//                 </SidebarMenuButton>
//               </SidebarMenuItem>

//               {/* Attendance */}
//               <SidebarMenuItem className="mt-2">
//                 <SidebarMenuButton className={`text-[15px] ${location.pathname === "/parent-attendance" ? 'bg-primary-foreground' : ''}`} onClick={() => navigate("/parent-attendance")}>
//                   <MdHowToReg /> Attendance
//                 </SidebarMenuButton>
//               </SidebarMenuItem>

//               {/* Notices */}
//               <SidebarMenuItem className="mt-2">
//                 <SidebarMenuButton className={`text-[15px] ${location.pathname === "/parent-notice" ? 'bg-primary-foreground' : ''}`} onClick={()=>navigate('/parent-notice')} >
//                   <FaBullhorn /> Notices
//                 </SidebarMenuButton>
//               </SidebarMenuItem>

//               {/* Achievements */}
//               <SidebarMenuItem className="mt-2">
//                 <SidebarMenuButton className={`text-[15px] ${location.pathname === "/student-achievements" ? 'bg-primary-foreground' : ''}`} onClick={() => navigate("/student-achievements")}>
//                   <FaTrophy /> Achievements Section
//                 </SidebarMenuButton>
//               </SidebarMenuItem>

             
//               {/* Leave */}
//               <SidebarMenuItem className="mt-2">
//                 <SidebarMenuButton className={`text-[15px] ${location.pathname === "/parent-leave" ? 'bg-primary-foreground' : ''}`} onClick={() => navigate('/parent-leave')}>
//                   <FaSignOutAlt /> Leave Section
//                 </SidebarMenuButton>
//               </SidebarMenuItem>


//                {/* Fees */}
//               <SidebarMenuItem className="mt-2">
//                 <SidebarMenuButton className={`text-[15px] flex justify-between ${location.pathname === "/Fees-details" ? 'bg-primary-foreground' : ''}`} onClick={() => setOpenFees(!openFees)}>
//                   {/* <FaMoneyBillWave /> Fees Section {openFees ? "▾" : "▸"} */}
//                    <div className="flex items-center gap-2">
//                     <FaTrophy /> Fees Section
//                   </div><div> {openFees ? <FaAngleDown /> : <FaAngleRight />}</div>
//                 </SidebarMenuButton>
//                 {openFees && (
//                   <div className="ml-6 space-y-2">
//                     <SidebarMenuButton onClick={() => navigate("/Fees-details")}>
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


//               {/* Quiz */}
//               <SidebarMenuItem className="mt-2">
//                 <SidebarMenuButton className={`text-[15px] ${location.pathname === "/quiz-result" ? 'bg-primary-foreground' : ''}`} onClick={() => navigate("/quiz-result")}>
//                   <FaQuestionCircle /> Quiz Section
//                 </SidebarMenuButton>
//               </SidebarMenuItem>


//               {/* Exam */}
//               <SidebarMenuItem className="mt-2">
//                 <SidebarMenuButton className={`text-[15px] flex justify-between ${location.pathname === "/ExamInternal" || location.pathname === "/ExamExtenal" ? 'bg-primary-foreground' : ''}`} onClick={() => setOpenExam(!openExam)}>
//                    <div className="flex items-center gap-2">
//                     <FaTrophy /> Exam Section
//                   </div><div> {openExam ? <FaAngleDown /> : <FaAngleRight />}</div>
//                 </SidebarMenuButton>
//                 {openExam && (
//                   <div className="ml-6 space-y-2">
//                     <SidebarMenuButton onClick={() => navigate("/exam-internal")}>
//                       <GiGraduateCap /> Internal Exam
//                     </SidebarMenuButton>
//                     <SidebarMenuButton onClick={() => navigate("/exam-external-result")}>
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

//       {/* Fees Pay+may be change */}
//       {showPaypopup && <div className='fixed inset-0 backdrop-blur-[3px] drop-shadow-lg shadow-ring z-10'><FeePopup onClosePayPopup={onClosePayPopup} /></div>}


//       {/* Verify + may br change */}
//       {showVerifyPopup && <div className='fixed inset-0 backdrop-blur-[3px] drop-shadow-lg shadow-ring z-10'><VerifyFees onCloseVerifyPopup={onCloseVerifyPopup} verifyform={verifyform} onChangeVerifyHandle={onChangeVerifyHandle} onVerifySubmit={onVerifySubmit} /></div>}

//     </Sidebar>
//   );
// };

// export default ParentNavbar;


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
import { useState } from "react";
import {
  FaHome,
  FaBullhorn,
  FaTrophy,
  FaMoneyBillWave,
  FaSignOutAlt,
  FaCreditCard,
  FaCheckCircle,
  FaQuestionCircle,
  FaClipboardList,
  FaAngleDown,
  FaAngleRight,
} from "react-icons/fa";
import { MdHowToReg, MdLogout } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import FeePopup from "./popup/FeePopup";
import VerifyFees from "./popup/VerifyFees";

const ParentNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Manage one open section at a time
  const [openSection, setOpenSection] = useState(null); // "fees", "exam" etc.

  const toggleSection = (section) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  // Active route helpers
  const isActive = (path) => location.pathname === path;

  const submenuClass = (section) =>
    `ml-6 mt-2 overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
      openSection === section ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
    }`;

  // Fee Popup
  const [showPayPopup, setShowPayPopup] = useState(false);
  const onShowPay = () => setShowPayPopup(true);
  const onClosePayPopup = () => setShowPayPopup(false);

  // Verify Fee Popup
  const [showVerifyPopup, setShowVerifyPopup] = useState(false);
  const [verifyForm, setVerifyForm] = useState({
    EnrollmentNumber: "",
    Semester: "",
    Amount: "",
    PaymentType: "",
    UploadReceipt: "",
  });

  const onShowVerify = () => setShowVerifyPopup(true);
  const onCloseVerifyPopup = () => setShowVerifyPopup(false);
  const onChangeVerifyHandle = (e) => {
    const { name, value } = e.target;
    setVerifyForm((prev) => ({ ...prev, [name]: value }));
  };
  const onVerifySubmit = (e) => {
    e.preventDefault();
    console.log("Verify Form:", verifyForm);
  };

  const onLogout = () => {
    console.log("Parent logged out");
    // navigate("/login");
  };

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            <h2 className="text-xl font-bold text-gray-800 mt-5">Parent</h2>
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu className="mt-5">

              {/* Dashboard */}
              <SidebarMenuItem className="mt-2">
                <SidebarMenuButton
                  className={`text-[15px] flex items-center gap-2 ${
                    isActive("/parent-dashboard") ? "bg-primary-foreground" : ""
                  }`}
                  onClick={() => navigate("/parent-dashboard")}
                >
                  <FaHome /> Dashboard
                </SidebarMenuButton>
              </SidebarMenuItem>

              {/* Attendance */}
              <SidebarMenuItem className="mt-2">
                <SidebarMenuButton
                  className={`text-[15px] flex items-center gap-2 ${
                    isActive("/parent-attendance")
                      ? "bg-primary-foreground"
                      : ""
                  }`}
                  onClick={() => navigate("/parent-attendance")}
                >
                  <MdHowToReg /> Attendance
                </SidebarMenuButton>
              </SidebarMenuItem>

              {/* Notices */}
              <SidebarMenuItem className="mt-2">
                <SidebarMenuButton
                  className={`text-[15px] flex items-center gap-2 ${
                    isActive("/parent-notice") ? "bg-primary-foreground" : ""
                  }`}
                  onClick={() => navigate("/parent-notice")}
                >
                  <FaBullhorn /> Notices
                </SidebarMenuButton>
              </SidebarMenuItem>

              {/* Achievements */}
              <SidebarMenuItem className="mt-2">
                <SidebarMenuButton
                  className={`text-[15px] flex items-center gap-2 ${
                    isActive("/student-achievements")
                      ? "bg-primary-foreground"
                      : ""
                  }`}
                  onClick={() => navigate("/student-achievements")}
                >
                  <FaTrophy /> Achievements
                </SidebarMenuButton>
              </SidebarMenuItem>

              {/* Leave Section */}
              <SidebarMenuItem className="mt-2">
                <SidebarMenuButton
                  className={`text-[15px] flex items-center gap-2 ${
                    isActive("/parent-leave") ? "bg-primary-foreground" : ""
                  }`}
                  onClick={() => navigate("/parent-leave")}
                >
                  <FaSignOutAlt /> Leave Section
                </SidebarMenuButton>
              </SidebarMenuItem>

              {/* Fees Section */}
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
                      onClick={() => navigate("/Fees-details")}
                      className={`text-[14px] flex items-center gap-2 justify-start ${
                        isActive("/Fees-details")
                          ? "bg-primary-foreground/80"
                          : ""
                      }`}
                    >
                      <FaMoneyBillWave /> Fees Details
                    </SidebarMenuButton>

                    <SidebarMenuButton
                      className="text-[14px] flex items-center gap-2 justify-start"
                      onClick={onShowPay}
                    >
                      <FaCreditCard /> Pay Fees
                    </SidebarMenuButton>

                    <SidebarMenuButton
                      className="text-[14px] flex items-center gap-2 justify-start"
                      onClick={onShowVerify}
                    >
                      <FaCheckCircle /> Verify Fees
                    </SidebarMenuButton>
                  </div>
                </div>
              </SidebarMenuItem>

              {/* Quiz Section */}
              <SidebarMenuItem className="mt-2">
                <SidebarMenuButton
                  className={`text-[15px] flex items-center gap-2 ${
                    isActive("/quiz-result") ? "bg-primary-foreground" : ""
                  }`}
                  onClick={() => navigate("/quiz-result")}
                >
                  <FaQuestionCircle /> Quiz Section
                </SidebarMenuButton>
              </SidebarMenuItem>

              {/* Exam Section */}
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
                      onClick={() => navigate("/exam-internal")}
                      className={`text-[14px] flex items-center gap-2 justify-start ${
                        isActive("/exam-internal")
                          ? "bg-primary-foreground/80"
                          : ""
                      }`}
                    >
                      <GiGraduateCap /> Internal Exam
                    </SidebarMenuButton>
                    <SidebarMenuButton
                      onClick={() => navigate("/exam-external-result")}
                      className={`text-[14px] flex items-center gap-2 justify-start ${
                        isActive("/exam-external-result")
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
      {showPayPopup && (
        <div className="fixed inset-0 backdrop-blur-[3px] drop-shadow-lg shadow-ring z-10">
          <FeePopup onClosePayPopup={onClosePayPopup} />
        </div>
      )}

      {showVerifyPopup && (
        <div className="fixed inset-0 backdrop-blur-[3px] drop-shadow-lg shadow-ring z-10">
          <VerifyFees
            onCloseVerifyPopup={onCloseVerifyPopup}
            verifyform={verifyForm}
            onChangeVerifyHandle={onChangeVerifyHandle}
            onVerifySubmit={onVerifySubmit}
          />
        </div>
      )}
    </Sidebar>
  );
};

export default ParentNavbar;
