import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import './calendarTailwind.css';
import { IoClose } from "react-icons/io5";

const StudentAttendancePopup = ({ onCloseHandle }) => {
  const [value, setValue] = useState(new Date());

  // Format date in "YYYY-MM-DD"
  const formatDate = (date) =>
    `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;

  // Normalize date arrays
  const normalizeDates = (dates) => dates.map((d) => formatDate(new Date(d)));

  const attendanceData = {
    absent: normalizeDates(["2025-07-02", "2025-07-05", "2025-07-06"]),
    dontCare: normalizeDates(["2025-07-15"]),
  };

  const tileClassName = ({ date, view }) => {
  if (view === "month") {
    const formatted = formatDate(date);
    const todayFormatted = formatDate(new Date());

    if (attendanceData.absent.includes(formatted)) return "absent-day";
    if (attendanceData.dontCare.includes(formatted)) return "dont-care-day";
    if (formatted === todayFormatted) return "today-date";
  }
  return "";
};

  return (
    <div className="flex justify-center items-center min-h-screen px-2">
      <div className="relative bg-secondary p-6 rounded-2xl shadow-lg w-full max-w-md">

        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-gray-500 cursor-pointer"
          onClick={onCloseHandle}
        >
          <IoClose size={24} />
        </button>

        <h2 className="text-2xl font-semibold text-center mb-4 text-primary">
          Student Attendance Calendar
        </h2>
        <div className="flex justify-center w-full">
          <Calendar
            className="custom-calendar px-5 border-2 gap-3.5 !border-black"
            onChange={setValue}
            value={value}
            tileClassName={tileClassName}
          />

        </div>
        <div className="mt-4 text-sm flex gap-4 justify-center flex-wrap">
          <span className="flex items-center gap-2">
            <span className="w-4 h-4 bg-red-400 rounded-sm" /> Absent
          </span>
          <span className="flex items-center gap-2">
            <span className="w-4 h-4 bg-[#60a5fa] rounded-sm" /> Don't Care
          </span>
          <span className="flex items-center gap-2">
            <span className="w-4 h-4 bg-green-300 rounded-sm" /> Current Date
          </span>
        </div>
      </div>
    </div>
  );
};

export default StudentAttendancePopup;
