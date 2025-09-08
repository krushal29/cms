import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../../ui/select"
import { Input } from '../../ui/input'
import { Button } from '../../ui/button'
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

const enrollmentNumbers = [
    '1230204050001', '1230204050002', '1230204050003', '1230204050004', '1230204050005',
    '1230204050006', '1230204050007', '1230204050008', '1230204050009', '1230204050010',
    '1230204050011', '1230204050012', '1230204050013', '1230204050014', '1230204050015',
    '1230204050016', '1230204050017', '1230204050018', '1230204050019', '1230204050020',
    '1230204050021', '1230204050022', '1230204050023', '1230204050024', '1230204050025',
    '1230204050026', '1230204050027', '1230204050028', '1230204050029', '1230204050030',
    '1230204050031', '1230204050032', '1230204050033', '1230204050034', '1230204050035',
    '1230204050036', '1230204050037', '1230204050038', '1230204050039', '1230204050040',
    '1230204050041', '1230204050042', '1230204050043', '1230204050044', '1230204050045',
    '1230204050046', '1230204050047', '1230204050048', '1230204050049', '1230204050050',
    '1230204050051', '1230204050052', '1230204050053', '1230204050054', '1230204050055',
    '1230204050056', '1230204050057', '1230204050058', '1230204050059', '1230204050060',
    '1230204050061', '1230204050062', '1230204050063', '1230204050064', '1230204050065',
    '1230204050066', '1230204050067', '1230204050068', '1230204050069', '1230204050070',
    '1230204050071', '1230204050072', '1230204050073', '1230204050074', '1230204050075',
    '1230204050076', '1230204050077', '1230204050078', '1230204050079', '1230204050080',
    '1230204050081', '1230204050082', '1230204050083', '1230204050084', '1230204050085',
    '1230204050086', '1230204050087', '1230204050088', '1230204050089', '1230204050090',
];



const ExamInternalMarksSubmitComponent = () => {
    const [Marks, setMarks] = useState({});
    const [filterData,setFilterData]=useState({
        sem:'',
        ExamType:'',
        selectBranch:''
    })
    const [InputMarks, setInputMarks] = useState({});

    // Filter Data
    const onselectHandle=(e)=>{
        const {name,value}=e;
        console.log(name,value);
        setFilterData({...filterData,[name]:value})
    }
    console.log(filterData);



    const GetEnrollnmentDetails=()=>{
        try{

        }catch(e){
            console.log(e);
        }
    }

    
    const MarksHandle = (e) => {
        const {name,value}=e.target;
        setInputMarks({...InputMarks,[name]:value});
    }

    console.log(InputMarks);



    // Decide number of columns (example: 4)
    const columns = 3;
    const rowsPerColumn = Math.ceil(enrollmentNumbers.length / columns);

    // Split enrollmentNumbers evenly across columns
    const splitColumns = Array.from({ length: columns }, (_, colIndex) =>
        enrollmentNumbers.slice(colIndex * rowsPerColumn, (colIndex + 1) * rowsPerColumn)
    );



    return (
        <div className="bg-background min-h-[50.8vh] flex justify-center py-10">
            <div className="w-[80%]">
                <h1 className="font-bold text-4xl text-center underline">Examination Details</h1>
                <div className="flex mt-18 mb-10 gap-5">
                    <div className="w-1/3 border border-black rounded-[12px]">
                        <Select onValueChange={(e) => onselectHandle({name:'sem',value:e})} required>
                            <SelectTrigger className="w-full bg-secondary ">
                                <SelectValue placeholder="Select Sem" />
                            </SelectTrigger>
                            <SelectContent className="bg-secondary">
                                <SelectItem value="1">1</SelectItem>
                                <SelectItem value="2">2</SelectItem>
                                <SelectItem value="3">3</SelectItem>
                                <SelectItem value="3">4</SelectItem>
                                <SelectItem value="3">5</SelectItem>
                                <SelectItem value="3">6</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="w-1/3 border border-black rounded-[12px]">
                        <Select onValueChange={(e) => onselectHandle({name:'ExamType',value:e})} required>
                            <SelectTrigger className="w-full bg-secondary">
                                <SelectValue placeholder="Select Exam Type" />
                            </SelectTrigger>
                            <SelectContent className="bg-secondary">
                                <SelectItem value="Internal">Internal</SelectItem>
                                <SelectItem value="MidSem">Mid sem</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="w-1/3 border border-black rounded-[12px]">
                        <Select onValueChange={(e) => onselectHandle({name:'selectBranch',value:e})} required>
                            <SelectTrigger className="w-full bg-secondary">
                                <SelectValue placeholder="Select Branch" />
                            </SelectTrigger>
                            <SelectContent className="bg-secondary">
                                <SelectItem value="ComputerEngineering">Computer Engineering</SelectItem>
                                <SelectItem value="InformationTechnology">Information Technology</SelectItem>
                                <SelectItem value="ElectricalEngineering">Electrical Engineering</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="w-1/6">
                        <Button className="w-full cursor-pointer px-7" onClick={GetEnrollnmentDetails}>Add Marks</Button>
                    </div>
                </div>


                {/* All Details */}
                <div className="grid gap-x-12 py-10 bg-card px-10 rounded-2xl drop-shadow-lg shadow-ring border border-black" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
                    {
                        splitColumns.map((col, colIndex) => (
                            <div key={colIndex} className="flex flex-col gap-y-4">
                                {col.map((val, index) => {
                                    const number = colIndex * rowsPerColumn + index + 1;
                                    return (
                                        <table key={index} className="flex items-center">
                                            <div>
                                                <p className="text-lg font-medium">{number}. {val} : </p>
                                            </div>
                                            <div className="w-[28%] pl-5">
                                                <Input className="bg-white border border-black shadow-2xl outline-none focus:outline-none focus:ring-0 focus:border-black focus-visible:ring-0 hover:border-black data-[state=open]:border-black rounded-2xl h-7.5" name={val} value={InputMarks[val]?InputMarks[val]:''} onChange={MarksHandle} type="number"/>
                                            </div>
                                            <div className="pl-2">
                                                <p className="text-lg font-medium">/20</p>
                                            </div>
                                        </table>
                                    )
                                })}
                            </div>
                        ))
                    }

                    <div className="w-full mt-10">
                        <Button className="w-[50%] cursor-pointer px-7">Submit</Button>
                    </div>
                </div>


            </div>

             <ToastContainer />
        </div>
    )
}

export default ExamInternalMarksSubmitComponent