
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
import AddMaterialsPopup from "./AddMaterialsPopup";
import AddEventPopup from "./AddEventPopup";
import AddNoticePopup from "./AddNoticePopup";


const TeacherNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log("location", location.pathname);



  // collapsible toggles
  const [openMaterials, setOpenMaterials] = useState(false);
  const [openEvent, setOpenEvent] = useState(false);
  const [openNotice, setOpenNotice] = useState(false);
  const [openQuiz, setOpenQuiz] = useState(false);
  const [openExam, setOpenExam] = useState(false);



  // Materials
  const [addMaterials, setAddMaterials] = useState(false);
  const [materialForm, setMaterialForm] = useState({
    CourseCode: '',
    CourseName: '',
    Title: '',
    Date: '',
    UploadDoc: ''
  })


  const onAddMaterialClose = () => setAddMaterials(false);
  const onChangeMaterial = (e) => {
    const { name, value } = e.target;
    setMaterialForm({ ...materialForm, [name]: value });
  }

  const onFileUpload = (e) => {
    const { name } = e.target.files[0];
    setMaterialForm({ ...materialForm, "UploadDoc": name });
  }

  const SubmitMaterial = (e) => {
    e.preventDefault();
    try {
      console.log(materialForm);
    } catch (e) {
      console.log(e);
    }
  }

  // end of Material


  // Events
  const [AddEvent, setAddEvent] = useState(false);
  const [EventForm, setEventForm] = useState({
    EventTitle: "",
    EventType: '',
    EventDesc: '',
    EventVenue: '',
  })
  const onCloseEvent = () => setAddEvent(false)


  // End of Events


  // Notices
  const [AddNotice, setAddNotice] = useState(false);

  const [NoticeForm, setNoticeForm] = useState({
    send: '',
    Branch: '',
    Sem: '',
    NoticeTitle: '',
    UploadBy: '',
    Date: '',
    ProvideDesc: ''
  })

  const onCloseAddNotice = () => setAddNotice(false);

  //End of Notices


  const onLogout = () => { }

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel><h2 className="text-xl font-bold text-gray-800 mt-5">Teacher</h2></SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="mt-5">

              {/* Dashboard */}
              <SidebarMenuItem className="mt-2">
                <SidebarMenuButton className={`text-[15px] ${location.pathname === "/teacher-dashboard" ? 'bg-primary-foreground' : ''}`} onClick={() => navigate("/teacher-dashboard")}>
                  <FaHome /> Dashboard
                </SidebarMenuButton>
              </SidebarMenuItem>

              {/* Attendance */}
              <SidebarMenuItem className="mt-2">
                <SidebarMenuButton className={`text-[15px] ${location.pathname === "/attendance-management" ? 'bg-primary-foreground' : ''}`} onClick={() => navigate("/attendance-management")}>
                  <MdHowToReg /> Attendance
                </SidebarMenuButton>
              </SidebarMenuItem>

              {/* Materials */}
              <SidebarMenuItem className="mt-2">
                <SidebarMenuButton className={`text-[15px] ${location.pathname === "/teacher-materials" ? 'bg-primary-foreground' : ''}`} onClick={() => setOpenMaterials(!openMaterials)}>
                  <FaBook /> Materials Section {openMaterials ? "▾" : "▸"}
                </SidebarMenuButton>
                {openMaterials && (
                  <div className="ml-6 space-y-2">
                    <SidebarMenuButton onClick={() => navigate("/teacher-materials")}>
                      <FaTrophy /> Materials
                    </SidebarMenuButton>
                    <SidebarMenuButton onClick={() => setAddMaterials(true)}>
                      <FaCloudUploadAlt /> Upload Materials
                    </SidebarMenuButton>
                  </div>
                )}
              </SidebarMenuItem>

              {/* Events */}
              <SidebarMenuItem className="mt-2">
                <SidebarMenuButton className={`text-[15px] ${location.pathname === "/teacher-event" ? 'bg-primary-foreground' : ''}`} onClick={() => setOpenEvent(!openEvent)}>
                  <FaCalendarAlt /> Events Section {openEvent ? "▾" : "▸"}
                </SidebarMenuButton>
                {openEvent && (
                  <div className="ml-6 space-y-2">
                    <SidebarMenuButton onClick={() => navigate("/teacher-event")}>
                      <FaTrophy /> Event
                    </SidebarMenuButton>
                    <SidebarMenuButton onClick={() => setAddEvent(true)}>
                      <FaCloudUploadAlt /> Upload Event
                    </SidebarMenuButton>
                  </div>
                )}
              </SidebarMenuItem>

              {/* Notices */}
              <SidebarMenuItem className="mt-2">
                <SidebarMenuButton className={`text-[15px] ${location.pathname === "/teacher-notice" ? 'bg-primary-foreground' : ''}`} onClick={() => setOpenNotice(!openNotice)}>
                  <FaBullhorn /> Notices {openNotice ? "▾" : "▸"}
                </SidebarMenuButton>

                {openNotice && (
                  <div className="ml-6 space-y-2">
                    <SidebarMenuButton onClick={() => navigate("/teacher-notice")}>
                      <FaTrophy /> Notice
                    </SidebarMenuButton>
                    <SidebarMenuButton onClick={() => setAddNotice(true)}>
                      <FaCloudUploadAlt /> Upload Notice
                    </SidebarMenuButton>
                  </div>
                )}
              </SidebarMenuItem>


              {/* Achievements */}
              <SidebarMenuItem className="mt-2">
                <SidebarMenuButton className={`text-[15px] ${location.pathname === "/student-achievement-details" ? 'bg-primary-foreground' : ''}`} onClick={() => navigate('/student-achievement-details')}>
                  <FaTrophy /> Achievements Section
                </SidebarMenuButton>
              </SidebarMenuItem>


              {/* Leave */}
              <SidebarMenuItem className="mt-2">
                <SidebarMenuButton className={`text-[15px] ${location.pathname === "/approve-leave" ? 'bg-primary-foreground' : ''}`} onClick={() => navigate('/approve-leave')}>
                  <FaSignOutAlt /> Leave Section
                </SidebarMenuButton>
              </SidebarMenuItem>



              {/* Quiz */}
              <SidebarMenuItem className="mt-2">
                <SidebarMenuButton className={`text-[15px] ${location.pathname === "/quiz-create"||location.pathname === "/quiz-manage"||location.pathname === "/teacher-quiz-result" ? 'bg-primary-foreground' : ''}`} onClick={() => setOpenQuiz(!openQuiz)}>
                  <FaQuestionCircle /> Quiz Section {openQuiz ? "▾" : "▸"}
                </SidebarMenuButton>
                {openQuiz && (
                  <div className="ml-6 space-y-2">
                    <SidebarMenuButton onClick={() => navigate("/quiz-create")}>
                      <FaTrophy /> Create Quiz
                    </SidebarMenuButton>
                    <SidebarMenuButton onClick={() => navigate("/quiz-manage")}>
                      <FaCloudUploadAlt /> Quiz Manage
                    </SidebarMenuButton>
                    <SidebarMenuButton onClick={() => navigate("/teacher-quiz-result")}>
                      <FaCloudUploadAlt /> Quiz Result
                    </SidebarMenuButton>
                  </div>
                )}
              </SidebarMenuItem>


              {/* Exam */}
              <SidebarMenuItem className="mt-2">
                <SidebarMenuButton className={`text-[15px] ${location.pathname === "/add-internal-th" || location.pathname === "/add-Viva-th"||location.pathname === "/add-external-th"||location.pathname === "/mid-sem-submit" ? 'bg-primary-foreground' : ''}`} onClick={() => setOpenExam(!openExam)}>
                  <FaClipboardList /> Exam Section {openExam ? "▾" : "▸"}
                </SidebarMenuButton>
                {openExam && (
                  <div className="ml-6 space-y-2">
                     <SidebarMenuButton onClick={() => navigate("/mid-sem-submit")}>
                      <FaCloudUploadAlt /> Internal-Mid
                    </SidebarMenuButton>
                    <SidebarMenuButton onClick={() => navigate("/add-internal-th")}>
                      <FaTrophy /> Internal Theory
                    </SidebarMenuButton>
                    <SidebarMenuButton onClick={() => navigate("/add-Viva-th")}>
                      <FaCloudUploadAlt /> Viva Theory
                    </SidebarMenuButton>
                    <SidebarMenuButton onClick={() => navigate("/add-external-th")}>
                      <FaCloudUploadAlt /> External Theory
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



      {/* popup */}
      {/* Add Material */}
      {
        addMaterials && <div className='fixed inset-0 backdrop-blur-[1px]'><AddMaterialsPopup onAddMaterialClose={onAddMaterialClose} onChangeMaterial={onChangeMaterial} SubmitMaterial={SubmitMaterial} materialForm={materialForm} onFileUpload={onFileUpload} /></div>
      }


      {/* Event */}
      {AddEvent && <div className="fixed inset-0 backdrop-blur-[1px]"><AddEventPopup onCloseEvent={onCloseEvent} /></div>}

      {/* Notice */}
      {AddNotice && <div className="inset-0 fixed backdrop-blur-[1px]"><AddNoticePopup onCloseAddNotice={onCloseAddNotice} /></div>}

    </Sidebar>
  );
};

export default TeacherNavbar;
