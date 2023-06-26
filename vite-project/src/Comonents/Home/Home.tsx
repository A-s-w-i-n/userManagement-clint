import React,{useEffect} from "react";
import {useNavigate,Link} from "react-router-dom";
import './Home.css'
import axios from "axios";

const Home = () => {
  const navigate = useNavigate()
  useEffect(()=>{
    const token = localStorage.getItem("user")
    axios.post("http://localhost:4000",{token}).then((result)=>{
      if(result.data.token){
        if(result.data.token == "valid"){

        }else{
          localStorage.removeItem('user')
          navigate('/login')
        }
      }else{
        navigate('/login')
      }
    })
  },[])
  const handleLogout = (e: React.MouseEvent<HTMLButtonElement>) =>{
    e.preventDefault()
    localStorage.removeItem('user')
    navigate('/login')

    
  }
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

          <ul className="list"><Link to={'/profile'}>
            <li > Profile</li>
            </Link>
            <li>
            <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Home;
