import Sidebar from "@/app/components/sidebar/index";
import { DoctorPage } from "../DoctorPage/index";
import { PatientPage } from "../PatientPage/index";

const Layout = () => {
  return (
    <>
      <div className="dashboard-layout flex flex-row divide-x h-full">
        <div className="sidebar-container w-2/12"><Sidebar /></div>
        <div className="main-body-container w-10/12 bg-base-200 p-8 pt-10">
          {/* <PatientPage/> */}
          <DoctorPage />
        </div>
      </div>
    </>
    
  );
}

export default Layout;