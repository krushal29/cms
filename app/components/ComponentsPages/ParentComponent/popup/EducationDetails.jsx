




import { MdOutlineMail } from "react-icons/md";
import { IoBookOutline, IoIdCardOutline } from "react-icons/io5";
import { BiSolidSchool } from "react-icons/bi";

const EducationDetails = () => {
  return (
    <div className="border border-black rounded-2xl p-8 bg-gray-100 text-sm">
      <div className="grid grid-cols-2 gap-x-4 gap-y-4">
        {/* Info Section */}
        <div className="space-y-4">
          <div className="flex items-start">
            <IoBookOutline className="text-2xl mt-1" />
            <div className="pl-5">
              <h1 className="text-[18px] font-bold">Branch</h1>
              <p>Computer Science and Design</p>
            </div>
          </div>

          <div className="flex items-start">
            <BiSolidSchool className="text-2xl mt-1" />
            <div className="pl-5">
              <h1 className="text-[18px] font-bold">Current Semester</h1>
              <p>5</p>
            </div>
          </div>

          <div className="flex items-start">
            <IoIdCardOutline className="text-2xl mt-1" />
            <div className="pl-5">
              <h1 className="text-[18px] font-bold">Enrollment Number</h1>
              <p>12302130501027</p>
            </div>
          </div>

          <div className="flex items-start">
            <MdOutlineMail className="text-2xl mt-1" />
            <div className="pl-5">
              <h1 className="text-[18px] font-bold">Student Mail</h1>
              <p>123067@grand.ac.in</p>
            </div>
          </div>
        </div>

        {/* CGPA Details */}
        <div className="border border-black rounded-2xl h-[300px] overflow-y-auto">
          <div className="bg-gray-200 rounded-t-2xl">
            <h1 className="font-semibold text-center text-xl py-3">CGPA Details</h1>
          </div>
          <div className="p-4">
            <ul className="list-disc pl-5 space-y-4">
              {[
                { sem: "Semester 1", sgpa: "9.80", cgpa: "9.80" },
                { sem: "Semester 2", sgpa: "9.54", cgpa: "9.66" },
                { sem: "Semester 3", sgpa: "9.66", cgpa: "9.68" },
                { sem: "Semester 4", sgpa: "9.69", cgpa: "9.69" },
                { sem: "Semester 5", sgpa: "9.69", cgpa: "9.69" }
              ].map(({ sem, sgpa, cgpa }, idx) => (
                <li key={idx}>
                  <div>
                    <h5 className="font-bold text-[18px]">{sem}</h5>
                    <div className="flex justify-between pr-2">
                      <p>SGPA: {sgpa}</p>
                      <p>CGPA: {cgpa}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationDetails;

