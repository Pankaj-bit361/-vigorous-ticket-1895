import axios from "axios";
 import {
  Box,
  Input,
  InputGroup,

  InputRightElement,
 
  Button,} from '@chakra-ui/react';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'

import "../css/signup.css"
import Swal from 'sweetalert2'

const init={
  FirstName:"",
LastName:"",
Email:"",
Password:"",
ConfirmPassword:"",
Number:""
}

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
const [adddetails,setadddetails]=useState(init)
const navigate=useNavigate()

const handleChange=(e)=>{
const {name,value}=e.target;
setadddetails({...adddetails,[name]:value})
}

const handleSubmit=(e)=>{
e.preventDefault()
console.log(adddetails)
axios.post(`https://63f87b1f5b0e4a127de6dd05.mockapi.io/survey/users`,adddetails)
.then((res)=>{
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Account created Successfully',
    showConfirmButton: false,
    timer: 1500
  })
setTimeout(()=>{
  navigate("/login")
},1500)

})
}


  
  return (
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
      <hr />
   <div><span>Already have account? </span> <Link><span onClick={()=>navigate("/login")}>Sign In</span></Link> </div>
    </div>
  )
}

export default Signup
