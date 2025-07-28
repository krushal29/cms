import { useState } from "react"
import { Button } from "../../ui/button"
import Login from "../Login"

const Navbar = ({onClickAboutScroll,onClickPlacementScroll,onClickProgramScroll}) => {
  const [showLoginPopup, setshowLoginPopup] = useState(false)

  //show login popup
  const showHandle = () => {
    setshowLoginPopup(!showLoginPopup)
  }

  //close login popup
  const closeHandle = () => {
    setshowLoginPopup(false)
  }



  return (
    <div className="bg-secondary flex justify-center fixed top-0 right-0 left-0 z-2">
      <div className="flex justify-between align-middle w-[95%] py-3">
        <div className="flex items-center">
          <h5 className="font-bold text-xl">Grand Valley College</h5>
        </div>
        <div className="w-[32%]">
          <ul className="flex justify-between items-center">
            <li className="cursor-pointer font-medium" onClick={onClickAboutScroll}>About</li>
            <li className="cursor-pointer font-medium" onClick={onClickProgramScroll}>Programs</li>
            <li className="cursor-pointer font-medium" onClick={onClickPlacementScroll}>Placement</li>
            <li className="cursor-pointer font-medium">Departments</li>
            <li><Button className="px-6 cursor-pointer" onClick={showHandle}>Login</Button></li>
          </ul>
        </div>
        {showLoginPopup && <div className="fixed inset-0 backdrop-blur-[1px]"><Login closeHandle={closeHandle} /></div>}
      </div>
    </div>
  )
}

export default Navbar