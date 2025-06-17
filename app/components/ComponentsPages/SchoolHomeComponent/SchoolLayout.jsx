import Navbar from "./Navbar"
import SchoolFooter from "./SchoolFooter"


const SchoolLayout = ({children}) => {
  return (
    <div>
        <Navbar/>
        {children}
        <SchoolFooter/>
    </div>
  )
}

export default SchoolLayout