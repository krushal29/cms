import { CgProfile } from "react-icons/cg";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMail, MdLocationPin } from "react-icons/md";
import { IoCalendarClearOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";

const PersonalDetails = () => {
  return (
    <div className="border border-black rounded-2xl p-10 bg-gray-100 text-sm ">
      <div className="grid grid-cols-2 gap-x-10 gap-y-4">
        {/* Full Name */}
        <div className="flex items-start">
          <CgProfile className="text-2xl mt-1" />
          <div className="pl-5">
            <h1 className="text-[18px] font-bold">Full Name</h1>
            <p>John Doe</p>
          </div>
        </div>

        {/* Parents Name */}
        <div className="flex items-start">
          <CgProfile className="text-2xl mt-1" />
          <div className="pl-5">
            <h1 className="text-[18px] font-bold">Parents Name</h1>
            <p>Sins Doe</p>
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

        {/* Parent's Phone Number */}
        <div className="flex items-start">
          <FiPhone className="text-2xl mt-1" />
          <div className="pl-5">
            <h1 className="text-[18px] font-bold">Phone Number</h1>
            <p>+91 - 7845698736</p>
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
          <MdOutlineMail className="text-2xl mt-1" />
          <div className="pl-5">
            <h1 className="text-[18px] font-bold">Email Address</h1>
            <p>sinsdoe@gmail.com</p>
          </div>
        </div>

        {/* Date of Birth */}
        <div className="flex items-start">
          <IoCalendarClearOutline className="text-2xl mt-1" />
          <div className="pl-5">
            <h1 className="text-[18px] font-bold">Date of Birth</h1>
            <p>1/1/2004</p>
          </div>
        </div>

        {/* Address */}
        <div className="flex items-start">
          <MdLocationPin className="text-2xl mt-1" />
          <div className="pl-5">
            <h1 className="text-[18px] font-bold">Address</h1>
            <p>23, Krishna Society, near sahid chowk, Anand-388120</p>
          </div>
        </div>

        {/* Blood Group */}
        <div className="flex items-start">
          <FaRegHeart className="text-2xl mt-1" />
          <div className="pl-5">
            <h1 className="text-[18px] font-bold">Blood Group</h1>
            <p>A+</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
