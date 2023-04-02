import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import UserDetails from "./UserDetails"
import "./User.scss";
const User = () => {
  return (
    <div className='user'>
        <Sidebar />
        <div className='userContainer'>
            <Navbar />
            <UserDetails />
        </div>
    </div>
  )
}

export default User