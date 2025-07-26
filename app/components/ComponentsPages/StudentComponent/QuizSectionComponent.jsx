import { IoMdCheckmark } from "react-icons/io";
import { Button } from '../../ui/button'
import { useNavigate } from "react-router";

const QuizDetails={
    QuizNumber:10,
    QuizName:"DBMS",
    QuizInstruction:["This quiz contains multiple-choice questions about dbms.","Each question has only one correct answer.","You can navigate between questions using the Previous and Next buttons.","Your progress will be saved automatically as you answer questions.","Submit your quiz when you have answered all questions."]
}


const QuizSectionComponent = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-background flex justify-center">
            <div className="w-[85%] text-center py-13">
                <h1 className="text-4xl font-bold underline pb-5">Quiz Section</h1>

                <div className="bg-white pb-5 rounded-2xl my-5">

                    <div className="bg-black rounded-tl-2xl rounded-tr-2xl ">
                        <h2 className="text-white font-bold text-2xl py-4">Quiz -{QuizDetails.QuizNumber} </h2>
                    </div>


                    <div className="mt-8 w-[75%] mx-auto">
                        <h3 className="text-[25px] font-semibold">{QuizDetails.QuizName} Quiz Instructions</h3>

                        <div className="items-center pl-5 space-x-4 bg-cyan-50 inline-flex border border-sky-900 rounded-2xl py-3 mt-10 w-full">
                            <div>
                                <IoMdCheckmark className="text-[20px]" />
                            </div>
                            <div>
                                <p className="font-medium text-[18px]">Please read all instructions before beginning the quiz.</p>
                            </div>
                        </div>

                        <div className="border border-indigo-700 bg-indigo-50 mx-auto my-10 py-5 rounded-2xl px-15">
                            <h3 className="font-medium text-[22px] underline">Quiz Instructions</h3>
                            <div className="pt-5 flex justify-between">
                                <ul className="space-y-5 text-start">
                                    {QuizDetails.QuizInstruction.map((val,index)=>(
                                     <li className="font-medium list-disc text-[18px]">{val}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-10">
                                <Button className="px-10 py-5 text-[17px] cursor-pointer" onClick={() => navigate('/QuestionStart')}>Begin</Button>
                            </div>
                        </div>
                    </div>





                </div>
            </div>
        </div>
    )
}

export default QuizSectionComponent