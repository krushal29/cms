import { BsAward } from "react-icons/bs";
import LinearProgress from '@mui/material/LinearProgress';
import { IoClose } from "react-icons/io5";

const object = [
    {
        id: 1,
        type: "Quiz",
        totalMarks: 5,
        GetMarks: 2,
    },
    {
        id: 2,
        type: "Attendace",
        totalMarks: 5,
        GetMarks: 4,
    },
    {
        id: 3,
        type: "Project",
        totalMarks: 10,
        GetMarks: 9,
    },
    {
        id: 4,
        type: "Presentation",
        totalMarks: 10,
        GetMarks: 9,
    },
    {
        id: 5,
        type: "Mid Sem",
        totalMarks: 20,
        GetMarks: 18,
    }
]


const InternalMarksDistribution = ({OnCloseViewDetails}) => {
    return (
        <div className="flex justify-center items-center h-screen ">
            <div className="border-1 border-black rounded-2xl py-10 px-12 bg-card drop-shadow-lg shadow-ring">
                <div className="flex items-center space-x-5 relative">
                    <div className="flex items-center">
                    <div><BsAward className="text-2xl" /></div>
                    <div className="pl-1">
                        <h3 className="font-bold text-2xl">Detailed Marks Distribution</h3>
                    </div>
                    </div>
                    <div>
                         <p><IoClose onClick={OnCloseViewDetails} className='cursor-pointer text-2xl absolute top-0'/></p>
                    </div>
                </div>

                <div className="pt-5">
                    {object.map((val, index) => (
                        <div className="pt-5" key={index}>
                            <p className="font-medium text-[18px]">{index+1}. {val.type}</p>
                            <div className="flex items-center">
                                <div className="w-full">
                                    <LinearProgress variant="determinate" color="inherit" value={(val.GetMarks/val.totalMarks)*100} sx={{ height: 10, borderRadius: 5 }} />
                                </div>
                                <div className="pl-2">
                                    <p className="text-[17px] font-medium">{val.GetMarks}/{val.totalMarks}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default InternalMarksDistribution