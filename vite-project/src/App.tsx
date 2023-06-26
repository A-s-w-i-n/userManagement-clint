
import './App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Comonents/Home/Home'
import Login from './Comonents/login/login'
import Signup from './Comonents/Signup/Signup'
import Profile from './Comonents/Profile/Profile'
import AdminLogin from './Comonents/AdminLogin/AdminLogin'
import Admin from './Comonents/Admin/Admin'
import Adduser from './Comonents/Admin-Adduser/Adduser'
import EditUser from './Comonents/Edituser/EditUser'




function App() {
  return (   <>
  
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/admin/login' element={<AdminLogin/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/admin/adduser' element={<Adduser/>}/>
        <Route path='/admin/edituser'element={<EditUser/>}/>
      </Routes>
    </Router>

   
   </>
  )
}

export default App
