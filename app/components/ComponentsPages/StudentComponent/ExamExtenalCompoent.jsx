import { CgNotes } from "react-icons/cg";
import { Button } from '../../ui/button'
import { MdOutlineFileDownload } from "react-icons/md";

const ExamExtenalCompoent = () => {
    return (
        <div className="bg-background min-h-[50.8vh] flex justify-center py-15">
            <div className="w-[80%]">
                <h1 className="font-bold text-4xl text-center underline">Examination Details</h1>


                <div className="py-15 space-y-8">
                    {[0, 1, 2, 3, 4].map((val, index) => (
                        <div className="flex bg-secondary py-5 rounded-2xl px-10 justify-between items-center  drop-shadow-lg shadow-ring">
                            <div className="flex items-center">
                                <div>
                                    <CgNotes className="text-3xl text-green-600" />
                                </div>
                                <div className="pl-5">
                                    <h1 className="text-[20px] font-medium">Semester 1</h1>
                                    <p className="">Exam Date : May 2024</p>
                                </div>
                            </div>

                            <div>
                                <Button className="py-5 px-7 cursor-pointer"><span className="pr-3"><MdOutlineFileDownload /></span> <span>Download</span></Button>
                            </div>
                        </div>

                    ))}


                </div>


                
            </div>
        </div>
    )
}

export default ExamExtenalCompoent