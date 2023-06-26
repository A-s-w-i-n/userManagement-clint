import React,{useState} from "react";
import { useSelector } from "react-redux"
import axios from "axios";
import './EditUser.css'
import {useNavigate} from 'react-router-dom'
import {ToastContainer,toast} from 'react-toastify'

const EditUser = () => {
  const navigate = useNavigate()
  // const {name,id} = useSelector(state => state.admin)
  return (
    <div>
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "90vh",
          }}
        >
          <form className="form card-1">
            <div className="card_header">
              <h1 className="form_heading">Edit User</h1>
            </div>
            <div className="field">
              <label>Username</label>
              <input
                className="input"
                name="username"
                type="text"
                placeholder="Username"
                id="username"
              />
            </div>

            <div className="field">
              <button type="submit" className="button">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
