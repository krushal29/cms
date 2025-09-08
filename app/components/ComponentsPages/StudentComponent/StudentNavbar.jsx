
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
  FaHome, FaBook, FaCalendarAlt, FaBullhorn,
  FaTrophy, FaMoneyBillWave, FaSignOutAlt,
  FaCloudUploadAlt, FaCreditCard, FaCheckCircle,
  FaQuestionCircle, FaClipboardList, FaPaperPlane
} from "react-icons/fa";
import { MdQuiz, MdAssessment, MdHowToReg, MdLogout } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import { useLocation } from "react-router";
import ApplyLeave from "./ApplyLeave";
import AddAchievements from "./AddAchievements";
import PayFeePopup from "./PayFeePopup";
import VerifyFees from "./VerifyFees";


const AppSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log("location", location.pathname);



  // collapsible toggles
  const [openAchievements, setOpenAchievements] = useState(false);
  const [openFees, setOpenFees] = useState(false);
  const [openLeave, setOpenLeave] = useState(false);
  const [openQuiz, setOpenQuiz] = useState(false);
  const [openExam, setOpenExam] = useState(false);


  //Leave Popup
  const [form, setForm] = useState({
    EnrollmentNumber: '',
    LeaveType: '',
    FromDate: '',
    ToDate: '',
    ProvideReason: '',
    UploadCertificate: '',
  });
  const [LeavePopup, setLeavePopup] = useState(false);
  const onShowLeave = () => setLeavePopup(true)
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
  //   // End of Leave Popup

  const onLogout = () => { }

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


   // Achievement Popup
  const [showAddAchievement, setShowAddAchievement] = useState(false);
  const [Achievementform, AchievementsetForm] = useState({
    AchievementTitle: "",
    AchievementType: "",
    Location: "",
    OrganisedBy: "",
    Date: "",
    ProvideReason: "",
    UploadCertificate: ""
  })
  const onCloseAchievement = () => setShowAddAchievement(false);

  const onShowAchievement =()=>setShowAddAchievement(true);
  const onChangeAchievementHandle = (e) => {
    const { name, value } = e.target;
    AchievementsetForm({ ...Achievementform, [name]: value });
  }

  const onSubmitAchievementHandle = (e) => {
    e.preventDefault();
    try {
      console.log(Achievementform);
    } catch (e) {
      console.log(e);
    }
  }

  // End of Achievement Popup

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel><h2 className="text-xl font-bold text-gray-800 mt-5">Student</h2></SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="mt-5">

              {/* Dashboard */}
              <SidebarMenuItem>
                <SidebarMenuButton className={`text-[15px] ${location.pathname === "/StudentDashBoard" ? 'bg-primary-foreground' : ''}`} onClick={() => navigate("/StudentDashBoard")}>
                  <FaHome /> Dashboard
                </SidebarMenuButton>
              </SidebarMenuItem>

              {/* Attendance */}
              <SidebarMenuItem>
                <SidebarMenuButton className={`text-[15px] ${location.pathname === "/StudentAttendance" ? 'bg-primary-foreground' : ''}`} onClick={() => navigate("/StudentAttendance")}>
                  <MdHowToReg /> Attendance
                </SidebarMenuButton>
              </SidebarMenuItem>

              {/* Materials */}
              <SidebarMenuItem>
                <SidebarMenuButton className={`text-[15px] ${location.pathname === "/StudentMaterial" ? 'bg-primary-foreground' : ''}`} onClick={() => navigate("/StudentMaterial")}>
                  <FaBook /> Materials
                </SidebarMenuButton>
              </SidebarMenuItem>

              {/* Events */}
              <SidebarMenuItem>
                <SidebarMenuButton className={`text-[15px] ${location.pathname === "/StudentEvent" ? 'bg-primary-foreground' : ''}`} onClick={() => navigate("/StudentEvent")}>
                  <FaCalendarAlt /> Events
                </SidebarMenuButton>
              </SidebarMenuItem>

              {/* Notices */}
              <SidebarMenuItem>
                <SidebarMenuButton className={`text-[15px] ${location.pathname === "/StudentNotice" ? 'bg-primary-foreground' : ''}`} onClick={() => navigate("/StudentNotice")}>
                  <FaBullhorn /> Notices
                </SidebarMenuButton>
              </SidebarMenuItem>

              {/* Achievements */}
              <SidebarMenuItem>
                <SidebarMenuButton className={`text-[15px] ${location.pathname === "/StudentAchievements" ? 'bg-primary-foreground' : ''}`} onClick={() => setOpenAchievements(!openAchievements)}>
                  <FaTrophy /> Achievements Section {openAchievements ? "▾" : "▸"}
                </SidebarMenuButton>
                {openAchievements && (
                  <div className="ml-6 space-y-2">
                    <SidebarMenuButton onClick={() => navigate("/StudentAchievements")}>
                      <FaTrophy /> Achievements
                    </SidebarMenuButton>
                    <SidebarMenuButton onClick={onShowAchievement}>
                      <FaCloudUploadAlt /> Upload Achievement
                    </SidebarMenuButton>
                  </div>
                )}
              </SidebarMenuItem>

              {/* Fees */}
              <SidebarMenuItem>
                <SidebarMenuButton className={`text-[15px] ${location.pathname === "/StudentFees" ? 'bg-primary-foreground' : ''}`} onClick={() => setOpenFees(!openFees)}>
                  <FaMoneyBillWave /> Fees Section {openFees ? "▾" : "▸"}
                </SidebarMenuButton>
                {openFees && (
                  <div className="ml-6 space-y-2">
                    <SidebarMenuButton onClick={() => navigate("/StudentFees")}>
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

              {/* Leave */}
              <SidebarMenuItem>
                <SidebarMenuButton className={`text-[15px] ${location.pathname === "/StudentLeave" ? 'bg-primary-foreground' : ''}`} onClick={() => setOpenLeave(!openLeave)}>
                  <FaSignOutAlt /> Leave Section {openLeave ? "▾" : "▸"}
                </SidebarMenuButton>
                {openLeave && (
                  <div className="ml-6 space-y-2">
                    <SidebarMenuButton onClick={() => navigate("/StudentLeave")}>
                      <FaSignOutAlt /> Leave
                    </SidebarMenuButton>
                    <SidebarMenuButton onClick={onShowLeave}>
                      <FaPaperPlane /> Apply for Leave
                    </SidebarMenuButton>
                  </div>
                )}
              </SidebarMenuItem>

              {/* Quiz */}
              <SidebarMenuItem>
                <SidebarMenuButton className={`text-[15px] ${location.pathname === "/QuizUpcomming" ? 'bg-primary-foreground' : ''}`} onClick={() => setOpenQuiz(!openQuiz)}>
                  <FaQuestionCircle /> Quiz Section {openQuiz ? "▾" : "▸"}
                </SidebarMenuButton>
                {openQuiz && (
                  <div className="ml-6 space-y-2">
                    <SidebarMenuButton onClick={() => navigate("/QuizUpcomming")}>
                      <MdQuiz /> Upcoming Quizzes
                    </SidebarMenuButton>
                    <SidebarMenuButton onClick={() => navigate("/QuizResult")}>
                      <MdAssessment /> Quiz Results
                    </SidebarMenuButton>
                  </div>
                )}
              </SidebarMenuItem>

              {/* Exam */}
              <SidebarMenuItem>
                <SidebarMenuButton className={`text-[15px] ${location.pathname === "/ExamInternal" || location.pathname === "/ExamExtenal" ? 'bg-primary-foreground' : ''}`} onClick={() => setOpenExam(!openExam)}>
                  <FaClipboardList /> Exam Section {openExam ? "▾" : "▸"}
                </SidebarMenuButton>
                {openExam && (
                  <div className="ml-6 space-y-2">
                    <SidebarMenuButton onClick={() => navigate("/ExamInternal")}>
                      <GiGraduateCap /> Internal Exam
                    </SidebarMenuButton>
                    <SidebarMenuButton onClick={() => navigate("/ExamExtenal")}>
                      <GiGraduateCap /> External Exam
                    </SidebarMenuButton>
                  </div>
                )}
              </SidebarMenuItem>

              {/* Logout */}
              <SidebarMenuItem>
                <SidebarMenuButton className={`text-[15px]`} onClick={onLogout}>
                  <MdLogout /> Logout
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>



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
      {showAddAchievement && <div className='fixed inset-0 backdrop-blur-[1px] drop-shadow-lg shadow-ring z-10'><AddAchievements onCloseAchievement={onCloseAchievement} onChangeHandle={onChangeAchievementHandle} form={Achievementform} onSubmitHandle={onSubmitAchievementHandle} /></div>}



      {/* Fees Pay+may be change */}
      {showPaypopup && <div className='fixed inset-0 backdrop-blur-[3px] drop-shadow-lg shadow-ring z-10'><PayFeePopup onClosePayPopup={onClosePayPopup} /></div>}


      {/* Verify + may br change */}
      {showVerifyPopup && <div className='fixed inset-0 backdrop-blur-[3px] drop-shadow-lg shadow-ring z-10'><VerifyFees onCloseVerifyPopup={onCloseVerifyPopup} verifyform={verifyform} onChangeVerifyHandle={onChangeVerifyHandle} onVerifySubmit={onVerifySubmit} /></div>}
    </Sidebar>
  );
};

export default AppSidebar;
