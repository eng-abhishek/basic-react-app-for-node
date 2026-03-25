import React,{useState, useEffect} from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Axios from 'axios'
import Dashboard from './components/dashboard'
import Login from './components/login'
import Register from './components/register'
import ProtectedRoute from './components/protectedRoute_old'


function App() {

// const isLoggedIn = localStorage.getItem('token');
const isLoggedIn = localStorage.getItem('token');

// const [isLoggedIn,setIsLoggedIn] = useState();

// useEffect(()=>{

// const verifyUser = async () => {
//   const resp = await Axios.get('http://localhost:1000/api/check-valid-user',{
//     headers:{
//       Authorization:`Bearer ${token}`,
//     }
//   });
// }

// },[]);

  return (
    <>
     <BrowserRouter>
      <Routes>
        
         {/* check auth  */}

        <Route path="/" element={isLoggedIn ? <Navigate to="/dashboard" /> : <Login/> }></Route>
        <Route path="/login" element={isLoggedIn ? <Navigate to="/dashboard"  /> : <Login />}></Route>
        <Route path="/register" element={isLoggedIn ? <Navigate to="/dashboard" /> : <Register/>}></Route>

        <Route element={<ProtectedRoute/>}>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        </Route>

      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
