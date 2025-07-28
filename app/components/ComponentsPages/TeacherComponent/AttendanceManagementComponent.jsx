import { Button } from "../../ui/button";
import { Label } from '../../ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select"



const AttendanceData = [
  { id: 1, Enrollment: '12302040501001', Name: 'Krushal Patel' },
  { id: 2, Enrollment: '12302040501002', Name: 'Ayesha Khan' },
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


const AttendanceManagementComponent = () => {
  return (
    <div className="bg-background min-h-[50.8vh] flex justify-center py-10">
      <div className="w-[80%]">
        <h1 className="font-bold text-4xl text-center underline">Attendance Management</h1>

        {/* filter Data */}
        <div className='bg-secondary grid grid-cols-3 gap-3 py-5 px-5 mt-10 rounded-2xl  border border-black'>
          <div className="space-y-2">
            <Label className="text-base">Select Subject</Label>
            <Select>
              <SelectTrigger className="w-full bg-secondary shadow-2xl" style={{ border: '1px solid black' }}>
                <SelectValue placeholder="Choose Subject" />
              </SelectTrigger>
              <SelectContent className="bg-secondary">
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label className="text-base">Select Branch</Label>
            <Select>
              <SelectTrigger className="w-full bg-secondary shadow-2xl" style={{ border: '1px solid black' }}>
                <SelectValue placeholder="Choose Branch" />
              </SelectTrigger>
              <SelectContent className="bg-secondary">
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label className="text-base">Select Date</Label>
            <input
              type="date"
              className="w-full pl-3 pr-4 py-1.5 bg-secondary border border-black shadow-2xl rounded-md text-right placeholder:text-left"
              placeholder="Select date"
            />
          </div>
        </div>




        {/* Attendance Details */}
        <div className="border border-black rounded-2xl drop-shadow-lg shadow-ring mt-15 bg-secondary  py-4 pb-10 px-12">
          {/* select all */}
          <div className="flex">
            <p className="font-medium text-xl pr-2">Select all</p>
            <input type="radio" />
          </div>
          {/* Student Details */}
          <div className="grid grid-cols-4 grid-rows-7 py-10 gap-y-5">
            {AttendanceData.map((val, index) => (
              <div key={index}>
                <div className="flex items-center gap-2">
                  <p className="font-medium">{index + 1}. {val.Enrollment}</p>
                  <input type="checkbox" />
                </div>
                <div className="pt-1">
                  <p className="text-sm font-semibold">{val.Name}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button className="py-5 px-10 cursor-pointer text-lg">Submit</Button>
          </div>
        </div>


      </div>
    </div>
  )
}

export default AttendanceManagementComponent