
import Sidebar from "@/app/components/sidebar/index";
import { DoctorPage } from "../DoctorPage/index";
import { PatientPage } from "../PatientPage/index";
import BookAppointment from "@/app/components/BookAppointment";
import "./page.css"

const Layout = () => {
  return (
    <>
      <div className="dashboard-layout flex flex-row h-full">
        <Sidebar />
        <div className="main-body-container w-10/12 bg-base-200 p-8 pt-10">
          <PatientPage />
          {/* <DoctorPage /> */}
        </div>
        <BookAppointment />
      </div>
    </>

  );
}

export default Layout;