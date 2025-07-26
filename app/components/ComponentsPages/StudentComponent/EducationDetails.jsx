import { FiPhone } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import {  MdLocationPin } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoBookOutline } from "react-icons/io5";
import { MdOutlineSchool } from "react-icons/md";

const EducationDetails = () => {
  return (
    <div className="border border-black rounded-2xl p-8 bg-gray-100 text-sm">
      <div className="grid grid-cols-2 gap-x-4 gap-y-4">
        {/* Full Name */}
        <div className="flex items-start">
          <CgProfile className="text-2xl mt-1" />
          <div className="pl-5">
            <h1 className="text-[18px] font-bold">Full Name</h1>
            <p>Emily Rathod</p>
          </div>
        </div>

        {/* Specialization */}
        <div className="flex items-start">
          <MdOutlineSchool className="text-2xl mt-1" />
          <div className="pl-5">
            <h1 className="text-[18px] font-bold">Specialization</h1>
            <p>IOT Devices</p>
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

        {/* Seating Place */}
        <div className="flex items-start">
          <MdLocationPin className="text-2xl mt-1" />
          <div className="pl-5">
            <h1 className="text-[18px] font-bold">Seating Place</h1>
            <p>A-203</p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start">
          <MdOutlineMail className="text-2xl mt-1" />
          <div className="pl-5">
            <h1 className="text-[18px] font-bold">Email Address</h1>
            <p>johny@gmail.com</p>
          </div>
        </div>

        {/* Department */}
        <div className="flex items-start">
          <IoBookOutline className="text-2xl mt-1" />
          <div className="pl-5">
            <h1 className="text-[18px] font-bold">Department</h1>
            <p>Electronics and Communication</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationDetails;
