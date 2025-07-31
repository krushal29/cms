// import { IoCalendarClearOutline } from "react-icons/io5";


// const data = [
//     {
//         id: 1,
//         Heading: "Mid-term Examination Schedule",
//         date: "3/1/2024",
//         author: "Academic Office",
//         desc: "Mid-term examinations will be conducted from March 15-25, 2024. Please check your individual timetables for specific dates and timings.",
//         role: "Academic"
//     },
//     {
//         id: 2,
//         Heading: "Library Hours Extended",
//         date: "2/28/2024",
//         author: "Library Administration",
//         desc: "Library hours have been extended during examination period. The library will now be open from 8:00 AM to 10:00 PM on weekdays.",
//         role: "Facility"
//     },
//     {
//         id: 3,
//         Heading: "New Course Registration",
//         date: "2/25/2024",
//         author: "Academic Office",
//         desc: "Registration for elective courses for the next semester is now open. Please visit the academic portal to register before the deadline.",
//         role: "Facility"
//     },

// ]



// const Notices = () => {
//     return (
//         <div className="bg-background min-h-[50.8vh] flex justify-center py-10 font-[lora]">
//             <div className="w-[90%]">
//                 <h1 className="font-bold text-4xl text-center underline font-[inner]">NOTICES</h1>
//                 <div className="my-10 space-y-8">
//                     {data.map((val, index) => (
//                         <div className="bg-secondary rounded-[15px] p-5 drop-shadow-lg shadow-ring border-l-13 border-black" key={index}>
//                             <div className="flex justify-between items-center ">
//                                 <h1 className="font-medium text-2xl">{val.Heading}</h1>
//                                 <p className={`${val.role=="Academic"?'bg-cyan-200 text-cyan-950':val.role=="Facility"?'bg-violet-200 text-violet-800':val.role=="Facility"?'bg-rose-200 text-pink-900':''} py-1 px-5 rounded-2xl`}>{val.role}</p>
//                             </div>
//                             <div className="flex items-center pt-2 text-[15px]">
//                                 <div className="font-bold">
//                                     <IoCalendarClearOutline />
//                                 </div>
//                                 <div className="pl-3">
//                                     <p>{val.date} . By {val.author}</p>
//                                 </div>
//                             </div>
//                             <div>
//                                 <p className="pt-2 text-[17px]">
//                                     {val.desc}
//                                 </p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Notices

"use client";

import { IoCalendarClearOutline } from "react-icons/io5";
import { useState } from "react";

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
  },
  {
    id: 2,
    Heading: "Library Hours Extended",
    date: "2/28/2024",
    author: "Library Administration",
    desc: "Library hours have been extended during examination period. The library will now be open from 8:00 AM to 10:00 PM on weekdays.",
    role: "Facility",
  },
  {
    id: 3,
    Heading: "New Course Registration",
    date: "2/25/2024",
    author: "Academic Office",
    desc: "Registration for elective courses for the next semester is now open. Please visit the academic portal to register before the deadline.",
    role: "Facility",
  },
  {
    id: 4,
    Heading: "Campus Wi-Fi Upgrade",
    date: "2/22/2024",
    author: "IT Services",
    desc: "The campus Wi-Fi infrastructure will undergo maintenance this weekend. Expect intermittent connectivity on Saturday.",
    role: "Facility",
  },
  {
    id: 5,
    Heading: "Convocation Ceremony",
    date: "2/20/2024",
    author: "Registrar Office",
    desc: "The convocation ceremony for graduating students will be held on April 2nd. Registration is open now.",
    role: "Academic",
  },
  {
    id: 6,
    Heading: "Blood Donation Drive",
    date: "2/18/2024",
    author: "NSS Unit",
    desc: "A blood donation camp will be organized on March 5th. All students and staff are encouraged to participate.",
    role: "Social",
  },
  {
    id: 7,
    Heading: "Seminar on AI & Ethics",
    date: "2/15/2024",
    author: "CS Department",
    desc: "Join us for a seminar discussing the ethics of AI in real-world applications. Speaker from IIT Bombay.",
    role: "Academic",
  },
  {
    id: 8,
    Heading: "Annual Sports Week",
    date: "2/12/2024",
    author: "Sports Committee",
    desc: "Annual sports week starts from March 10th. Register for events through the student portal.",
    role: "Facility",
  },
];

const Notices = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const paginatedNotices = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="bg-background min-h-[50.8vh] flex justify-center py-10">
      <div className="w-[90%]">
        <h1 className="font-bold text-4xl text-center underline font-[inner]">NOTICES</h1>

        <div className="my-10 space-y-8">
          {paginatedNotices.map((val) => (
            <div
              key={val.id}
              className="bg-secondary rounded-[15px] p-5 drop-shadow-lg shadow-ring border-l-7 border-black"
            >
              <div className="flex justify-between items-center">
                <h1 className="font-medium text-2xl">{val.Heading}</h1>
                <p
                  className={`py-1 px-5 rounded-2xl font-medium ${val.role === "Academic"
                    ? "bg-cyan-200 text-cyan-950"
                    : val.role === "Facility"
                      ? "bg-violet-200 text-violet-800"
                      : "bg-rose-200 text-pink-900"
                    }`}
                >
                  {val.role}
                </p>
              </div>
              <div className="flex items-center pt-2 text-[15px]">
                <IoCalendarClearOutline className="font-bold" />
                <p className="pl-3">
                  {val.date} · By {val.author}
                </p>
              </div>
              <p className="pt-2 text-[17px]">{val.desc}</p>
            </div>
          ))}
        </div>


        {/* pagination */}

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
    </div>
  );
};

export default Notices;