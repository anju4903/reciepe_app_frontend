import React from 'react'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css'


const App = () => {
  return (
    <div>
   <Router>
   <Navbar />
   <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/home" element={<Home />} />
   </Routes>
   </Router>
   </div>
  )
}

export default App