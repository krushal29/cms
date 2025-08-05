import ParentFooter from "./ParentFooter"
import ParentNavbar from "./ParentNavbar"

const ParentLayout = ({children}) => {
  return (
    <div>
        <ParentNavbar/>
        {children}
        <ParentFooter/>
    </div>
  )
}

export default ParentLayout