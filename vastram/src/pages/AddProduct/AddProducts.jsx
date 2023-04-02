import React from 'react'
import "./add.scss";
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Form from './form';
const AddProducts = () => {
  return (
<div className='user'>
        <Sidebar />
        <div className='userContainer'>
            <Navbar />
            <Form />
        </div>
    </div>
  )
}

export default AddProducts