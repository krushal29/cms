import { useEffect, useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../../ui/table"
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '../../ui/pagination';
import { Button } from '../../ui/button'
import CertificatePopup from "./popupComponent/CertificatePopup";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../../ui/select"
import { Input } from "../../ui/input";


const data = [
    {
        enrollment: "12302040501001",
        name: "Aarav Sharma",
        from: "2025-08-01",
        to: "2025-08-03",
        days: 3,
        reason: "Fever",
        certificate: "certificate20.pdf",
        status: "Pending"
    },
    {
        enrollment: "12302040501002",
        name: "Isha Patel",
        from: "2025-08-05",
        to: "2025-08-07",
        days: 3,
        reason: "Family Function",
        certificate: "certificate20.pdf",
        status: "Approved"
    },
    {
        enrollment: "12302040501003",
        name: "Karan Mehta",
        from: "2025-08-02",
        to: "2025-08-04",
        days: 3,
        reason: "Medical Checkup",
        certificate: "certificate20.pdf",
        status: "Rejected"
    },
    {
        enrollment: "12302040501004",
        name: "Riya Desai",
        from: "2025-08-10",
        to: "2025-08-12",
        days: 3,
        reason: "Travel",
        certificate: "certificate20.pdf",
        status: "Approved"
    },
    {
        enrollment: "12302040501005",
        name: "Arjun Singh",
        from: "2025-08-08",
        to: "2025-08-09",
        days: 2,
        reason: "Wedding",
        certificate: "certificate20.pdf",
        status: "Pending"
    },
    {
        enrollment: "12302040501006",
        name: "Neha Gupta",
        from: "2025-08-15",
        to: "2025-08-18",
        days: 4,
        reason: "Illness",
        certificate: "certificate20.pdf",
        status: "Rejected"
    },
    {
        enrollment: "12302040501007",
        name: "Vivek Joshi",
        from: "2025-08-04",
        to: "2025-08-05",
        days: 2,
        reason: "Festival",
        certificate: "certificate20.pdf",
        status: "Approved"
    },
    {
        enrollment: "12302040501008",
        name: "Simran Kaur",
        from: "2025-08-12",
        to: "2025-08-13",
        days: 2,
        reason: "Personal Work",
        certificate: "certificate20.pdf",
        status: "Pending"
    },
    {
        enrollment: "12302040501009",
        name: "Rohan Verma",
        from: "2025-08-09",
        to: "2025-08-11",
        days: 3,
        reason: "Medical",
        certificate: "certificate20.pdf",
        status: "Approved"
    },
    {
        enrollment: "12302040501010",
        name: "Ananya Rao",
        from: "2025-08-06",
        to: "2025-08-07",
        days: 2,
        reason: "Sports Event",
        certificate: "certificate20.pdf",
        status: "Rejected"
    },
    {
        enrollment: "12302040501011",
        name: "Harsh Shah",
        from: "2025-08-14",
        to: "2025-08-16",
        days: 3,
        reason: "Travel",
        certificate: "certificate20.pdf",
        status: "Pending"
    },
    {
        enrollment: "12302040501012",
        name: "Priya Nair",
        from: "2025-08-18",
        to: "2025-08-20",
        days: 3,
        reason: "Exam Prep",
        certificate: "certificate20.pdf",
        status: "Approved"
    },
    {
        enrollment: "12302040501013",
        name: "Rahul Yadav",
        from: "2025-08-03",
        to: "2025-08-04",
        days: 2,
        reason: "Family Work",
        certificate: "certificate20.pdf",
        status: "Rejected"
    },
    {
        enrollment: "12302040501014",
        name: "Sneha Iyer",
        from: "2025-08-11",
        to: "2025-08-13",
        days: 3,
        reason: "Hospital",
        certificate: "certificate20.pdf",
        status: "Pending"
    },
    {
        enrollment: "12302040501015",
        name: "Manav Jain",
        from: "2025-08-07",
        to: "2025-08-08",
        days: 2,
        reason: "Travel",
        certificate: "certificate20.pdf",
        status: "Approved"
    },
    {
        enrollment: "12302040501016",
        name: "Kritika Malhotra",
        from: "2025-08-01",
        to: "2025-08-02",
        days: 2,
        reason: "Marriage Function",
        certificate: "certificate20.pdf",
        status: "Rejected"
    },
    {
        enrollment: "12302040501017",
        name: "Amit Kumar",
        from: "2025-08-20",
        to: "2025-08-21",
        days: 2,
        reason: "Medical",
        certificate: "certificate20.pdf",
        status: "Pending"
    },
    {
        enrollment: "12302040501018",
        name: "Pooja Reddy",
        from: "2025-08-16",
        to: "2025-08-17",
        days: 2,
        reason: "Festival",
        certificate: "certificate20.pdf",
        status: "Approved"
    },
    {
        enrollment: "12302040501019",
        name: "Sahil Khan",
        from: "2025-08-13",
        to: "2025-08-14",
        days: 2,
        reason: "Family Emergency",
        certificate: "certificate20.pdf",
        status: "Rejected"
    },
    {
        enrollment: "12302040501020",
        name: "Meera Joshi",
        from: "2025-08-19",
        to: "2025-08-22",
        days: 4,
        reason: "Medical Rest",
        certificate: "certificate20.pdf",
        status: "Approved"
    }
];



const Branch = ["Computer Engineering", "Electronics and Communication", "Mechanical Engineering", "Information Technology", "Electrical Engineering"];





const ApproveLeaveComponent = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [Data, setdata] = useState(data);
    const [showPdf, setShowpdf] = useState(false);
    const [certificate, setCertificate] = useState('');
    const itemsPerPage = 10;


    const totalPages = Math.ceil(Data.length / itemsPerPage);
    const paginatedQuiz = Data.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const viewCertificate = (certificate) => {
        setShowpdf(true);
        setCertificate(certificate);
    }

    const updateStatus = (e, enrollment) => {
        // const updateData = Data.map((data) =>data.enrollment===enrollment?{...data,status:e}:data);
        // setdata(updateData);


        const updateData = Data.filter((data) => {
            if (data.enrollment == enrollment) {
                data.status = e;
                
            }
            return true;
        })
        setdata([...updateData])

    }
    console.log("data",Data);

    const onCloseEvent = () => {
        setShowpdf(false);
    }

    return (
        <div className='bg-background min-h-[50.8vh] flex justify-center py-12'>
            <div className='w-[80%]'>
                <h1 className="font-bold text-4xl text-center underline">Approve Leave</h1>


               {/* filter */}
                <div className="flex items-center  gap-7 mt-8 w-[75%] ">
                    <div className="w-1/3">
                        <Select>
                            <SelectTrigger style={{ border: "1px solid black" }} className="w-full bg-white mt-3 border border-black shadow-none outline-none focus:outline-none focus:ring-0 focus:border-black focus-visible:ring-0 hover:border-black data-[state=open]:border-black">
                                <SelectValue placeholder="Select Sem" />
                            </SelectTrigger>
                            <SelectContent className="bg-secondary">
                                <SelectItem value="1">Sem 1</SelectItem>
                                <SelectItem value="2">Sem 2</SelectItem>
                                <SelectItem value="3">Sem 3</SelectItem>
                                <SelectItem value="4">Sem 4</SelectItem>
                                <SelectItem value="5">Sem 5</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="w-1/3">
                        <Select>
                            <SelectTrigger style={{ border: "1px solid black" }} className="w-full bg-white mt-3 border border-black shadow-none outline-none focus:outline-none focus:ring-0 focus:border-black focus-visible:ring-0 hover:border-black data-[state=open]:border-black">
                                <SelectValue placeholder="Select Branch" />
                            </SelectTrigger>
                            <SelectContent className="bg-secondary" name="ExamType" >
                                {Branch.map((val, index) => {
                                    return (
                                        <SelectItem key={index} value={val}>{val}</SelectItem>
                                    )
                                })}
                            </SelectContent>
                        </Select>
                    </div>

                    <div className={`w-1/3`}>
                        <Input className="border border-black shadow-none outline-none focus:outline-none focus:ring-0 focus:border-black focus-visible:ring-0 hover:border-black data-[state=open]:border-black w-full bg-white mt-3" placeholder="Enter Enrollment Number" />
                    </div>
                </div>
                {/* End of Filter */}






                <div className="py-15 drop-shadow-lg shadow-ring">
                    <Table className="bg-white rounded-[7px]">
                        <TableHeader>
                            <TableRow className="border-b border-black">
                                <TableHead className="font-bold text-[17px]">Enrollment No.</TableHead>
                                <TableHead className="font-bold text-[17px]">Name</TableHead>
                                <TableHead className="font-bold text-[17px]">From Date</TableHead>
                                <TableHead className="font-bold text-[17px] pl-10">To Date</TableHead>
                                <TableHead className="font-bold text-[17px]">Number of Days</TableHead>
                                <TableHead className="font-bold text-[17px]">Reason</TableHead>
                                <TableHead className="font-bold text-[17px]">View Certificate</TableHead>
                                <TableHead className="font-bold text-[17px] w-1/9 text-center">Approve</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {paginatedQuiz?.map((val, index) => (
                                <TableRow key={index}>
                                    <TableCell className="py-3 font-semibold text-[15px]">{val.enrollment}</TableCell>
                                    <TableCell className="font-semibold text-[15px]">{val.name}</TableCell>
                                    <TableCell className="font-semibold text-[15px]">{val.from}</TableCell>
                                    <TableCell className="font-semibold text-[15px] pl-10">{val.to}</TableCell>
                                    <TableCell className="font-semibold text-[15px] text-center">{val.days}</TableCell>
                                    <TableCell className="font-semibold text-[15px]">{val.reason}</TableCell>
                                    <TableCell className="font-semibold"><Button className="bg-transparent py-0 px-10 text-black hover:bg-transparent border-none shadow-none cursor-pointer text-[18px] underline" onClick={() => viewCertificate(val.certificate)}>view</Button></TableCell>
                                    <TableCell className="font-semibold text-[15px] pl-10">
                                        {val.status === "Approved" && <p className="bg-green-100 text-green-800 text-center py-1 rounded-full px-4 shadow-sm border-green-300">Approved</p>
                                        }

                                        {val.status === "Rejected" && <p className="bg-red-100 text-red-800 text-center py-1 rounded-full px-4 shadow-sm border-red-300">Rejected</p>
                                        }

                                        {val.status === "Pending" && <Select onValueChange={(e) => updateStatus(e, val.enrollment)}>
                                            <SelectTrigger className="w-full bg-secondary rounded-full shadow-2xl" >
                                                <SelectValue placeholder="Pending" />
                                            </SelectTrigger>
                                            <SelectContent className="bg-white shadow-lg rounded-xl ">
                                                <SelectItem value="Approved">Approved</SelectItem>
                                                <SelectItem value="Rejected">Rejected</SelectItem>
                                                <SelectItem value="Pending">Pending</SelectItem>
                                            </SelectContent>
                                        </Select>}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>


                {/* pagination */}
                <Pagination className="mb-10 flex justify-center">
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
                                            ? 'bg-primary text-primary-foreground border-primary shadow-2xl'
                                            : 'bg-background text-foreground border-border hover:bg-muted text-[17px]'
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

            {showPdf && <div className="inset-0 fixed backdrop-blur-[1px]" ><CertificatePopup onCloseEvent={onCloseEvent} certificate={certificate} /></div>}


        </div>
    )
}

export default ApproveLeaveComponent