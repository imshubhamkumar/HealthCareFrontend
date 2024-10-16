"use client"
import Sidebar from "@/app/components/sidebar/index";
import { DoctorPage } from "../DoctorPage/index";
import { PatientPage } from "../PatientPage/index";
import BookAppointment from "@/app/components/BookAppointment";
import { useState } from "react";
import "./page.css"

const Layout = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);
  return (
    <>
      <div className="dashboard-layout flex flex-row h-full">
        <Sidebar />
        <div className="main-body-container w-10/12 bg-base-200 p-8 pt-10">
          <PatientPage onClick={openModal} />
          {/* <DoctorPage /> */}
        </div>
        <BookAppointment isVisible={isModalVisible} onClose={closeModal} />
      </div>
    </>

  );
}

export default Layout;