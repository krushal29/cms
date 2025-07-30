import StudentFooter from "./StudentFooter"
import StudnetNavbar from "./StudentNavbar"
import { SidebarProvider, SidebarTrigger } from "../../ui/sidebar"
import AppSidebar from "./app-sidebar"




const StudentLayout = ({ children }) => {
  return (
    // <SidebarProvider>
    //   <AppSidebar />
    //   <main>
    //     <SidebarTrigger />
    //     <StudnetNavbar />
    //     {children}
    //     <StudentFooter />
    //   </main>
    // </SidebarProvider>


      <main>
        <StudnetNavbar />
        {children}
        <StudentFooter />
      </main>
  )
}

export default StudentLayout