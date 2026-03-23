import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Dashboard from './components/dashboard'
import Login from './components/login'
import Register from './components/register'
import ProtectedRoute from './components/protectedRoute'


function App() {

const isLoggedIn = localStorage.getItem('token');

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
