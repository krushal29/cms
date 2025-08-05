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

const enrollmentNumbers = [
  '1230204050001',
  '1230204050002',
  '1230204050003',
  '1230204050004',
  '1230204050005',
  '1230204050006',
  '1230204050007',
  '1230204050008',
  '1230204050009',
  '1230204050010',
  '1230204050011',
  '1230204050012',
  '1230204050013',
  '1230204050014',
  '1230204050015',
  '1230204050016',
  '1230204050017',
  '1230204050018',
  '1230204050019',
  '1230204050020',
  '1230204050021',
  '1230204050022',
  '1230204050023',
  '1230204050024',
  '1230204050025',
  '1230204050026',
  '1230204050027',
  '1230204050028',
  '1230204050029',
  '1230204050030'
];


const ExamInternalMarksSubmitComponent = () => {
    const [Marks,setMarks]=useState({});
    const [InputMarks,setInputMarks]=useState("");


    const MarksHandle=(e,EnrollnmentNumber)=>{
        setInputMarks(e.target.value);
        console.log(e.target); 
        const {value}=e.target;
        setMarks({...Marks,[EnrollnmentNumber]:value});
    }

    console.log(Marks);


    return (
        <div className="bg-background min-h-[50.8vh] flex justify-center py-10">
            <div className="w-[80%]">
                <h1 className="font-bold text-4xl text-center underline">Examination Details</h1>
                <div className="flex mt-18 mb-10 gap-5">
                    <div className="w-1/3 border border-black rounded-[12px]">
                        <Select onValueChange={(e)=>setSelelctSem(e)}>
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
                        <Select onValueChange={(e)=>setSelectExamType(e)}>
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
                        <Select onValueChange={(e)=>setSelectBranch(e)}>
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
                        <Button className="w-full cursor-pointer px-7">Add Marks</Button>
                    </div>
                </div>


                <div className="grid grid-cols-2 gap-y-5 bg-card py-12 px-8 mb-10 rounded-2xl drop-shadow-lg shadow-ring">
                    {enrollmentNumbers.map((val, index) => (
                        <div key={index} className="flex items-center">
                            <div>
                                <p className="text-lg font-medium">{index+1}. {val} : </p>
                            </div>
                            <div className="w-[28%] pl-5">
                                <Input className="bg-white border border-black shadow-2xl outline-none focus:outline-none focus:ring-0 focus:border-black focus-visible:ring-0 hover:border-black data-[state=open]:border-black rounded-2xl h-8" name="Marks" value={InputMarks} onChange={(e)=>MarksHandle(e,val)} type="text" />
                            </div>
                            <div className="pl-2">
                                <p className="text-lg font-medium">/20</p>
                            </div>
                        </div>
                    ))}
                    <div className="pt-5">
                        <Button className="cursor-pointer text-[17px] py-5 px-10">Submit</Button>
                    </div>
                </div>

                
            </div>
        </div>
    )
}

export default ExamInternalMarksSubmitComponent