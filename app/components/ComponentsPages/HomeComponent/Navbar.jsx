import { useState } from "react"
import { Button } from "../../ui/button"
import Login from "../Login"
const Navbar = () => {
  const [showLoginPopup,setShowLoginPopup]=useState(false)

  const closeHandle=()=>{
    setShowLoginPopup(false)
  }
  return (
    <div className="flex justify-between bg-secondary align-middle px-4 py-3">
        <div className="flex items-center">
            <h5 className="font-bold text-xl">Grand Valley College</h5>
        </div>
        <div className="w-[25%]">
            <ul className="flex justify-between items-center">
                <li className="cursor-pointer font-medium">About</li>
                <li className="cursor-pointer font-medium">Academics</li>
                <li className="cursor-pointer font-medium">Apply Now</li>
                <li><Button className="px-6 cursor-pointer" onClick={()=>setShowLoginPopup(!showLoginPopup)}>Login</Button></li>
            </ul>
        </div>
        {showLoginPopup&&<div className="fixed inset-0 backdrop-blur-[1px] z-20"><Login closeHandle={closeHandle}/></div>}
    </div>
  )
}

export default Navbar