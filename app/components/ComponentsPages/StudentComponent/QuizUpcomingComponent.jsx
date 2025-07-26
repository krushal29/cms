import { useState } from 'react';
import { Button } from '../../ui/button';
import { LiaBookSolid } from "react-icons/lia";
import { useNavigate } from 'react-router';


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
]



const QuizUpcomingComponent = () => {
    const navigate=useNavigate();

    return (
        <div className='bg-background min-h-[50.8vh] flex justify-center py-10'>
            <div className="w-[80%]">
                <h1 className="font-bold text-4xl text-center underline">Quiz Section</h1>

                 <div className="py-15 space-y-8">
                    {data.map((val, index) => (
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
                                <Button className="py-5 px-7 cursor-pointer" onClick={()=>navigate('/QuizStart')}>Give Quiz</Button>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    )
}

export default QuizUpcomingComponent