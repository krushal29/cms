import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import './calendarTailwind.css';
import { IoClose } from "react-icons/io5";

const StudentAttendancePopup = ({ onCloseHandle }) => {
  const [value, setValue] = useState(new Date());

  const formatDate = (date) =>
    `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;

  const normalizeDates = (dates) => dates.map(d => formatDate(new Date(d)));

  const attendanceData = {
    absent: normalizeDates(["2025-07-02", "2025-07-05", "2025-07-06"]),
    dontCare: normalizeDates(["2025-07-15"]),
  };

  const tileClassName = ({ date, view }) => {
    const formatted = formatDate(date);
    const todayFormatted = formatDate(new Date());

    if (view === "month") {
      if (attendanceData.absent.includes(formatted)) return "absent-day";
      if (attendanceData.dontCare.includes(formatted)) return "dont-care-day";
      if (formatted === todayFormatted) return "today-date";
    }
    return "";
  };


  return (
    <div className="flex justify-center items-center min-h-screen px-2">
      <div className="relative bg-secondary p-6 rounded-2xl shadow-lg w-full max-w-md">
        <button
          className="absolute top-3 right-3 text-gray-500 cursor-pointer"
          onClick={onCloseHandle}
        >
          <IoClose size={24} />
        </button>

        <h2 className="text-2xl font-semibold text-center mb-4 text-primary">
          Student Attendance Calendar
        </h2>

        <div className="p-4 bg-white rounded-xl border border-gray-300 shadow-md">
          <Calendar
            className="custom-calendar"
            onChange={setValue}
            value={value}
            tileClassName={tileClassName}
            formatMonth={(locale, date) => date.toLocaleString(locale, { month: 'short' })}
          />

        </div>

        <div className="mt-4 text-sm flex gap-4 justify-center flex-wrap">
          <span className="flex items-center gap-2">
            <span className="w-4 h-4 bg-red-400 rounded-full" /> Absent
          </span>
          <span className="flex items-center gap-2">
            <span className="w-4 h-4 bg-[#60a5fa] rounded-full" /> Don't Care
          </span>
          <span className="flex items-center gap-2">
            <span className="w-4 h-4 bg-green-300 rounded-full" /> Current Date
          </span>
        </div>
      </div>
    </div>
  );
};

export default StudentAttendancePopup;
