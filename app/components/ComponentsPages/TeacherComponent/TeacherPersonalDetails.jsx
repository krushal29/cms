import { CgProfile } from "react-icons/cg";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMail,MdBadge } from "react-icons/md";
import { GiGraduateCap,GiBrain } from 'react-icons/gi'
import { FaCalendarAlt,FaCertificate,FaBookOpen  } from 'react-icons/fa'


const TeacherPersonalDetails = () => {
  return (
    <div className="border border-black rounded-2xl p-10  bg-gray-100 text-sm ">
      <div className="grid grid-cols-2 gap-x-10 gap-y-5">

        {/* Full Name */}
        <div className="flex items-start">
          <CgProfile className="text-2xl mt-1" />
          <div className="pl-5">
            <h1 className="text-[18px] font-bold">Full Name</h1>
            <p>John Doe</p>
          </div>
        </div>

        {/* Specialization */}
        <div className="flex items-start">
          <GiBrain className="text-2xl mt-1" />
          <div className="pl-5">
            <h1 className="text-[18px] font-bold">Specialization</h1>
            <p>AI/Ml and Data Science </p>
          </div>
        </div>

        {/* Phone Number */}
        <div className="flex items-start">
          <FiPhone className="text-2xl mt-1" />
          <div className="pl-5">
            <h1 className="text-[18px] font-bold">Phone Number</h1>
            <p>+91 - 7845698734</p>
          </div>
        </div>

        {/* Date of Joining */}
        <div className="flex items-start">
          <FaCalendarAlt className="text-2xl mt-1" />
          <div className="pl-5">
            <h1 className="text-[18px] font-bold">Date of Joining</h1>
            <p>12/3/2012</p>
          </div>
        </div>

        {/* Email Address */}
        <div className="flex items-start">
          <MdOutlineMail className="text-2xl mt-1" />
          <div className="pl-5">
            <h1 className="text-[18px] font-bold">Email Address</h1>
            <p>johny@gmail.com</p>
          </div>
        </div>

        {/* Parent's Email */}
        <div className="flex items-start">
          <FaCertificate className="text-2xl mt-1" />
          <div className="pl-5">
            <h1 className="text-[18px] font-bold">Certifications</h1>
            <p>Aws certified Solution Architect</p>
          </div>
        </div>

        {/* Teacher id */}
        <div className="flex items-start">
          <MdBadge className="text-2xl mt-1" />
          <div className="pl-5">
            <h1 className="text-[18px] font-bold">Teacher id</h1>
            <p>JD123456</p>
          </div>
        </div>

        {/* Address */}
        <div className="flex items-start">
          <FaBookOpen  className="text-2xl mt-1" />
          <div className="pl-5">
            <h1 className="text-[18px] font-bold">Subject Taught</h1>
            <p>C,C++,Data Science,NLP , Open CV</p>
          </div>
        </div>

        {/* Highest Degree */}
        <div className="flex items-start">
          <GiGraduateCap className="text-2xl mt-1" />
          <div className="pl-5">
            <h1 className="text-[18px] font-bold">Highest Degree</h1>
            <p>M.Tech from iit Delhi</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherPersonalDetails;
