import axios from "axios";
 import {
  Box,
  Input,
  InputGroup,

  InputRightElement,
 
  Button,} from '@chakra-ui/react';

  import Swal from 'sweetalert2'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import "../components/css/singup.css";
import { useDispatch } from "react-redux";
import { logintry } from "../redux/authReducer/action";
import LargeWithAppLinksAndSocial from "../components/Footer";

import  WithSubnavigation from "../components/Navbar"
const init={
  FirstName:"",
LastName:"",
Email:"",
Password:"",
ConfirmPassword:"",
Number:""
}

export const Signup = () => {

const dispatch=useDispatch()
const navigate=useNavigate()
  const [showPassword, setShowPassword] = useState(false);
const [adddetails,setadddetails]=useState(init)

const handleChange=(e)=>{
const {name,value}=e.target;
setadddetails({...adddetails,[name]:value})
}

const handleSubmit=(e)=>{
e.preventDefault()
console.log(adddetails)
dispatch(logintry(adddetails))
.then(()=>{
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Account Created Successfully',
    showConfirmButton: false,
    timer: 1500
  })
  navigate("/login")
})
}


  
  return (
    <>
     <WithSubnavigation/>
    <div id="main">
      <form id="form" disabled={adddetails.Password!==adddetails.ConfirmPassword} onSubmit={handleSubmit}>
        <h3>Create Account</h3>
       
        <div >
        <h4>Personal information</h4>
        <Input type="text" placeholder='First Name' name="FirstName" onChange={handleChange} value={adddetails.FirstName}/>
        <br/>
        <Input type="text" placeholder='Last Name' name="LastName" onChange={handleChange} value={adddetails.LastName}  />
        </div>
  <div>
  <h4>Contact Information</h4>
  <Input type="number" placeholder="Phone Number" name="Number" onChange={handleChange} value={adddetails.Number} />
  <br/>
  <Input type="text" placeholder='Email' onChange={handleChange} name="Email" value={adddetails.Email} />
  </div>
     
       <div id="maintain">
        <Box mb={"-10%"}>Security</Box>

      

        <InputGroup mb={"-5%"}  className='ghost' >
                <Input   type={showPassword ? 'text' : 'password'} placeholder="Password" name="Password" value={adddetails.Password} onChange={handleChange} />
                <InputRightElement  >
                  <div 
                   
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </div>
                </InputRightElement>
              </InputGroup>
      
        
              
            
        <InputGroup  mb={"-2%"}  className='ghost'>
                <Input  type={showPassword ? 'text' : 'password'} placeholder="Confirm Password" name="ConfirmPassword" onChange={handleChange} value={adddetails.ConfirmPassword} />
                <InputRightElement  >
                  <div
                   
                  style={{color:"black"}}
                    variant={'ghost'}
                   
                    onClick={() =>
                  
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </div>
                </InputRightElement>
              </InputGroup>
          
          
              </div>
       <br/>
       <Button  type='submit' >Create Account</Button>
       <Box >By Placing your order, you agree to Belk's</Box>
       <Box id="span">
        <span >Priavacy Policy </span>
        <span> & </span>
        <span> Term of Use</span>
       </Box>
      </form>
      <hr className="hr"/>
   <div><span>Already have account? </span> <Link><span >Sign In</span></Link> </div>
    </div>
    <LargeWithAppLinksAndSocial/>
    </>
  )
}
