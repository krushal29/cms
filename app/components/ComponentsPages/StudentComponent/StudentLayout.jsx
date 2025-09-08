// import StudentFooter from "./StudentFooter"
// import StudnetNavbar from "./StudentNavbar"
// import { SidebarProvider, SidebarTrigger } from "../../ui/sidebar"
// import AppSidebar from "./app-sidebar"




// const StudentLayout = ({ children }) => {
//   return (
//     // <SidebarProvider>
//     //   <AppSidebar />
//     //   <main>
//     //     <SidebarTrigger />
//     //     <StudnetNavbar />
//     //     {children}
//     //     <StudentFooter />
//     //   </main>
//     // </SidebarProvider>


//       <main>
//         <StudnetNavbar />
//         {children}
//         <StudentFooter />
//       </main>
//   )
// }

// export default StudentLayout






import StudentFooter from "./StudentFooter";
import { SidebarProvider, SidebarTrigger } from "../../ui/sidebar";
import AppSidebar from "./app-sidebar";
import StudnetNavbar from "./StudentNavbar";
import { useState } from "react";

import ApplyLeave from "./ApplyLeave";
import AddAchievements from "./AddAchievements";
import PayFeePopup from "./PayFeePopup";
import VerifyFees from "./VerifyFees";

const StudentLayout = ({ children }) => {
  // State for popups
  const [leavePopup, setLeavePopup] = useState(false);
  const [achievementPopup, setAchievementPopup] = useState(false);
  const [payPopup, setPayPopup] = useState(false);
  const [verifyPopup, setVerifyPopup] = useState(false);

  const handleLogout = () => alert("Logout Successful");

  return (
    <SidebarProvider>
      <AppSidebar
        onShowLeave={() => setLeavePopup(true)}
        onShowAchievement={() => setAchievementPopup(true)}
        onShowPay={() => setPayPopup(true)}
        onShowVerify={() => setVerifyPopup(true)}
        onLogout={handleLogout}
      />
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

      {/* Popups */}
      {leavePopup && (
        <div className="fixed inset-0 backdrop-blur-[3px] z-50">
          <ApplyLeave onCloseLeave={() => setLeavePopup(false)} />
        </div>
      )}
      {achievementPopup && (
        <div className="fixed inset-0 backdrop-blur-[3px] z-50">
          <AddAchievements onCloseAchievement={() => setAchievementPopup(false)} />
        </div>
      )}
      {payPopup && (
        <div className="fixed inset-0 backdrop-blur-[3px] z-50">
          <PayFeePopup onClosePayPopup={() => setPayPopup(false)} />
        </div>
      )}
      {verifyPopup && (
        <div className="fixed inset-0 backdrop-blur-[3px] z-50">
          <VerifyFees onCloseVerifyPopup={() => setVerifyPopup(false)} />
        </div>
      )}
    </SidebarProvider>
  );
};

export default StudentLayout;
