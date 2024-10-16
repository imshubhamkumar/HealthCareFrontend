import './style.css';
const Sidebar = () => {
  return (
    <>
      <div className="sidebar h-full p-5">
        <h2 className='text-2xl font-bold'>Bayer Health</h2>
        <ul className='mt-2 mb-2'>
          <li className='pb-2'><a href="#" style={{ fontWeight: "bold" }}>Dashboard</a></li>
          <li className='pb-2'><a href="#">Patient List</a></li>
          <li className='pb-2'><a href="#">Appointments</a></li>
          <li className='pb-2'><a href="#">Messages</a></li>
          <li className='pb-2'><a href="#">Logout</a></li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;