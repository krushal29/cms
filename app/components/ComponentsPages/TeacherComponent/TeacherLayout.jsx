import { SidebarProvider, SidebarTrigger } from "../../ui/sidebar";
import AppSidebar from "./app-sidebar";
import TeacherNavbar from "./TeacherNavbar";
import TeacherFooter from "./TeacherFooter";
const TeacherLayout = ({ children }) => {
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

        <TeacherNavbar />
        {children}
        <TeacherFooter />
      </main>
    </SidebarProvider>
  );
};

export default TeacherLayout;