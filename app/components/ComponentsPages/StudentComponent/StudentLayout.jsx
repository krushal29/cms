import StudentFooter from "./StudentFooter"
import StudnetNavbar from "./StudentNavbar"


const StudentLayout = ({children}) => {
  return (
    <div>
        <StudnetNavbar/>
        {children}
        <StudentFooter/>
    </div>
  )
}

export default StudentLayout