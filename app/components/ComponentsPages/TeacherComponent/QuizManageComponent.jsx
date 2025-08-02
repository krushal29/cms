import { FiBook } from "react-icons/fi";
import { Button } from '../../ui/button'
import { RiDeleteBin6Line } from "react-icons/ri";
import { LuPencilLine } from "react-icons/lu";
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
        SubjectName: "Data Science",
        QuizNumber: 1,
        QuizDate: "02/09/2025",
        TotalQuestion: 20,
        Duration: 20,
    },
    {
        id: 2,
        SubjectName: "C++ Programming",
        QuizNumber: 2,
        QuizDate: "05/09/2025",
        TotalQuestion: 25,
        Duration: 30,
    },
    {
        id: 3,
        SubjectName: "Web Development",
        QuizNumber: 3,
        QuizDate: "07/09/2025",
        TotalQuestion: 15,
        Duration: 20,
    },
    {
        id: 4,
        SubjectName: "Machine Learning",
        QuizNumber: 4,
        QuizDate: "09/09/2025",
        TotalQuestion: 30,
        Duration: 45,
    },
    {
        id: 5,
        SubjectName: "Operating Systems",
        QuizNumber: 5,
        QuizDate: "11/09/2025",
        TotalQuestion: 20,
        Duration: 25,
    },
    {
        id: 6,
        SubjectName: "Database Management",
        QuizNumber: 6,
        QuizDate: "14/09/2025",
        TotalQuestion: 20,
        Duration: 20,
    },
    {
        id: 7,
        SubjectName: "Cybersecurity Basics",
        QuizNumber: 7,
        QuizDate: "16/09/2025",
        TotalQuestion: 18,
        Duration: 30,
    },
]



const QuizManageComponent = () => {
    const [QuizData, setQuizData] = useState(data);

    // pagination
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;

    const totalPages = Math.ceil(data.length / itemsPerPage);
    const paginatedQuiz = QuizData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const OnDeleteQuiz = (id) => {
        let filterData = QuizData.filter((val) => val.id != id);
        setQuizData(filterData)
    }
    return (
        <div className="bg-background min-h-[50.8vh] flex justify-center py-10">
            <div className="w-[80%]">
                <h1 className="font-bold text-4xl text-center underline">Quiz Section</h1>


                <div className="py-15 space-y-8">
                    {paginatedQuiz.map((val, index) => (
                        <div className="flex bg-secondary py-5 rounded-2xl px-10 justify-between items-center  drop-shadow-lg shadow-ring" key={index}>
                            <div className="flex items-center">
                                <div>
                                    <FiBook className="text-4xl text-green-600" />
                                </div>
                                <div className="pl-5">
                                    <h1 className="text-[22px] font-medium">{val.SubjectName}</h1>
                                    <div className="flex pt-1.5 gap-5">
                                        <div>
                                            <p>Quiz: {val.QuizNumber}</p>
                                        </div>
                                        <div>
                                            <p>Quiz Date: {val.QuizDate}</p>
                                        </div>
                                        <div>
                                            <p>Questions: {val.TotalQuestion}</p>
                                        </div>
                                        <div>
                                            <p>Duration: {val.Duration} min</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <div>
                                    <Button className="bg-[#d4d4d8] border-1 border-black hover:bg-#d4d4d8 cursor-pointer" onClick={() => OnDeleteQuiz(val.id)}><RiDeleteBin6Line className="size-5 text-black" /></Button>
                                </div>
                                <div>
                                    <Button className="bg-[#d4d4d8] border-1 border-black hover:bg-[#d4d4d8] cursor-pointer"><LuPencilLine className="size-5 text-black" /></Button>
                                </div>
                            </div>
                        </div>

                    ))}

                    {/* pagination */}
                    <div>
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
        </div>
    )
}

export default QuizManageComponent