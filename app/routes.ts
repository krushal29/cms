import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/HomePage/HomePage.jsx"),


    //School pages
    route('/SchoolPage', 'routes/SchoolPages/SchoolHomePage.jsx'),
    route('/Department', 'routes/SchoolPages/DepartmentPage.jsx'),
    route('/DepartmentStaff', 'routes/SchoolPages/DepartmentStaffPage.jsx'),
    route('/DepartmentAcademic', 'routes/SchoolPages/SchoolAcademicStructurePage.jsx'),
    route('/DepartmentAchivements', 'routes/SchoolPages/AchivementsPage.jsx'),
    route('/Placement', 'routes/SchoolPages/SchoolPlacementPage.jsx'),

    

    //Student pages
    route('/StudentDashBoard', 'routes/StudentPages/DashBoard.jsx'),
    route('/StudentMaterial', "routes/StudentPages/MaterialsPage.jsx"),
    route('/StudentEvent', 'routes/StudentPages/EventPage.jsx'),
    route('/StudentNotice', 'routes/StudentPages/NoticesPage.jsx'),
    route('/StudentAchievements', 'routes/StudentPages/AchivementsPage.jsx'),
    route('/StudentFees', 'routes/StudentPages/FeesManagmentPage.jsx'),
    route('/StudentLeave', 'routes/StudentPages/LeaveManagementPage.jsx'),
    route('/StudentAttendance',"routes/StudentPages/AttendancePage.jsx"),
    route('/QuizUpcomming', 'routes/StudentPages/QuizUpcoming.jsx'),
    route('/QuizResult','routes/StudentPages/QuizResult.jsx'),
    route('/QuizStart', 'routes/StudentPages/QuizSection.jsx'),
    route('/QuestionStart', 'routes/StudentPages/QuizQuestion.jsx'),
    route('/quiz-answer','routes/StudentPages/QuizAnswer.jsx'),
    route('/ExamInternal','routes/StudentPages/ExamInternalTh.jsx'),
    route('/ExamExtenal','routes/StudentPages/ExamExtenal.jsx'),




    // Teacher Pages
    route('/teacher-dashboard','routes/TeacherPage/TacherDashboard.jsx'),
    route('/teacher-notice', 'routes/TeacherPage/TeacherNotice.jsx'),
    route('/teacher-event', 'routes/TeacherPage/TeacherEvent.jsx'),
    route('/teacher-materials','routes/TeacherPage/TeacherMaterials.jsx'),
    route('/quiz-manage','routes/TeacherPage/QuizManage.jsx'),
    route('/teacher-quiz-result','routes/TeacherPage/QuizResult.jsx'),
    route('/event-student-list','routes/TeacherPage/EventStudentList.jsx'),
    route('/mid-sem-submit','routes/TeacherPage/ExamInternalMarksSubmit.jsx'),
    route('/student-achievement-details','routes/TeacherPage/StudentAchivementDetails.jsx'),
    route('/quiz-create','routes/TeacherPage/QuizCreatePage.jsx'),
    route('/quiz-add-question','routes/TeacherPage/QuizAddQuestion.jsx'),
    route('/attendance-management','routes/TeacherPage/AttendanceManagement.jsx'),
    


    // route('/ExtraPopup','components/ComponentsPages/TeacherComponent/popupComponent/EditMarksInternalVivaPopup.jsx')

    // parent Pages
    route('/parent-leave','routes/ParentPage/LeavePage.jsx'),
    route('/parent-attendance','routes/ParentPage/AttendancePage.jsx'),
    route('/exam-result','routes/ParentPage/ExamExResultPage.jsx'),
    route('/exam-internal','routes/ParentPage/ExamInternalPage.jsx'),
    route('/quiz-result','routes/ParentPage/QuizResultPage.jsx'),




] satisfies RouteConfig;