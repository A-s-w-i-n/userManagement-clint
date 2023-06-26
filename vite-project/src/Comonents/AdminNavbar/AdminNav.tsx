import React from "react";
import {useNavigate} from 'react-router-dom'


const AdminNav = () => {
  const navigate = useNavigate()
  const handleLogout = () =>{
    localStorage.removeItem('admin')
    navigate('admin/login')
  }
  return (
    <div>
      <div>
        <nav className="navbar">
          <div className="left">
            <h1>Admin</h1>
          </div>

          <div className="right">
            <input type="checkbox" id="check" />

            <label className="checkBtn">
              <i className="fa fa-bars"></i>
            </label>

            <ul className="list">
              <li>
                <a href=" " onClick={handleLogout}>Logout</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default AdminNav;
