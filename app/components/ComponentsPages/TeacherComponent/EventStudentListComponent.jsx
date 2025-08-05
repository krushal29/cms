import {Label} from '../../ui/label'
import {Input} from '../../ui/input'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../../ui/pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table"
import { useEffect, useState } from 'react';



const data = [
  { id: 1, enrollment: "22051010001", name: "Krushal Bhadiyadra", branch: "Computer Engineering", sem: 5, date: "2025-08-04", eventName: "AI Workshop" },
  { id: 2, enrollment: "22051010002", name: "Aayush Patel", branch: "Computer Engineering", sem: 5, date: "2025-08-04", eventName: "AI Workshop" },
  { id: 3, enrollment: "22051010003", name: "Het Thummar", branch: "Computer Engineering", sem: 5, date: "2025-08-04", eventName: "AI Workshop" },
  { id: 4, enrollment: "22051010004", name: "Riya Soni", branch: "Computer Engineering", sem: 5, date: "2025-08-04", eventName: "AI Workshop" },
  { id: 5, enrollment: "22051010005", name: "Devansh Trivedi", branch: "Computer Engineering", sem: 5, date: "2025-08-04", eventName: "AI Workshop" },
  { id: 6, enrollment: "22051010006", name: "Ishita Mehta", branch: "Computer Engineering", sem: 5, date: "2025-08-04", eventName: "AI Workshop" },
  { id: 7, enrollment: "22051010007", name: "Yash Solanki", branch: "Computer Engineering", sem: 5, date: "2025-08-04", eventName: "AI Workshop" },
  { id: 8, enrollment: "22051010008", name: "Parth Vyas", branch: "Computer Engineering", sem: 5, date: "2025-08-04", eventName: "AI Workshop" },
  { id: 9, enrollment: "22051010009", name: "Nidhi Chauhan", branch: "Computer Engineering", sem: 5, date: "2025-08-04", eventName: "AI Workshop" },
  { id: 10, enrollment: "22051010010", name: "Rohan Desai", branch: "Computer Engineering", sem: 5, date: "2025-08-04", eventName: "AI Workshop" },
  { id: 11, enrollment: "22051010011", name: "Bhumi Shah", branch: "Computer Engineering", sem: 5, date: "2025-08-04", eventName: "AI Workshop" },
  { id: 12, enrollment: "22051010012", name: "Vishal Parmar", branch: "Computer Engineering", sem: 5, date: "2025-08-04", eventName: "AI Workshop" },
  { id: 13, enrollment: "22051010013", name: "Mansi Joshi", branch: "Computer Engineering", sem: 5, date: "2025-08-04", eventName: "AI Workshop" },
  { id: 14, enrollment: "22051010014", name: "Jay Suthar", branch: "Computer Engineering", sem: 5, date: "2025-08-04", eventName: "AI Workshop" },
  { id: 15, enrollment: "22051010015", name: "Pooja Gohil", branch: "Computer Engineering", sem: 5, date: "2025-08-04", eventName: "AI" },
  { id: 16, enrollment: "22051010016", name: "Ankit Rana", branch: "Computer Engineering", sem: 5, date: "2025-08-04", eventName: "AI Workshop" },
  { id: 17, enrollment: "22051010017", name: "Sneha Patel", branch: "Computer Engineering", sem: 5, date: "2025-08-04", eventName: "AI Workshop" },
  { id: 18, enrollment: "22051010018", name: "Harsh Vora", branch: "Computer Engineering", sem: 5, date: "2025-08-04", eventName: "AI Workshop" },
  { id: 19, enrollment: "22051010019", name: "Khushi Shah", branch: "Computer Engineering", sem: 5, date: "2025-08-04", eventName: "AI Workshop" },
  { id: 20, enrollment: "22051010020", name: "Smit Dave", branch: "Computer Engineering", sem: 5, date: "2025-08-04", eventName: "Ai" }
];


const EventStudentListComponent = () => {

  const [Data,setData]=useState(data);
   // pagination
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
  
    const totalPages = Math.ceil(Data.length / itemsPerPage);
    const paginatedMaterial = Data.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );

    const [EventName,setEventName]=useState("")
    const [eventDate,setEventDate]=useState("");
    console.log(EventName,eventDate);


    useEffect(()=>{
      if(EventName!=""&&eventDate!=""){
        const filterData=Data.filter((val)=>val.eventName.includes(EventName)&&val.date==eventDate)
        console.log(filterData);
        setData(filterData);
      }
    },[EventName,eventDate])
  return (
    <div className="bg-background min-h-[50.8vh] flex justify-center py-10">
        <div className="w-[80%]">
            <h1 className="font-bold text-4xl text-center underline">Events</h1>

            {/* filter */}
            <div className="pt-15 flex gap-5 w-full items-center">
                <div className='w-1/4'>
                    <Label className='text-[16px]'>Event  Event Name</Label>
                    <Input type='text' name='Eventname' className='bg-primary-foreground mt-2 border border-black shadow-2xl' onChange={(e)=>setEventName(e.target.value)} value={EventName}/>
                </div>
                <div className='w-1/4'>
                    <Label className='text-[16px]'>Select Date</Label>
                    <input type="date" className='bg-primary-foreground border border-black w-full py-1 mt-2 shadow-2xl rounded-[8px] px-2' onChange={(e)=>setEventDate(e.target.value)} value={eventDate} name='eventDate'/>
                </div>
            </div>

            {/* table Data */}
            <div className="py-10 drop-shadow-lg shadow-ring">
          <Table className="bg-white rounded-[7px]">
            <TableHeader>
              <TableRow className="border-b border-black">
                <TableHead className="font-bold text-[17px] py-3">Sr. No</TableHead>
                <TableHead className="font-bold text-[17px]">Enrollment</TableHead>
                <TableHead className="font-bold text-[17px]">Name</TableHead>
                <TableHead className="font-bold text-[17px]">Branch</TableHead>
                <TableHead className="font-bold text-[17px]" >Sem</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedMaterial.map((val, index) => (
                <TableRow key={index}>
                  <TableCell className="py-3 font-semibold">{val.id}</TableCell>
                  <TableCell className="font-semibold">{val.enrollment} </TableCell>
                  <TableCell className="font-semibold">{val.name}</TableCell>
                  <TableCell className="font-semibold">{val.branch}</TableCell>
                  <TableCell className="font-semibold">{val.sem}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>


          {/* pagination */}
          <Pagination className="mt-8 flex justify-center">
            <PaginationContent>

              {/* Previous */}
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage > 1) setCurrentPage(currentPage - 1);
                  }}
                  className="transition-all duration-200 text-foreground hover:bg-mutedborder border-border rounded-md px-3 py-2 text-[17px]"
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
                  className="transition-all duration-200 text-foreground hover:bg-muted border border- rounded-md px-3 py-2 text-[17px]"
                />
              </PaginationItem>

            </PaginationContent>
          </Pagination>
        </div>
        </div>
    </div>
  )
}

export default EventStudentListComponent