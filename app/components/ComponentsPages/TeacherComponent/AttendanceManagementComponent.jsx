import { useState } from "react";
import { Button } from "../../ui/button";
import { Label } from '../../ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select"
import { RadioGroup, RadioGroupItem } from "../../ui/radio-group"
import { Checkbox } from "../../ui/checkbox"



const AttendanceData = [
  { id: 1, Enrollment: '12302040501001', Name: 'Krushal Patel' },
  { id: 2, Enrollment: '12302040501002', Name: 'dhanvi' },
  { id: 3, Enrollment: '12302040501003', Name: 'Ravi Mehta' },
  { id: 4, Enrollment: '12302040501004', Name: 'Sneha Verma' },
  { id: 5, Enrollment: '12302040501005', Name: 'Jay Shah' },
  { id: 6, Enrollment: '12302040501006', Name: 'Ritika Gupta' },
  { id: 7, Enrollment: '12302040501007', Name: 'Anil Yadav' },
  { id: 8, Enrollment: '12302040501008', Name: 'Priya Desai' },
  { id: 9, Enrollment: '12302040501009', Name: 'Vikram Chauhan' },
  { id: 10, Enrollment: '12302040501010', Name: 'Divya Rathi' },
  { id: 11, Enrollment: '12302040501011', Name: 'Nikhil Bansal' },
  { id: 12, Enrollment: '12302040501012', Name: 'Pooja Goyal' },
  { id: 13, Enrollment: '12302040501013', Name: 'Arjun Sinha' },
  { id: 14, Enrollment: '12302040501014', Name: 'Meera Trivedi' },
  { id: 15, Enrollment: '12302040501015', Name: 'Yash Thakkar' },
  { id: 16, Enrollment: '12302040501016', Name: 'Ishita Vyas' },
  { id: 17, Enrollment: '12302040501017', Name: 'Aman Deshmukh' },
  { id: 18, Enrollment: '12302040501018', Name: 'Kavya Joshi' },
  { id: 19, Enrollment: '12302040501019', Name: 'Neel Rana' },
  { id: 20, Enrollment: '12302040501020', Name: 'Tanvi Sharma' },
  { id: 21, Enrollment: '12302040501021', Name: 'Manan Shah' },
  { id: 22, Enrollment: '12302040501022', Name: 'Rhea Chakraborty' },
  { id: 23, Enrollment: '12302040501023', Name: 'Dhruv Khanna' },
  { id: 24, Enrollment: '12302040501024', Name: 'Simran Kaur' },
  { id: 25, Enrollment: '12302040501025', Name: 'Rohan Nair' },
  { id: 26, Enrollment: '12302040501026', Name: 'Shruti Patel' },
  { id: 27, Enrollment: '12302040501027', Name: 'Harshil Dave' },
  { id: 28, Enrollment: '12302040501028', Name: 'Tanya Modi' },
  { id: 29, Enrollment: '12302040501029', Name: 'Aditya Iyer' },
  { id: 30, Enrollment: '12302040501030', Name: 'Bhavya Singh' }
];

const subjects = [
  { label: "Mathematics", value: "mathematics" },
  { label: "Physics", value: "physics" },
  { label: "Chemistry", value: "chemistry" },
  { label: "Biology", value: "biology" },
  { label: "Computer Science", value: "computer_science" },
  { label: "English", value: "english" },
  { label: "History", value: "history" },
  { label: "Geography", value: "geography" },
  { label: "Economics", value: "economics" }
];


const branches = [
  { label: "Computer Science", value: "cs" },
  { label: "Information Technology", value: "it" },
  { label: "Electronics & Communication", value: "ec" },
  { label: "Electrical Engineering", value: "ee" },
  { label: "Mechanical Engineering", value: "me" },
  { label: "Civil Engineering", value: "ce" },
  { label: "Artificial Intelligence", value: "ai" },
  { label: "Data Science", value: "ds" }
];



const AttendanceManagementComponent = () => {
  const [selectDate, setSelectDate] = useState("");
  const [selectSubject, setSelectSubject] = useState("");
  const [selectBranch, setSelectBranch] = useState("");


  const [selectAll, setSelectAll] = useState(false);
  const [AttendanceData1, setAttendanceData] = useState([])


  const onChangeHandle = (e, Enrollment, index) => {
    console.log(e, Enrollment, index);
    if (e) {
      console.log("turedadd");
      const updated = [...AttendanceData1, {
        Enrollment: Enrollment,
        Attendance: "present"
      }];
      console.log(updated);
      setAttendanceData(updated)
    } else {
      const updated = [...AttendanceData1];
      updated[index]["Attendance"] = "absent";
      setAttendanceData(updated);
    }
  }

  console.log(AttendanceData1);

  const onSelectHandle=(e)=>{
    setSelectAll(!selectAll);
    
    if(selectAll){
      
    }else{

    }
  }


  console.log("select" + selectAll);
  const onSumbitHandle = () => {
    try {
      console.log("Submit");
    } catch (e) {
      console.log(e);
    }
  }


  // console.log(selectBranch + selectDate + selectBranch, selectSubject);
  return (
    <div className="bg-background min-h-screen flex justify-center py-10">
      <div className="w-[80%]">
        <h1 className="font-bold text-4xl text-center underline">Attendance Management</h1>


        {/* filter Data */}
        <div className='bg-secondary grid grid-cols-3 gap-3 py-5 px-5 mt-10 rounded-2xl border border-black'>
          {/* Select Subject */}
          <div className="space-y-2">
            <Label className="text-base">Select Subject</Label>
            <Select onValueChange={(e) => setSelectSubject(e)}>
              <SelectTrigger className="w-full bg-secondary shadow-2xl" style={{ border: '1px solid black' }}>
                <SelectValue placeholder="Choose Subject" />
              </SelectTrigger>
              <SelectContent className="bg-secondary">
                {subjects.map((val, index) => (
                  <SelectItem value={val.label} key={index}>{val.value}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* select Branch */}
          <div className="space-y-2">
            <Label className="text-base">Select Branch</Label>
            <Select onValueChange={(e) => setSelectBranch(e)}>
              <SelectTrigger className="w-full bg-secondary shadow-2xl" style={{ border: '1px solid black' }}>
                <SelectValue placeholder="Choose Branch" />
              </SelectTrigger>
              <SelectContent className="bg-secondary">
                {branches.map((val, index) => (
                  <SelectItem value={val.label} key={index}>{val.value}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Select Date */}
          <div className="space-y-2">
            <Label className="text-base">Select Date</Label>
            <input
              type="date"
              className="w-full pl-3 pr-4 py-1.5 bg-secondary border border-black shadow-2xl rounded-md text-right placeholder:text-left"
              placeholder="Select date"
              name="date"
              value={selectDate}
              onChange={(e) => setSelectDate(e.target.value)}
            />
          </div>
        </div>




        {/* Attendance Details */}
        <div className="border border-black rounded-2xl drop-shadow-lg shadow-ring my-15 bg-secondary  py-4 pb-10 px-12">
          {/* select all */}
          <div className="flex">
            {/* <RadioGroup className="flex pt-1 gap-3" onValueChange={(v)=>setSelectAll(v=='selectAll')} value={selectAll?'selectAll':'none'}>
              <div className="flex items-center space-x-2 text-[15px]">
                <RadioGroupItem className="border-black bg-background" value="selectAll"/><span className="font-medium text-xl pr-2">Select All</span>
              </div>
            </RadioGroup> */}
            <div className="flex items-center">
              <div>
                <Checkbox className="border border-black cursor-pointer" checked={selectAll?true:false} onCheckedChange={onSelectHandle}/>
              </div>
              <div>
                <span className="font-medium text-xl pr-2 pl-2">All Select</span>
              </div>
            </div>
          </div>


          {/* Student Details */}
          <div className="flex flex-wrap gap-x-12 py-10">
            {Array.from({ length: Math.ceil(AttendanceData.length / 7) }, (_, colIndex) => (
              <div key={colIndex} className="flex flex-col gap-y-4">
                {AttendanceData.slice(colIndex * 7, colIndex * 7 + 7).map((val, index) => {
                  // Calculate the global number
                  const number = colIndex * 7 + index + 1;

                  return (
                    <div key={val.id}>
                      <div className="flex items-center gap-2">
                        <p className="font-medium">{number}. {val.Enrollment}</p>
                        <Checkbox className="border border-black cursor-pointer" checked={AttendanceData1[number - 1]?.Attendance == "present" ? true : false} onCheckedChange={(e) => onChangeHandle(e, val.Enrollment, number - 1)} />
                      </div>
                      <div className="pt-1">
                        <p className="text-sm font-semibold">{val.Name}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>


          <div className="text-center">
            <Button className="py-5 px-10 cursor-pointer text-lg" onClick={onSumbitHandle}>Submit</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AttendanceManagementComponent