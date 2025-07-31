import { IoCalendarClearOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../../ui/pagination";
import { useState } from "react";



const data = [
  {
    id: 1,
    Heading: "Annual Technical Symposium",
    date: "3/20/2024",
    time: "9:00 am",
    vanue: "Main Auditorium",
    desc: "Join us for the biggest technical event of the year featuring workshops, competitions, and keynote speakers from industry leaders.",
    role: "Upcoming"
  },
  {
    id: 2,
    Heading: "Career Fair 2024",
    date: "3/25/2024",
    time: "10:00 am",
    vanue: "Sports Complex",
    desc: "Meet with top recruiters and explore career opportunities. Open to all final year students and recent graduates.",
    role: "Upcoming"
  },
  {
    id: 3,
    Heading: "Cultural Night",
    date: "4/2/2024",
    time: "6:00 pm",
    vanue: "University Grounds",
    desc: "Celebrate diversity with performances, food, and cultural exhibitions from students around the world.",
    role: "Closed"
  },
  {
    id: 4,
    Heading: "Innovation Expo",
    date: "4/10/2024",
    time: "11:00 am",
    vanue: "Innovation Hall",
    desc: "Showcase of student innovations and projects in tech, design, and sustainability.",
    role: "Upcoming"
  },
  {
    id: 5,
    Heading: "Guest Lecture: AI in Healthcare",
    date: "4/15/2024",
    time: "2:00 pm",
    vanue: "Seminar Room B",
    desc: "Join Dr. Meera Shah as she explores the applications of artificial intelligence in modern medicine.",
    role: "Upcoming"
  },
  {
    id: 6,
    Heading: "Sports Day",
    date: "4/20/2024",
    time: "8:00 am",
    vanue: "Athletics Track",
    desc: "Full day of track and field events, games, and awards. All students welcome to participate or cheer.",
    role: "Closed"
  }
];


const Event = () => {
  // const [DoRegister,setRegister]=useState(false);



  // const RegisterHandle=()=>{
  //   setRegister(true);
  // }
  // const onCloseHandle=()=>{
  //   setRegister(false);
  // }



  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const paginatedEvent = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );


  return (
    <div className="bg-background min-h-[50.8vh] flex justify-center pt-10 pb-15">
      <div className="w-[90%]">
        <h1 className="font-bold text-4xl text-center underline font-[inner]">Events</h1>

        <div className="my-10 space-y-7">
          {paginatedEvent.map((val, index) => (
            <div className="bg-secondary rounded-[15px] p-5 drop-shadow-lg shadow-ring border-l-7 border-black" key={index}>
              <div className="flex justify-between items-center ">
                <h1 className="font-medium text-2xl">{val.Heading}</h1>
                <p className={`${val.role == "Upcoming" ? 'bg-emerald-200 text-teal-950' : val.role == "Closed" ? 'bg-rose-200 text-pink-800' : ''} py-1 px-5 rounded-2xl`}>{val.role}</p>
              </div>
              <div className="flex items-center pt-1 text-[15px]">
                <div className="flex items-center">
                  <div className="font-bold">
                    <IoCalendarClearOutline className="text-[16px]" />
                  </div>
                  <div className="pl-3">
                    <p className="text-[16px]">{val.date}</p>
                  </div>
                </div>

                <div className="flex items-center pl-5">
                  <div className="font-bold">
                    <FaRegClock className="text-[16px]" />
                  </div>
                  <div className="pl-3">
                    <p className="text-[16px]">{val.time}</p>
                  </div>
                </div>


                <div className="flex items-center pl-5">
                  <div className="font-bold">
                    <IoLocationOutline className="text-[19px]" />
                  </div>
                  <div className="pl-3">
                    <p className="text-[16px]">{val.vanue}</p>
                  </div>
                </div>
              </div>
              <div>
                <p className="pt-1 text-[17px]">
                  {val.desc}
                </p>
              </div>


              {/* <div className="pt-2">
              <Button className="text-[17px] cursor-pointer py-5 px-7" onClick={RegisterHandle}>Register</Button>
            </div> */}
            </div>
          ))}
        </div>


        <Pagination className="mt-10 flex justify-center">
          <PaginationContent>

            {/* Previous */}
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPage > 1) setCurrentPage(currentPage - 1);
                }}
                className="transition-all duration-200 text-[color:var(--foreground)] hover:bg-[color:var(--muted)] border border-[color:var(--border)] rounded-md px-3 py-2 text-[17px]"
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
                className="transition-all duration-200 text-[color:var(--foreground)] hover:bg-[color:var(--muted)] border border-[color:var(--border)] rounded-md px-3 py-2 text-[17px]"
              />
            </PaginationItem>

          </PaginationContent>
        </Pagination>



      </div>


      {/* {DoRegister&&<div className="fixed inset-0 backdrop-blur-[1px]"><RegisterEventPopup onCloseHandle={onCloseHandle}/></div>} */}
    </div>
  )
}

export default Event