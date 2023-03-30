import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/SignUp'


const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route> 
        <Route path=""></Route>
        <Route></Route>
      </Routes>
    </div>
  )
}

export default MainRoutes
