"use client"
import { useEffect, useState } from 'react';
import { ButtonComponent } from '../Button';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './style.css';

const Sidebar = () => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if(window.innerWidth >= 768)
      setOpen(true)
  }, [])

  const toggleSideBar = () => {
    setOpen(!open)
  }

  if(!open){
    return <i onClick={toggleSideBar} className="bi bi-upc" style={{fontSize: "50px", marginTop: "26px"}}></i>
  }
  return (
    <div className="sidebar-container w-2/12">
      <div className="sidebar h-full p-5">
      {/* {window.innerWidth >= 768 && <i onClick={toggleSideBar} className="bi bi-upc" style={{fontSize: "20px",position: "absolute",
    left: "111px",
    top: "2px"}}></i>} */}
        <h2 className='text-2xl font-bold'>Bayer Health</h2>
        <ul className='mt-2 mb-2'>
          <li className='pb-2'><a href="#" style={{ fontWeight: "bold" }}>Dashboard</a></li>
          <li className='pb-2'><a href="#">Patient List</a></li>
          <li className='pb-2'><a href="#">Appointments</a></li>
          <li className='pb-2'><a href="#">Messages</a></li>
          <li className='pb-2'><a href="#">Logout</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;