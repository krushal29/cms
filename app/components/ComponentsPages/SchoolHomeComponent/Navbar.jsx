import { useState } from "react"
import { Button } from "../../ui/button"
import Login from "../Login"

const Navbar = () => {
  const [showLoginPopup,setshowLoginPopup]=useState(false)

  //show login popup
  const showHandle=()=>{
    setshowLoginPopup(!showLoginPopup)
  }

  //close login popup
  const closeHandle=()=>{
    setshowLoginPopup(false)
  }
  return (
    <div className="flex justify-between bg-secondary align-middle px-4 py-3">
        <div className="flex items-center">
            <h5 className="font-bold text-xl">Grand Valley College</h5>
        </div>
        <div className="w-[30%]">
            <ul className="flex justify-between items-center">
                <li className="cursor-pointer font-medium">About</li>
                <li className="cursor-pointer font-medium">Fees</li>
                <li className="cursor-pointer font-medium">Placement</li>
                <li className="cursor-pointer font-medium">Departments</li>
                <li><Button className="px-6 cursor-pointer" onClick={showHandle}>Login</Button></li>
            </ul>
        </div>
{showLoginPopup&&<div className="fixed inset-0 backdrop-blur-[1px]"><Login closeHandle={closeHandle}/></div>}
    </div>
  )
}

export default Navbar