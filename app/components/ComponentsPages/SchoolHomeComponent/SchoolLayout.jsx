import Navbar from "./Navbar"
import SchoolFooter from "./SchoolFooter"


const SchoolLayout = ({children,onClickAboutScroll,onClickPlacementScroll,onClickProgramScroll}) => {
  return (
    <div>
        <Navbar onClickAboutScroll={onClickAboutScroll} onClickPlacementScroll={onClickPlacementScroll} onClickProgramScroll={onClickProgramScroll}/>
        {children}
        <SchoolFooter/>
    </div>
  )
}

export default SchoolLayout