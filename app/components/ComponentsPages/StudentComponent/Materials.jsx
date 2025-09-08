import { CgNotes } from "react-icons/cg";
import { Button } from "../../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select"
import { Input } from '../../ui/input'
import { IoSearchOutline } from "react-icons/io5";
import { CiFilter } from "react-icons/ci";
import { LuVideo } from "react-icons/lu";



const data=[
  {
    id:1,
    type:"Pdf",
    size:"2.5 mb",
    title:"Data Structures and Algorithms - Comprehensive Guide",
    desc:"Complete lecture notes covering all major data structures and algorithms with detailed examples, complexity",
    subjectName:"Data Structures and Algorithm",
    CourseCode:"2020406011",
    UploadedOn :"12/4/2025"
  },
  {
    id:2,
    type:"video",
    size:"2.5 mb",
    title:"Data Structures and Algorithms - Comprehensive Guide",
    desc:"Complete lecture notes covering all major data structures and algorithms with detailed examples, complexity",
    subjectName:"Data Structures and Algorithm",
    CourseCode:"2020406011",
    UploadedOn :"12/4/2025"
  },
  {
    id:3,
    type:"Pdf",
    size:"2.5 mb",
    title:"Data Structures and Algorithms - Comprehensive Guide",
    desc:"Complete lecture notes covering all major data structures and algorithms with detailed examples, complexity",
    subjectName:"Data Structures and Algorithm",
    CourseCode:"2020406011",
    UploadedOn :"12/4/2025"
  },
  {
    id:4,
    type:"video",
    size:"2.5 mb",
    title:"Data Structures and Algorithms - Comprehensive Guide",
    desc:"Complete lecture notes covering all major data structures and algorithms with detailed examples, complexity",
    subjectName:"Data Structures and Algorithm",
    CourseCode:"2020406011",
    UploadedOn :"10/4/2025"
  },
]





const Materials = () => {
  return (
    <div className="bg-background min-h-[50.8vh] flex justify-center py-8">
      <div className="w-[80%]">
        <h1 className="font-bold text-[33px] text-center underline">Materials</h1>
        <p className="pt-3 text-center text-[17px]">Find all  lecture notes and Exciting Materials Here</p>


        <div className="bg-secondary flex flex-wrap items-center justify-between px-6 py-5 rounded-2xl mt-12 shadow-lg">
          {/* Search By: Label + Dropdown */}
          <div className="flex items-center w-full sm:w-1/3 mb-4 sm:mb-0 ">
            <p className="text-xl whitespace-nowrap mr-4">Search by:</p>
            <Select>
              <SelectTrigger className="w-full bg-primary-foreground border border-black shadow-sm outline-none focus:outline-none focus:ring-0 focus:border-black focus-visible:ring-0 hover:border-black data-[state=open]:border-black ">
                <SelectValue placeholder="Course Code" />
              </SelectTrigger>
              <SelectContent className="bg-primary-foreground">
                <SelectItem value="course-code">Course Code</SelectItem>
                <SelectItem value="course-name">Course Name</SelectItem>
                <SelectItem value="semester">Semester</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Search Input */}
          <div className="flex items-center w-full sm:w-1/3 bg-primary-foreground px-3 rounded-md shadow-sm">
            <IoSearchOutline className="text-xl text-gray-500" />
            <Input
              placeholder="Search by course code . . ."
              className="bg-transparent px-2 py-1 shadow-none outline-none focus:outline-none focus:ring-0  focus-visible:ring-0 data-[state=open]:border-black"
            />
          </div>

          {/* Filter + Select */}
          <div className="flex items-center w-full sm:w-1/4 mt-4 sm:mt-0  ">
            <CiFilter className="text-3xl text-gray-600 mr-3" />
            <Select>
              <SelectTrigger className="w-full bg-primary-foreground border border-black shadow-sm outline-none focus:outline-none focus:ring-0 focus:border-black focus-visible:ring-0 hover:border-black data-[state=open]:border-black">
                <SelectValue placeholder="Lab Manual" />
              </SelectTrigger>
              <SelectContent className="bg-primary-foreground ">
                <SelectItem value="lab-manual">Lab Manual</SelectItem>
                <SelectItem value="lecture-notes">Lecture Notes</SelectItem>
                <SelectItem value="assignments">Assignments</SelectItem>
              </SelectContent>
            </Select>
          </div>

        </div>



        <div className="grid grid-cols-3 gap-10 py-10">
          {data.map((val, index) => (
            <div className="bg-secondary rounded-2xl py-7 px-5 drop-shadow-lg shadow-ring" key={index}>
              <div className="flex justify-between">
                <div className="flex items-center">
                  <div>
                    {val.type=="Pdf"?<CgNotes className="text-red-600 text-2xl" />:<LuVideo className="text-2xl text-cyan-500"/>
}
                    
                  </div>
                  <div className="pl-3">
                    <p className={`${val.type=="Pdf"?"bg-rose-200 text-red-600":'text-cyan-600 bg-sky-200'} py-1 px-8 rounded-2xl`}>{val.type}</p>
                  </div>
                </div>
                <div>
                  <p className="bg-gray-400 text-gray-950 py-1 px-6 rounded-2xl">{val.size}</p>
                </div>
              </div>

              <div className="pt-4">
                <p className="font-semibold text-xl">{val.title}</p>
              </div>

              {/* <div className="pt-4">
                <p>{val.desc}</p>
              </div> */}

              <div className="pt-4">
                <div className="flex justify-between items-center">
                  <p className="font-semibold">Subject :</p>
                  <p className="text-[15px]">{val.subjectName}</p>
                </div>
                <div className="flex justify-between pt-2 items-center">
                  <p className="font-semibold">Course Code :</p>
                  <p className="text-[15px]">{val.CourseCode}</p>
                </div>
                <div className="flex justify-between pt-1 items-center">
                  <p className="font-semibold">Uploaded On :</p>
                  <p className="text-[15px]">{val.UploadedOn}</p>
                </div>
              </div>


              <div className="pt-8">
                <Button className="w-full cursor-pointer">Download</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Materials