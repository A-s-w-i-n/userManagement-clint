import React from "react";

const AdminNav = () => {
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
                <a href=" ">Logout</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default AdminNav;
