import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./Signup.css";

interface User {
  username: string;
  password: string;
}

const Signup: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    let user = localStorage.getItem("user");
    if (user) {
      navigate("/");
    }
  }, [navigate]);

  const generateError = (err: any) => {
    toast.error(err, {
      position: "bottom-right",
    });
  };

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    
    
    try {
      const { data } = await axios.post(
        "http://localhost:4000/signup",
        { username, password },
        { withCredentials: true }
        );
        console.log("workingggg")

      if (data) {
        if (data.errors) {
          const { username, password } = data.errors;

          if (username) {
            generateError(username);
          } else if (password) {
            generateError(password);
          }
        } else {
          navigate("/login");
        }
      }
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "90vh",
        }}
      >
        <form onSubmit={handleSignup} className="form card">
          <div className="card_header">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                fill="currentColor"
                d="M4 15h2v5h12V4H6v5H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6zm6-4V8l5 4-5 4v-3H2v-2h8z"
              ></path>
            </svg>
            <h1 className="form_heading">Sign Up</h1>
          </div>
          <div className="field">
            <label htmlFor="username">Username</label>
            <input
              className="input"
              name="username"
              type="text"
              placeholder="Username"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="field">
            <label htmlFor="password">Password</label>
            <input
              className="input"
              name="password"
              type="password"
              placeholder="Password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="field">
            <button type="submit" className="button">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
