import { IoCalendarClearOutline, IoTimeOutline, IoLocationOutline } from "react-icons/io5";
import { Button } from "../../ui/button";
import { useState } from "react";
import AddEventPopup from "./AddEventPopup";
import EditTeacherEventComponent from "./EditTeacherEventComponent";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../../ui/pagination";

const data = [
  {
    id: 1,
    Heading: "Mid-term Examination Schedule",
    date: "3/1/2024",
    author: "Academic Office",
    desc: "Mid-term examinations will be conducted from March 15-25, 2024. Please check your individual timetables for specific dates and timings.",
    role: "Academic",
    time: "9:00 AM",
    Vanue: "Main Auditorium"
  },
  {
    id: 2,
    Heading: "Library Hours Extended",
    date: "2/28/2024",
    author: "Library Administration",
    desc: "Library hours have been extended during examination period. The library will now be open from 8:00 AM to 10:00 PM on weekdays.",
    role: "Facility",
    time: "9:00 AM",
    Vanue: "Main Auditorium"
  },
  {
    id: 3,
    Heading: "New Course Registration",
    date: "2/25/2024",
    author: "Academic Office",
    desc: "Registration for elective courses for the next semester is now open. Please visit the academic portal to register before the deadline.",
    role: "Facility",
    time: "9:00 AM",
    Vanue: "Main Auditorium"
  },
  {
    id: 4,
    Heading: "Hostel Maintenance Notice",
    date: "2/22/2024",
    author: "Hostel Warden",
    desc: "Scheduled maintenance will take place in all hostel blocks on March 3–5, 2024. Please cooperate with the staff during this time.",
    role: "Facility",
    time: "10:00 AM",
    Vanue: "Hostel Block A"
  },
  {
    id: 5,
    Heading: "Convocation 2024 Announced",
    date: "2/20/2024",
    author: "Registrar",
    desc: "Convocation ceremony for the graduating batch will be held on April 12, 2024. Graduating students must register by March 10.",
    role: "Academic",
    time: "11:00 AM",
    Vanue: "Main Auditorium"
  },
  {
    id: 6,
    Heading: "Wi-Fi Upgrade in Progress",
    date: "2/18/2024",
    author: "IT Services",
    desc: "Campus Wi-Fi will undergo upgrades this weekend. Expect intermittent connectivity on Feb 24–25, 2024.",
    role: "Facility",
    time: "2:00 PM",
    Vanue: "Server Room"
  },
  {
    id: 7,
    Heading: "Blood Donation Camp",
    date: "2/15/2024",
    author: "Health Center",
    desc: "A voluntary blood donation camp will be organized on March 1st. Interested students can register online.",
    role: "Facility",
    time: "10:30 AM",
    Vanue: "Health Center"
  },
  {
    id: 8,
    Heading: "Placement Drive Notification",
    date: "2/12/2024",
    author: "Placement Cell",
    desc: "TCS and Infosys will be visiting the campus for placements on March 6–7, 2024. Eligible students must apply by Feb 25.",
    role: "Academic",
    time: "9:30 AM",
    Vanue: "Seminar Hall"
  },
  {
    id: 9,
    Heading: "Cafeteria Price Revision",
    date: "2/10/2024",
    author: "Cafeteria Committee",
    desc: "Effective March 1st, revised prices will apply to cafeteria items. Menu remains unchanged.",
    role: "Facility",
    time: "1:00 PM",
    Vanue: "Cafeteria"
  },
  {
    id: 10,
    Heading: "Summer Internship Orientation",
    date: "2/8/2024",
    author: "Training & Development Cell",
    desc: "Orientation session for summer internships will be held on Feb 20, 2024, at the Main Auditorium.",
    role: "Academic",
    time: "4:00 PM",
    Vanue: "Main Auditorium"
  }
];


const TeacherEventComponent = () => {
  const [EditEvent, setEditEvent] = useState(false);
  const [EditData, setEditData] = useState([]);

  const OnCloseEditEvent = () => setEditEvent(false)

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const paginatedEvent = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const EditHandler = (id) => {
    setEditEvent(true);
    const filterData = data.find((val) => val.id == id);
    setEditData(filterData);
  }


  return (
    <div className="bg-background min-h-[50.8vh] flex justify-center py-10">
      <div className="w-[90%]">
        <h1 className="font-bold text-4xl text-center underline">Event</h1>

        {/* Event Details */}
        <div className="my-10 flex flex-col gap-y-7">
          {paginatedEvent.map((val, index) => (
            <div className="bg-secondary rounded-[15px] p-5 drop-shadow-lg shadow-ring border-l-7 border-black" key={index}>
              <div className="flex justify-between items-center ">
                <h1 className="font-medium text-2xl">{val.Heading}</h1>
                <Button className="bg-white text-black hover:bg-white text-[17px] py-5 px-10 cursor-pointer border border-primary font-semibold" onClick={() => EditHandler(val.id)}>Edit</Button>
              </div>
              <div className="flex items-center pt-2 text-[15px] space-x-5">
                <div className="flex items-center">
                  <div className="font-bold text-[16px]">
                    <IoCalendarClearOutline />
                  </div>
                  <div className="pl-2">
                    <p>{val.date}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="font-bold text-[16px]">
                    <IoTimeOutline />
                  </div>
                  <div className="pl-1">
                    <p>{val.time}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="font-bold text-[16px]">
                    <IoLocationOutline />
                  </div>
                  <div className="pl-2">
                    <p>{val.Vanue}</p>
                  </div>
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
        {/* Pagination */}
        <Pagination className="my-10 flex justify-center">
          <PaginationContent>

            {/* Previous */}
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPage > 1) setCurrentPage(currentPage - 1);
                }}
                className="transition-all duration-200 text-foreground hover:bg-muted border border-border rounded-md px-3 py-2 text-[17px]"
              />
            </PaginationItem>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, idx) => (
              <PaginationItem key={idx}>
                <PaginationLink
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage(idx + 1);
                  }}
                  className={`w-10 h-10 flex items-center justify-center rounded-md text-sm font-medium transition-all duration-200 border 
                              ${currentPage === idx + 1
                      ? "bg-primary text-primary-foreground border-primary shadow-2xl"
                      : "bg-background text-foreground border-border hover:bg-muted text-[17px]"
                    }`}
                >
                  {idx + 1}
                </PaginationLink>
              </PaginationItem>
            ))}

            {/* Next */}
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                }}
                className="transition-all duration-200 text-foreground hover:bg-muted border border-border rounded-md px-3 py-2 text-[17px]"
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>

      {EditEvent && <div className="fixed inset-0 backdrop-blur-[1px]"><EditTeacherEventComponent onCloseEvent={OnCloseEditEvent} EditData={EditData} /></div>}
    </div>
  )
}

export default TeacherEventComponent