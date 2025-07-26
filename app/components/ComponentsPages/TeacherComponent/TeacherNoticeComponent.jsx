import { IoCalendarClearOutline } from "react-icons/io5";
import {Button} from "../../ui/button";
import { useState } from "react";
import AddNoticePopup from "./AddNoticePopup";
import EditNoticePopup from "./EditNoticePopup";

const data = [
    {
        id: 1,
        Heading: "Mid-term Examination Schedule",
        date: "3/1/2024",
        author: "Academic Office",
        desc: "Mid-term examinations will be conducted from March 15-25, 2024. Please check your individual timetables for specific dates and timings.",
        role: "Academic"
    },
    {
        id: 2,
        Heading: "Library Hours Extended",
        date: "2/28/2024",
        author: "Library Administration",
        desc: "Library hours have been extended during examination period. The library will now be open from 8:00 AM to 10:00 PM on weekdays.",
        role: "Facility"
    },
    {
        id: 3,
        Heading: "New Course Registration",
        date: "2/25/2024",
        author: "Academic Office",
        desc: "Registration for elective courses for the next semester is now open. Please visit the academic portal to register before the deadline.",
        role: "Facility"
    },

]


const TeacherNoticeComponent = () => {
    const [AddNotice,setAddNotice]=useState(false);
    const [EditNotice,setEditNotice]=useState(false);
    const [EditData,setEditData]=useState({})

    const onCloseAddNotice=()=>setAddNotice(false);
    const onCloseEditNotice=()=>setEditNotice(false);


    const EditHandleNotice=(id)=>{
        setEditNotice(true);

        const filterData=data.find((val)=>val.id==id);
        setEditData(filterData);

    }
   return (
          <div className="bg-background min-h-[50.8vh] flex justify-center py-10">
              <div className="w-[90%]">
                  <h1 className="font-bold text-4xl text-center underline">NOTICES</h1>


                <div className="pt-10">
                    <Button className="text-[18px] py-5 px-10 cursor-pointer" onClick={()=>setAddNotice(true)}>Upload Notices</Button>
                </div>


                  <div className="my-10 flex flex-col gap-y-7">
                      {data.map((val, index) => (
                          <div className="bg-secondary rounded-[15px] p-5 drop-shadow-lg shadow-ring border-l-13 border-black" key={index}>
                              <div className="flex justify-between items-center ">
                                  <h1 className="font-medium text-2xl">{val.Heading}</h1>
                                 <Button className="bg-white text-black hover:bg-white text-[16px] py-5 px-10 cursor-pointer border border-primary font-semibold" onClick={()=>EditHandleNotice(val.id)}>Edit</Button>
                              </div>
                              <div className="flex items-center pt-2 text-[15px]">
                                  <div className="font-bold">
                                      <IoCalendarClearOutline />
                                  </div>
                                  <div className="pl-3">
                                      <p>{val.date} . By {val.author}</p>
                                  </div>
                              </div>
                              <div>
                                  <p className="pt-2 text-[17px]">
                                      {val.desc}
                                  </p>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>

              {AddNotice&&<div className="inset-0 fixed backdrop-blur-[1px]"><AddNoticePopup onCloseAddNotice={onCloseAddNotice}/></div>}

            {EditNotice&&<div className="fixed inset-0 backdrop-blur-[1px]"><EditNoticePopup onCloseEditNotice={onCloseEditNotice} EditData={EditData} /></div>}


          </div>
      )
}

export default TeacherNoticeComponent