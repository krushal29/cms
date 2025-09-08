import StudentFooter from "./StudentFooter";
import { SidebarProvider, SidebarTrigger } from "../../ui/sidebar";
import AppSidebar from "./app-sidebar";
import StudnetNavbar from "./StudentNavbar";
const StudentLayout = ({ children }) => {
  return (
    <SidebarProvider>
      <AppSidebar/>
      <main className="flex-1">
        <div className="px-5 py-1 flex justify-between items-center">
          <div>
            <SidebarTrigger className="m-2" />
          </div>
          <div>
            <h2 className="font-bold text-lg">Grand Valley College</h2>
          </div>
        </div>

        <StudnetNavbar />
        {children}
        <StudentFooter />
      </main>
    </SidebarProvider>
  );
};

export default StudentLayout;
