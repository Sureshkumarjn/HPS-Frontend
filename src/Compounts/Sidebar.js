import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo4.png'
 
  const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleToggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };
  
    const menuBtnChange = () => {
      if (isSidebarOpen) {
        return "bx-menu-alt-right";
      } else {
        return "bx-menu";
      }
    };

   
  return (
    
    <>
     <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}  onClick={handleToggleSidebar}>
      <div className="logo-details">
      <img src={logo} alt="logo"  id='logo' />
        <div className="logo_name">APS HMS</div>
      </div>

      <ul className="nav-list">
     {/*   <li>
          <i className="bx bx-search" onClick={handleToggleSidebar}></i>
          <input type="text" placeholder="Search..." />
          <span className="tooltip">Search</span>
        </li>
      */}
        <li>
          <Link to="/">
            <i className="bx bx-grid-alt" id='icon1'></i>
            <span className="links_name">Dashboard</span>
          </Link>
          <span className="tooltip">Dashboard</span>
        </li>
        <li>
          <Link to="./Patient">
            <i className="bx bx-user" id='icon1'></i>
            <span className="links_name">Patient</span>
          </Link>
          <span className="tooltip">Patient</span>
        </li>
        <li>
          <Link to="./Doctor">
          <i className="fa-solid fa-user-doctor" id='icon1'></i>
            <span className="links_name">Doctor</span>
          </Link>
          <span className="tooltip">Doctor</span>
        </li>
        <li>
          <Link to="./Medical_Camp">
            <i className="bx bx-heart" id='icon1'></i>
            <span className="links_name">Medical Camp</span>
          </Link>
          <span className="tooltip">Medical Camp</span>
        </li>
        <li>
          <Link to="./Employee">
          <i className="fa-solid fa-users" id='icon1'></i>
            <span className="links_name">Employee</span>
          </Link>
          <span className="tooltip">Employee</span>
        </li>
        <li>
          <Link to="./Message">
          <i className="bx bx-chat" id='icon1'></i>
            
            <span className="links_name">Message</span>
          </Link>
          <span className="tooltip">Message</span>
        </li>
        <li>
          <Link to="./Appointment">
          <i className="fa-solid fa-handshake" id='icon1'></i>

            
            <span className="links_name">Appiontment</span>
          </Link>
          <span className="tooltip">Appiontment</span>
        </li>
       
       
       
       
      </ul>
    </div>

    
    </>
    
    
  );
};
export default Sidebar
