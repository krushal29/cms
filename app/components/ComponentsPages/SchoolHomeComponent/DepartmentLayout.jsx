import DepartmentNavbar from "./DepartmentNavbar"
import SchoolFooter from "./SchoolFooter"


const DepartmentLayout = ({children}) => {
  return (
    <div>
        <DepartmentNavbar/>
        {children}
        <SchoolFooter/>
    </div>
  )
}

export default DepartmentLayout