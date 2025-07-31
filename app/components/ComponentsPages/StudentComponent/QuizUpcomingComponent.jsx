import { Button } from '../../ui/button';
import { LiaBookSolid } from "react-icons/lia";
import { useNavigate } from 'react-router';
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "../../ui/pagination";
import { useState } from 'react';



const data = [
    {
        id: 1,
        CourseName: "Data Structure",
        Date: "2/9/2025",
        Quiz: 1
    },
    {
        id: 2,
        CourseName: "DBMS",
        Date: "2/10/2025",
        Quiz: 2
    },
    {
        id: 3,
        CourseName: "Operating System",
        Date: "2/11/2025",
        Quiz: 3
    },
    {
        id: 4,
        CourseName: "Computer Networks",
        Date: "3/9/2025",
        Quiz: 4
    },
    {
        id: 5,
        CourseName: "Software Engineering",
        Date: "4/9/2025",
        Quiz: 5
    },
    {
        id: 6,
        CourseName: "Machine Learning",
        Date: "5/9/2025",
        Quiz: 6
    },
    {
        id: 7,
        CourseName: "Artificial Intelligence",
        Date: "6/9/2025",
        Quiz: 7
    },
    {
        id: 8,
        CourseName: "Compiler Design",
        Date: "7/9/2025",
        Quiz: 8
    },
    {
        id: 9,
        CourseName: "Cloud Computing",
        Date: "8/9/2025",
        Quiz: 9
    },
    {
        id: 10,
        CourseName: "Cyber Security",
        Date: "9/9/2025",
        Quiz: 10
    }
];




const QuizUpcomingComponent = () => {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const totalPages = Math.ceil(data.length / itemsPerPage);
    const paginatedQuiz = data.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    )

    return (
        <div className='bg-background min-h-[50.8vh] flex justify-center py-12'>
            <div className="w-[80%]">
                <h1 className="font-bold text-4xl text-center underline">Quiz Section</h1>

                <div className="pt-13 space-y-8">
                    {paginatedQuiz.map((val, index) => (
                        <div key={index} className="flex bg-secondary py-5 rounded-2xl px-10 justify-between items-center  drop-shadow-lg shadow-ring">
                            <div className="flex items-center">
                                <div>
                                    <LiaBookSolid className="text-4xl text-green-600" />
                                </div>
                                <div className="pl-5">
                                    <h1 className="text-[20px] font-medium">{val.CourseName}</h1>
                                    <p className="">Quiz Date : {val.Date}</p>
                                    <p>(Quiz -{val.Quiz})</p>
                                </div>
                            </div>

                            <div>
                                <Button className="py-5 px-7 cursor-pointer" onClick={() => navigate('/QuizStart')}>Give Quiz</Button>
                            </div>
                        </div>

                    ))}
                </div>

                

                {/* pagination */}
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
    )
}

export default QuizUpcomingComponent