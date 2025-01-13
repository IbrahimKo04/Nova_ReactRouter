import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Users from './pages/Users';
import AddUser from './pages/AddUser';
import DeleteUser from './pages/DeleteUser';
function App() {
  

  return (
    <>
    <Router>
      <Navbar/>
      <Routes>

        <Route path='/' element={<Home/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Users' element={<Users/>}></Route>
        <Route path = '/AddUser' element = {<AddUser/>}></Route>
        <Route path = '/DeleteUser' element = {<DeleteUser/>}></Route>

      </Routes>

    </Router>




    </>
  )
}

export default App
