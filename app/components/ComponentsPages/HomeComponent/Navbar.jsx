import { useState } from "react"
import { Button } from "../../ui/button"
import Login from "../Login"
import ApplyNowPopup from "./ApplyNowPopup"
import ApplyAcademicInformationPopup from "./ApplyAcademicInformationPopup"
import ApplyUploadDocumentPopup from "./ApplyUploadDocumentPopup"
const Navbar = () => {
  const [showLoginPopup, setShowLoginPopup] = useState(false)
  const [showApplyPopup, setShowApplyPopup] = useState(false)
  const [nextAcaPopup, setNextAcaPopup] = useState(false);
  const [nextUploadPopup, setNextUploadPopup] = useState(false)


  const nextHandle = () => {
    setShowApplyPopup(false)
    setNextAcaPopup(true)
  }

  const nextUploadHandle=()=>{
    setNextAcaPopup(false)
    setNextUploadPopup(true);
  }

  const PrevHandle = () => {
    setNextAcaPopup(false)
    setShowApplyPopup(true)
  }

  const PrevUploadHandle = () => {
    setNextUploadPopup(false)
    setNextAcaPopup(true)
  }

  const closeHandle = () => {
    setShowLoginPopup(false)
  }

  const closeApplyHandle = () => {
    setShowApplyPopup(false);
  }
  const closeAcaHandle = () => {
    setNextAcaPopup(false);
  }
  const closeUploadHandle=()=>{
    setNextUploadPopup(false)
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
          <li className="cursor-pointer font-medium" onClick={() => setShowApplyPopup(!showApplyPopup)}>Apply Now</li>
          <li><Button className="px-6 cursor-pointer" onClick={() => setShowLoginPopup(!showLoginPopup)}>Login</Button></li>
        </ul>
      </div>
      {showLoginPopup && <div className="fixed inset-0 backdrop-blur-[3px] z-20"><Login closeHandle={closeHandle} /></div>}

      {(showApplyPopup) && <div className="fixed inset-0 backdrop-blur-[3px] z-20"><ApplyNowPopup closeApplyHandle={closeApplyHandle} nextHandle={nextHandle} /></div>}


      {nextAcaPopup && <div className="fixed inset-0 backdrop-blur-[3px] z-20"><ApplyAcademicInformationPopup closeAcaHandle={closeAcaHandle} PrevHandle={PrevHandle} nextUploadHandle={nextUploadHandle}/></div>}


      {nextUploadPopup && <div className="fixed inset-0 backdrop-blur-[3px] z-20"><ApplyUploadDocumentPopup closeUploadHandle={closeUploadHandle} PrevUploadHandle={PrevUploadHandle}/></div>}



    </div>
  )
}

export default Navbar