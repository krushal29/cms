// TeacherNavbar.jsx
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
  FaAngleDown,
  FaAngleRight,
  FaBook,
  FaCalendarAlt,
  FaBullhorn,
  FaTrophy,
  FaCloudUploadAlt,
  FaClipboardList,
  FaSignOutAlt,
} from "react-icons/fa";
import { MdQuiz, MdAssessment, MdHowToReg, MdLogout } from "react-icons/md";

import AddMaterialsPopup from "./AddMaterialsPopup";
import AddEventPopup from "./AddEventPopup";
import AddNoticePopup from "./AddNoticePopup";

const TeacherNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Single open section (auto-closes others)
  const [openSection, setOpenSection] = useState(null); // values: "materials","events","notices","quiz","exam", or null

  const toggleSection = (section) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  // Materials popup + form state
  const [addMaterials, setAddMaterials] = useState(false);
  const [materialForm, setMaterialForm] = useState({
    CourseCode: "",
    CourseName: "",
    Title: "",
    Date: "",
    UploadDoc: "",
  });

  const onAddMaterialClose = () => setAddMaterials(false);
  const onChangeMaterial = (e) => {
    const { name, value } = e.target;
    setMaterialForm((prev) => ({ ...prev, [name]: value }));
  };
  const onFileUpload = (e) => {
    if (!e.target.files?.[0]) return;
    const { name } = e.target.files[0];
    setMaterialForm((prev) => ({ ...prev, UploadDoc: name }));
  };
  const SubmitMaterial = (e) => {
    e.preventDefault();
    // TODO: wire to backend
    console.log("SubmitMaterial:", materialForm);
  };

  // Event popup
  const [addEvent, setAddEvent] = useState(false);
  const onCloseEvent = () => setAddEvent(false);

  // Notice popup
  const [addNotice, setAddNotice] = useState(false);
  const onCloseAddNotice = () => setAddNotice(false);

  const onLogout = () => {
    // implement logout logic (clear tokens, redirect)
    console.log("Logout clicked");
    // navigate("/login");
  };

  // helpers for active highlighting
  const isActive = (path) => location.pathname === path;
  const isActiveAny = (paths = []) => paths.includes(location.pathname);

  // Submenu animation helper classes (Tailwind)
  const submenuClass = (section) =>
    `ml-6 mt-2 overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
      openSection === section ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
    }`;

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            <h2 className="text-xl font-bold text-gray-800 mt-5">Teacher</h2>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="mt-5">

              {/* 1. Dashboard */}
              <SidebarMenuItem className="mt-2">
                <SidebarMenuButton
                  className={`text-[15px] flex items-center gap-2 ${
                    isActive("/teacher-dashboard") ? "bg-primary-foreground" : ""
                  }`}
                  onClick={() => navigate("/teacher-dashboard")}
                >
                  <FaHome /> Dashboard
                </SidebarMenuButton>
              </SidebarMenuItem>

              {/* 2. Attendance */}
              <SidebarMenuItem className="mt-2">
                <SidebarMenuButton
                  className={`text-[15px] flex items-center gap-2 ${
                    isActive("/attendance-management") ? "bg-primary-foreground" : ""
                  }`}
                  onClick={() => navigate("/attendance-management")}
                >
                  <MdHowToReg /> Attendance
                </SidebarMenuButton>
              </SidebarMenuItem>

              {/* 3. Leave Section (Approve Leave) */}
              <SidebarMenuItem className="mt-2">
                <SidebarMenuButton
                  className={`text-[15px] flex items-center gap-2 ${
                    isActive("/approve-leave") ? "bg-primary-foreground" : ""
                  }`}
                  onClick={() => navigate("/approve-leave")}
                >
                  <FaClipboardList /> Leave Section
                </SidebarMenuButton>
              </SidebarMenuItem>

              {/* 4. Notices (collapsible) */}
              <SidebarMenuItem className="mt-2">
                <SidebarMenuButton
                  className={`text-[15px] flex justify-between items-center ${
                    isActive("/teacher-notice") ? "bg-primary-foreground" : ""
                  }`}
                  onClick={() => toggleSection("notices")}
                >
                  <div className="flex items-center gap-2">
                    <FaBullhorn /> Notices
                  </div>
                  <div>{openSection === "notices" ? <FaAngleDown /> : <FaAngleRight />}</div>
                </SidebarMenuButton>

                <div className={submenuClass("notices")}>
                  <div className="flex flex-col gap-2 pt-2">
                    <SidebarMenuButton
                      className={`text-[14px] flex items-center gap-2 justify-start ${
                        isActive("/teacher-notice") ? "bg-primary-foreground/80" : ""
                      }`}
                      onClick={() => navigate("/teacher-notice")}
                    >
                      <FaBullhorn /> View Notices
                    </SidebarMenuButton>

                    <SidebarMenuButton
                      className="text-[14px] flex items-center gap-2 justify-start"
                      onClick={() => setAddNotice(true)}
                    >
                      <FaCloudUploadAlt /> Upload Notice
                    </SidebarMenuButton>
                  </div>
                </div>
              </SidebarMenuItem>

              {/* 5. Materials (collapsible) */}
              <SidebarMenuItem className="mt-2">
                <SidebarMenuButton
                  className={`text-[15px] flex justify-between items-center ${
                    isActive("/teacher-materials") ? "bg-primary-foreground" : ""
                  }`}
                  onClick={() => toggleSection("materials")}
                >
                  <div className="flex items-center gap-2">
                    <FaBook /> Materials
                  </div>
                  <div>{openSection === "materials" ? <FaAngleDown /> : <FaAngleRight />}</div>
                </SidebarMenuButton>

                <div className={submenuClass("materials")}>
                  <div className="flex flex-col gap-2 pt-2">
                    <SidebarMenuButton
                      className={`text-[14px] flex items-center gap-2 justify-start ${
                        isActive("/teacher-materials") ? "bg-primary-foreground/80" : ""
                      }`}
                      onClick={() => navigate("/teacher-materials")}
                    >
                      <FaBook /> View Materials
                    </SidebarMenuButton>

                    <SidebarMenuButton
                      className="text-[14px] flex items-center gap-2 justify-start"
                      onClick={() => setAddMaterials(true)}
                    >
                      <FaCloudUploadAlt /> Upload Materials
                    </SidebarMenuButton>
                  </div>
                </div>
              </SidebarMenuItem>

              {/* 6. Events (collapsible) */}
              <SidebarMenuItem className="mt-2">
                <SidebarMenuButton
                  className={`text-[15px] flex justify-between items-center ${
                    isActive("/teacher-event") ? "bg-primary-foreground" : ""
                  }`}
                  onClick={() => toggleSection("events")}
                >
                  <div className="flex items-center gap-2">
                    <FaCalendarAlt /> Events
                  </div>
                  <div>{openSection === "events" ? <FaAngleDown /> : <FaAngleRight />}</div>
                </SidebarMenuButton>

                <div className={submenuClass("events")}>
                  <div className="flex flex-col gap-2 pt-2">
                    <SidebarMenuButton
                      className={`text-[14px] flex items-center gap-2 justify-start ${
                        isActive("/teacher-event") ? "bg-primary-foreground/80" : ""
                      }`}
                      onClick={() => navigate("/teacher-event")}
                    >
                      <FaCalendarAlt /> View Events
                    </SidebarMenuButton>

                    <SidebarMenuButton
                      className="text-[14px] flex items-center gap-2 justify-start"
                      onClick={() => setAddEvent(true)}
                    >
                      <FaCloudUploadAlt /> Upload Event
                    </SidebarMenuButton>
                  </div>
                </div>
              </SidebarMenuItem>

              {/* 7. Quiz (collapsible) */}
              <SidebarMenuItem className="mt-2">
                <SidebarMenuButton
                  className={`text-[15px] flex justify-between items-center ${
                    isActiveAny(["/quiz-create", "/quiz-manage", "/teacher-quiz-result"]) ? "bg-primary-foreground" : ""
                  }`}
                  onClick={() => toggleSection("quiz")}
                >
                  <div className="flex items-center gap-2">
                    <MdQuiz /> Quiz
                  </div>
                  <div>{openSection === "quiz" ? <FaAngleDown /> : <FaAngleRight />}</div>
                </SidebarMenuButton>

                <div className={submenuClass("quiz")}>
                  <div className="flex flex-col gap-2 pt-2">
                    <SidebarMenuButton
                      className={`text-[14px] flex items-center gap-2 justify-start ${
                        isActive("/quiz-create") ? "bg-primary-foreground/80" : ""
                      }`}
                      onClick={() => navigate("/quiz-create")}
                    >
                      <MdQuiz /> Create Quiz
                    </SidebarMenuButton>

                    <SidebarMenuButton
                      className={`text-[14px] flex items-center gap-2 justify-start ${
                        isActive("/quiz-manage") ? "bg-primary-foreground/80" : ""
                      }`}
                      onClick={() => navigate("/quiz-manage")}
                    >
                      <FaCloudUploadAlt /> Manage Quiz
                    </SidebarMenuButton>

                    <SidebarMenuButton
                      className={`text-[14px] flex items-center gap-2 justify-start ${
                        isActive("/teacher-quiz-result") ? "bg-primary-foreground/80" : ""
                      }`}
                      onClick={() => navigate("/teacher-quiz-result")}
                    >
                      <FaCloudUploadAlt /> Quiz Results
                    </SidebarMenuButton>
                  </div>
                </div>
              </SidebarMenuItem>

              {/* 8. Exam (collapsible) */}
              <SidebarMenuItem className="mt-2">
                <SidebarMenuButton
                  className={`text-[15px] flex justify-between items-center ${
                    isActiveAny(["/mid-sem-submit", "/add-internal-th", "/add-Viva-th", "/add-external-th"]) ? "bg-primary-foreground" : ""
                  }`}
                  onClick={() => toggleSection("exam")}
                >
                  <div className="flex items-center gap-2">
                    <MdAssessment /> Exam
                  </div>
                  <div>{openSection === "exam" ? <FaAngleDown /> : <FaAngleRight />}</div>
                </SidebarMenuButton>

                <div className={submenuClass("exam")}>
                  <div className="flex flex-col gap-2 pt-2">
                    <SidebarMenuButton
                      className={`text-[14px] flex items-center gap-2 justify-start ${
                        isActive("/mid-sem-submit") ? "bg-primary-foreground/80" : ""
                      }`}
                      onClick={() => navigate("/mid-sem-submit")}
                    >
                      <FaCloudUploadAlt /> Internal - Mid
                    </SidebarMenuButton>

                    <SidebarMenuButton
                      className={`text-[14px] flex items-center gap-2 justify-start ${
                        isActive("/add-internal-th") ? "bg-primary-foreground/80" : ""
                      }`}
                      onClick={() => navigate("/add-internal-th")}
                    >
                      <MdAssessment /> Internal Theory
                    </SidebarMenuButton>

                    <SidebarMenuButton
                      className={`text-[14px] flex items-center gap-2 justify-start ${
                        isActive("/add-Viva-th") ? "bg-primary-foreground/80" : ""
                      }`}
                      onClick={() => navigate("/add-Viva-th")}
                    >
                      <FaCloudUploadAlt /> Viva Theory
                    </SidebarMenuButton>

                    <SidebarMenuButton
                      className={`text-[14px] flex items-center gap-2 justify-start ${
                        isActive("/add-external-th") ? "bg-primary-foreground/80" : ""
                      }`}
                      onClick={() => navigate("/add-external-th")}
                    >
                      <FaCloudUploadAlt /> External Theory
                    </SidebarMenuButton>
                  </div>
                </div>
              </SidebarMenuItem>

              {/* 9. Achievements */}
              <SidebarMenuItem className="mt-2">
                <SidebarMenuButton
                  className={`text-[15px] flex items-center gap-2 ${
                    isActive("/student-achievement-details") ? "bg-primary-foreground" : ""
                  }`}
                  onClick={() => navigate("/student-achievement-details")}
                >
                  <FaTrophy /> Achievements
                </SidebarMenuButton>
              </SidebarMenuItem>

              {/* 10. Logout */}
              <SidebarMenuItem className="mt-4">
                <SidebarMenuButton className="text-[15px] flex items-center gap-2" onClick={onLogout}>
                  <MdLogout /> Logout
                </SidebarMenuButton>
              </SidebarMenuItem>

            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Popups */}
      {addMaterials && (
        <div className="fixed inset-0 backdrop-blur-[1px] z-50">
          <AddMaterialsPopup
            onAddMaterialClose={onAddMaterialClose}
            onChangeMaterial={onChangeMaterial}
            SubmitMaterial={SubmitMaterial}
            materialForm={materialForm}
            onFileUpload={onFileUpload}
          />
        </div>
      )}

      {addEvent && (
        <div className="fixed inset-0 backdrop-blur-[1px] z-50">
          <AddEventPopup onCloseEvent={onCloseEvent} />
        </div>
      )}

      {addNotice && (
        <div className="fixed inset-0 backdrop-blur-[1px] z-50">
          <AddNoticePopup onCloseAddNotice={onCloseAddNotice} />
        </div>
      )}
    </Sidebar>
  );
};

export default TeacherNavbar;
