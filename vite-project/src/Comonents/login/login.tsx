import {useEffect,useState} from 'react'
import { json, useNavigate } from 'react-router-dom'
import { ToastContainer,toast } from 'react-toastify'
import {useDispatch} from  'react-redux'
import './login.css'
import axios,{AxiosResponse} from 'axios'
import { updateUser } from '../../Redux/User/user'

const login = () => {
const navigate = useNavigate()
const dipatch = useDispatch()
const [user,setUser] = useState({})


interface loginRespose{
  user: any
  errors?: string[]
}

useEffect(()=>{
  let user = localStorage.getItem('user')

  if(user){
    navigate('/')
  }
},[])

const handleLogin = (e : React.FormEvent<HTMLFormElement>) : void => {
  e.preventDefault()
  axios.post('http://localhost:4000/login',{...user},{withCredentials:true}).then((result : AxiosResponse<loginRespose>)=>{
    const resultData = result.data

    if(resultData){
       if(resultData.errors){
       const errors = resultData.errors

       const username = errors[0]
       const password = errors[1]
        console.log(username);
        console.log(password);

        if(username) generateError (username)
        else if (password) generateError (password)
       }else{
        localStorage.setItem('user',JSON.stringify(resultData))
        dipatch(updateUser({username:resultData.user.username,userId:resultData.user.userId,image:resultData.user.image}))
        navigate('/')
        
       }
    }
  })
}
const generateError = (err :any) =>toast.error(err,{
  position : 'bottom-right'
})
 return (
<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '90vh' }}>
      <form className="form card" onSubmit={handleLogin}>
        <div className="card_header">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path fill="currentColor" d="M4 15h2v5h12V4H6v5H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6zm6-4V8l5 4-5 4v-3H2v-2h8z"></path>
          </svg>
          <h1 className="form_heading">Log in</h1>
        </div>
        <div className="field">
          <label htmlFor="username">Username</label>
          <input className="input" name="username" type="text" placeholder="Username" id="username"   onChange={(e)=>setUser({...user,[e.target.name]:e.target.value})} />
        </div>
        <div className="field">
          <label htmlFor="password">Password</label>
          <input className="input" name="password" type="password" placeholder="Password" id="password" onChange={(e)=>setUser({...user,[e.target.name]:e.target.value})}   />
        </div>
        <div className="field">
          <button type='submit' className="button">Login</button>
        </div>
      </form>


    </div>
    )
}

export default login
