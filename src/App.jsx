import react from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Dashboard from './components/dashboard'
import Login from './components/login'
import Register from './components/register'


function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/register" element={<Register/>}></Route>  
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
