import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

interface Data {
    errors: {
      username: string;
      password: string;
    };
  }

const AdminLogin = () => {
    const navigate = useNavigate()
    useEffect(()=>{
        const admin = localStorage.getItem('admin')
        if(admin){
            navigate('/admin')
        }
    },[])
    const [admin,setAdmin] =useState({})

    const handleLogin = (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        axios.post("http://localhost:4000/admin/login",{...admin},{withCredentials:true}).then((result)=>{
            const data = result.data

            if(data){
                if(data.errors){
                   
                }else{
                    if(data.token){
                        localStorage.setItem('admin',JSON.stringify(data))
                        navigate('/admin')
                    }
                }
            }
        })

    }
  return (
    <div>
       <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '90vh' }}>
            <form  onSubmit={handleLogin} className="form card">
                <div className="card_header">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path fill="currentColor" d="M4 15h2v5h12V4H6v5H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6zm6-4V8l5 4-5 4v-3H2v-2h8z"></path>
                    </svg>
                    <h1 className="form_heading">Admin Login</h1>
                </div>
                <div className="field">
                    <label >Username</label>
                    <input className="input" name="username" type="text" placeholder="Username" id="username"  onChange={(e)=>setAdmin({...admin,[e.target.name]:e.target.value})}  />
                </div>
                <div className="field">
                    <label >Password</label>
                    <input className="input" name="password" type="password" placeholder="Password" id="password" onChange={(e)=>setAdmin({...admin,[e.target.name]:e.target.value})}   />
                </div>
                <div className="field">
                    <button type='submit' className="button">Login</button>
                </div>
            </form>
        </div>
    </div>
  )
}


export default AdminLogin
