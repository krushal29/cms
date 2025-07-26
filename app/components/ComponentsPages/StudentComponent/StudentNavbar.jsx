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
              <li onClick={() => { navigate('/StudentAchievements'); setShowSidebar(false); }} className="flex items-center gap-2 cursor-pointer hover:bg-accent py-2 px-4 rounded-lg">
                <FaTrophy /> Achievements
              </li>
              <li onClick={() => { navigate('/StudentFees'); setShowSidebar(false); }} className="flex items-center gap-2 cursor-pointer hover:bg-accent py-2 px-4 rounded-lg">
                <FaMoneyBillWave /> Fees
              </li>
              <li onClick={() => { navigate('/StudentLeave'); setShowSidebar(false); }} className="flex items-center gap-2 cursor-pointer hover:bg-accent py-2 px-4 rounded-lg">
                <FaSignOutAlt /> Apply for Leave
              </li>

              {/* Quiz Section */}
              <li className="mt-4 font-semibold text-gray-600">Quiz Section</li>
              <li onClick={() => { navigate('/QuizUpcomming'); setShowSidebar(false); }} className="flex items-center gap-2 cursor-pointer hover:bg-accent py-2 px-4 rounded-lg">
                <MdQuiz /> Upcoming Quizzes
              </li>
              <li onClick={() => { navigate('/QuizResult'); setShowSidebar(false); }} className="flex items-center gap-2 cursor-pointer hover:bg-accent py-2 px-4 rounded-lg">
                <MdAssessment /> Quiz Results
              </li>

              {/* Exam Section */}
              <li className="mt-4 font-semibold text-gray-600">Exam Section</li>
              <li onClick={() => { navigate('/ExamInternal'); setShowSidebar(false); }} className="flex items-center gap-2 cursor-pointer hover:bg-accent py-2 px-4 rounded-lg">
                <GiGraduateCap /> Internal Exam
              </li>
              <li onClick={() => { navigate('/ExamExtenal'); setShowSidebar(false); }} className="flex items-center gap-2 cursor-pointer hover:bg-accent py-2 px-4 rounded-lg">
                <GiGraduateCap /> External Exam
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentNavbar;
