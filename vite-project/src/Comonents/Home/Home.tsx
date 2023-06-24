import React from "react";
import './Home.css'
const Home = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="left">
          <h1 className="nav">Navbar</h1>
        </div>

        <div className="right">
          <input type="checkbox" id="check" />

          <label className="checkBtn">
            <i className="fa fa-bars"></i>
          </label>

          <ul className="list">
            <li > Profile</li>

            <li>
              <a href=" ">Logout</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Home;
