
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
import { useNavigate } from "react-router";
import { useState } from "react";

import {
  FaHome, FaBullhorn,
  FaTrophy, FaMoneyBillWave, FaSignOutAlt, FaCreditCard, FaCheckCircle,
  FaQuestionCircle, FaClipboardList
} from "react-icons/fa";
import { MdQuiz, MdAssessment, MdHowToReg, MdLogout } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import { useLocation } from "react-router";
import FeePopup from "./popup/FeePopup";
import VerifyFees from "./popup/VerifyFees";



const ParentNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();



  // collapsible toggles
  const [openFees, setOpenFees] = useState(false);
  const [openQuiz, setOpenQuiz] = useState(false);
  const [openExam, setOpenExam] = useState(false);




    // Fees Pay popup
  const [showPaypopup, setShowPayPopup] = useState(false);

  const onShowPay = () => setShowPayPopup(true);
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

  const onShowVerify = () => setShowVerifyPopup(true);

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



  const onLogout = () => { }

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel><h2 className="text-xl font-bold text-gray-800 mt-5">Parent</h2></SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="mt-5">

              {/* Dashboard */}
              <SidebarMenuItem className="mt-2">
                <SidebarMenuButton className={`text-[15px] ${location.pathname === "/parent-dashboard" ? 'bg-primary-foreground' : ''}`} onClick={() => navigate("/parent-dashboard")}>
                  <FaHome /> Dashboard
                </SidebarMenuButton>
              </SidebarMenuItem>

              {/* Attendance */}
              <SidebarMenuItem className="mt-2">
                <SidebarMenuButton className={`text-[15px] ${location.pathname === "/parent-attendance" ? 'bg-primary-foreground' : ''}`} onClick={() => navigate("/parent-attendance")}>
                  <MdHowToReg /> Attendance
                </SidebarMenuButton>
              </SidebarMenuItem>

              {/* Notices */}
              <SidebarMenuItem className="mt-2">
                <SidebarMenuButton className={`text-[15px] ${location.pathname === "/parent-notice" ? 'bg-primary-foreground' : ''}`} onClick={()=>navigate('/parent-notice')} >
                  <FaBullhorn /> Notices
                </SidebarMenuButton>
              </SidebarMenuItem>

              {/* Achievements */}
              <SidebarMenuItem className="mt-2">
                <SidebarMenuButton className={`text-[15px] ${location.pathname === "/student-achievements" ? 'bg-primary-foreground' : ''}`} onClick={() => navigate("/student-achievements")}>
                  <FaTrophy /> Achievements Section
                </SidebarMenuButton>
              </SidebarMenuItem>

             
              {/* Leave */}
              <SidebarMenuItem className="mt-2">
                <SidebarMenuButton className={`text-[15px] ${location.pathname === "/parent-leave" ? 'bg-primary-foreground' : ''}`} onClick={() => navigate('/parent-leave')}>
                  <FaSignOutAlt /> Leave Section
                </SidebarMenuButton>
              </SidebarMenuItem>


               {/* Fees */}
              <SidebarMenuItem className="mt-2">
                <SidebarMenuButton className={`text-[15px] ${location.pathname === "/Fees-details" ? 'bg-primary-foreground' : ''}`} onClick={() => setOpenFees(!openFees)}>
                  <FaMoneyBillWave /> Fees Section {openFees ? "▾" : "▸"}
                </SidebarMenuButton>
                {openFees && (
                  <div className="ml-6 space-y-2">
                    <SidebarMenuButton onClick={() => navigate("/Fees-details")}>
                      <FaMoneyBillWave /> Fees
                    </SidebarMenuButton>
                    <SidebarMenuButton onClick={onShowPay}>
                      <FaCreditCard /> Pay
                    </SidebarMenuButton>
                    <SidebarMenuButton onClick={onShowVerify}>
                      <FaCheckCircle /> Verify
                    </SidebarMenuButton>
                  </div>
                )}
              </SidebarMenuItem>


              {/* Quiz */}
              <SidebarMenuItem className="mt-2">
                <SidebarMenuButton className={`text-[15px] ${location.pathname === "/quiz-result" ? 'bg-primary-foreground' : ''}`} onClick={() => navigate("/quiz-result")}>
                  <FaQuestionCircle /> Quiz Section
                </SidebarMenuButton>
              </SidebarMenuItem>


              {/* Exam */}
              <SidebarMenuItem className="mt-2">
                <SidebarMenuButton className={`text-[15px] ${location.pathname === "/ExamInternal" || location.pathname === "/ExamExtenal" ? 'bg-primary-foreground' : ''}`} onClick={() => setOpenExam(!openExam)}>
                  <FaClipboardList /> Exam Section {openExam ? "▾" : "▸"}
                </SidebarMenuButton>
                {openExam && (
                  <div className="ml-6 space-y-2">
                    <SidebarMenuButton onClick={() => navigate("/exam-internal")}>
                      <GiGraduateCap /> Internal Exam
                    </SidebarMenuButton>
                    <SidebarMenuButton onClick={() => navigate("/exam-external-result")}>
                      <GiGraduateCap /> External Exam
                    </SidebarMenuButton>
                  </div>
                )}
              </SidebarMenuItem>

              {/* Logout */}
              <SidebarMenuItem className="mt-2">
                <SidebarMenuButton className={`text-[15px]`} onClick={onLogout}>
                  <MdLogout /> Logout
                </SidebarMenuButton>
              </SidebarMenuItem>


            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>



      {/* popup + may be change */}

      {/* Fees Pay+may be change */}
      {showPaypopup && <div className='fixed inset-0 backdrop-blur-[3px] drop-shadow-lg shadow-ring z-10'><FeePopup onClosePayPopup={onClosePayPopup} /></div>}


      {/* Verify + may br change */}
      {showVerifyPopup && <div className='fixed inset-0 backdrop-blur-[3px] drop-shadow-lg shadow-ring z-10'><VerifyFees onCloseVerifyPopup={onCloseVerifyPopup} verifyform={verifyform} onChangeVerifyHandle={onChangeVerifyHandle} onVerifySubmit={onVerifySubmit} /></div>}

    </Sidebar>
  );
};

export default ParentNavbar;
