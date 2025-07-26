import { IoClose } from "react-icons/io5";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select"
import { Button } from "../../ui/button";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";




const RegisterEventPopup = ({ onCloseHandle }) => {
  const [memberNumber, setMemeberNumber] = useState([]);

  const MemberStudentHandle = () => {
    if (memberNumber.length < 3) {
      setMemeberNumber([...memberNumber, ['k']]);
    }
  }

  const removeMember = () => {
    if (memberNumber.length > 0) {
      let updateMember = [...memberNumber];
      updateMember.pop();
      setMemeberNumber(updateMember)
    }
  }

  console.log(memberNumber);

  return (
    <div className='flex justify-center h-screen items-center drop-shadow-lg shadow-ring'>
      <div className='bg-card px-10 pt-7 rounded-[10px] w-[40%] relative h-[90%] overflow-y-auto'>

        <div className='flex justify-between'>
          <h1 className='font-semibold text-3xl'>Register</h1>
          <p><IoClose onClick={onCloseHandle} className='cursor-pointer text-2xl absolute right-3 top-4' /></p>
        </div>

        <div className="py-6">
          <form action="">

            <div className="grid grid-cols-2 gap-5 w-full">
              <div className='w-full'>
                <Label htmlFor="" className='font-bold text-[18px]'> Student name <span className='text-[#DE0D0D]'>*</span></Label>
                <Input className='mt-3 bg-primary-foreground placeholder:text-[16px]' placeholder='Enter Student Name' type='text' required />
              </div>

              <div className="w-full -p">
                <Label className="font-bold text-[18px]">Enrollment Number <span className='text-[#DE0D0D]'>*</span></Label>
                <Input type="text" className="mt-3 bg-primary-foreground placeholder:text-[16px]" placeholder="Enter Enrollment Number" required />
              </div>
            </div>


            <div className="grid grid-cols-2 gap-5 w-full">
              <div className="pt-4 w-full">
                <Label className="font-bold text-[18px]">Branch <span className='text-[#DE0D0D]'>*</span></Label>
                <Select>
                  <SelectTrigger className="mt-3 w-full bg-primary-foreground text-[16px]">
                    <SelectValue placeholder="Course Code" />
                  </SelectTrigger>
                  <SelectContent className="bg-primary-foreground">
                    <SelectItem value="Computer engineering">Computer engineering</SelectItem>
                    <SelectItem value="information technology">information technology</SelectItem>
                    <SelectItem value="Electrical Engineerings">Electrical Engineering</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="pt-4 w-full">
                <Label className="font-bold text-[18px]">Sem <span className='text-[#DE0D0D]'>*</span></Label>
                <Select>
                  <SelectTrigger className="mt-3 w-full bg-primary-foreground text-[16px]">
                    <SelectValue placeholder="Sem" />
                  </SelectTrigger>
                  <SelectContent className="bg-primary-foreground">
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>


            <div className="grid grid-cols-2 gap-5 w-full pb-8  border-b border-black">
              <div className="pt-4 w-full">
                <Label className="font-bold text-[18px]">Email <span className='text-[#DE0D0D]'>*</span></Label>
                <Input type="email" className="mt-3 bg-primary-foreground  placeholder:text-[16px]" placeholder="Enter your Email" required />
              </div>

              <div className="pt-4 w-full">
                <Label className="font-bold text-[18px]">Phone number <span className='text-[#DE0D0D]'>*</span></Label>
                <Input type="text" className="mt-3 bg-primary-foreground  placeholder:text-[16px]" placeholder="Enter a Phone Number" required />
              </div>
            </div>



            {/* Add members */}
            {memberNumber?.map((_, index) => (
              <div key={index} className="pb-8 border-b border-black">
                <div className="grid grid-cols-2 gap-5">
                  <div className="pt-4 w-full">
                    <Label className="font-bold text-[18px]">Member-{index + 1}</Label>
                    <Input type="email" className="mt-3 w-full bg-primary-foreground  placeholder:text-[16px]" placeholder="Enter your Member-1" />
                  </div>
                  <div className="pt-4 w-full">
                    <Label className="font-bold text-[17px]">Enrollment Number</Label>
                    <Input type="email" className="mt-3 w-full bg-primary-foreground  placeholder:text-[16px]" placeholder="Enter Enrollment Number" />
                  </div>
                </div>


                <div className="flex space-x-5">
                  <div className="pt-4 w-full">
                    <Label className="font-bold text-[18px]">Branch</Label>
                    <Select>
                      <SelectTrigger className="mt-3 w-full bg-primary-foreground text-[16px]">
                        <SelectValue placeholder="Course Code" />
                      </SelectTrigger>
                      <SelectContent className="bg-primary-foreground">
                        <SelectItem value="Computer engineering">Computer engineering</SelectItem>
                        <SelectItem value="information technology">information technology</SelectItem>
                        <SelectItem value="Electrical Engineering">Electrical Engineering</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="pt-4 w-full">
                    <Label className="font-bold text-[18px]">Sem</Label>
                    <Select>
                      <SelectTrigger className="mt-3 w-full bg-primary-foreground text-[16px]">
                        <SelectValue placeholder="sem" />
                      </SelectTrigger>
                      <SelectContent className="bg-primary-foreground">
                        <SelectItem value="1">1</SelectItem>
                        <SelectItem value="2">2</SelectItem>
                        <SelectItem value="3">3</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>


                <div className="flex w-full space-x-5">
                  <div className="pt-4 w-full">
                    <Label className="font-bold text-[18px]">Email</Label>
                    <Input type="email" className="mt-3 w-full bg-primary-foreground  placeholder:text-[16px]" placeholder="Enter your Email" />
                  </div>
                  <div className="pt-4 w-full">
                    <Label className="font-bold text-[18px]">Phone number</Label>
                    <Input type="email" className="mt-3 w-full bg-primary-foreground  placeholder:text-[16px]" placeholder="Enter Phone Number" />
                  </div>
                </div>
              </div>
            ))
            }



            {/* Add Btn */}
            <div className="pt-5 text-center space-x-2">
              <Button className="cursor-pointer py-5 text-[15px]" onClick={MemberStudentHandle} disabled={memberNumber.length == 3 ? true : false}><FaPlus />Add Member</Button>


              <Button className="cursor-pointer py-5 text-[15px]" onClick={removeMember} disabled={memberNumber.length == 0 ? true : false}><MdDelete />Remove Member</Button>
            </div>


            {/* Sub event */}
            <div className="pt-4">
              <Label className="font-bold text-[18px]">Sub event</Label>
              <Select>
                <SelectTrigger className="mt-3 w-full bg-primary-foreground text-[16px]">
                  <SelectValue placeholder="Course Code" />
                </SelectTrigger>
                <SelectContent className="bg-primary-foreground">
                  <SelectItem value="course-code">Coding</SelectItem>
                  <SelectItem value="course-name">Workshop</SelectItem>
                  <SelectItem value="semester">UI/UX </SelectItem>
                </SelectContent>
              </Select>
            </div>


            <div className="pt-6">
              <Button className="px-7 py-4 text-[16px] cursor-pointer">Submit</Button>
            </div>
          </form>
        </div>

      </div>
    </div>
  )
}

export default RegisterEventPopup