import React, { useState } from 'react'
import { auth } from '../firebase';
import axios from "axios"
import OtpInput from "otp-input-react"
import { RecaptchaVerifier, signInWithPhoneNumber, } from 'firebase/auth';
import { Box, Button, Input,PinInput,PinInputField,Text } from '@chakra-ui/react';

import { useEffect } from 'react';
import {  useNavigate } from 'react-router-dom';

import Swal from 'sweetalert2'
import { async } from '@firebase/util';
const Login = () => {
const [ph,setph]=useState("")
const [user,setuser]=useState("")
const [otp,setotp]=useState("")
const [change,setchnage]=useState(true)

const [change2,setchange2]=useState(true)


///
const navigate=useNavigate()
const [data,setdata]=useState([])
const[checkemail,setcheckemail]=useState("")
const[checkpss,setcheckpss]=useState("")
useEffect(() => {
  
axios.get(`https://63f87b1f5b0e4a127de6dd05.mockapi.io/survey/users`)
.then((res)=>setdata(res.data))
 
}, [])


const onsubmit=async()=>{
  
  data.map((item)=>{
    if(item.Email===checkemail && item.Password===checkpss){
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Login Success',
        showConfirmButton: false,
        timer: 1500
      })
      navigate("/")
    }
  

  })
}
console.log(data)







function onCatchVerify(){
if(!window.recaptchaVerifier){
    window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
        'size': 'invisible',
        'callback': (response) => {
         onSingup()
        },
        'expired-callback': () => {
        
        }
      }, auth);
}
}


const onSingup=()=>{
    onCatchVerify()
setchange2(!change2)
    const appVerifier=window.recaptchaVerifier;

    const phoneformat="+91"+ph

    signInWithPhoneNumber(auth, phoneformat, appVerifier)
    .then((confirmationResult) => {

      window.confirmationResult = confirmationResult;
      
    }).catch((error) => {
       console.log(error)
    });
}
const wrongalert=async()=>{
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: "Wrong Otp",
   
  })
}


function onOtpVerify(){
    window.confirmationResult.confirm(otp).then(async(result) => {
       
      setuser(result.user)
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
      setTimeout(() => {
        navigate("/")
      }, 1500);
      }).catch((error) => {
       wrongalert()
      });
}

  return (
    <div>
   
<Button mt={"2%"} colorScheme={"blue"} onClick={()=>setchnage(!change)}>{change?"Sign in using Number":"Sign in using Email"}</Button>

{change?<Box pt={"5%"} w={"50%"} m="auto" >
<Text fontSize={"xl"} textAlign="left">My Account</Text>
<Input mt={"3%"} placeholder="Email" value={checkemail} onChange={(e)=>setcheckemail(e.target.value)}/>
<Input mt={"3%"} placeholder="Password" value={checkpss} onChange={(e)=>setcheckpss(e.target.value)}  />
<Button onClick={onsubmit} mt={"3%"} colorScheme={"blue"} w={"100%"}>Sign In</Button>
</Box>:<Box> <Box id="recaptcha-container" > </Box>
    
   {change2? <Box w={"50%"}  margin="auto">  <Input w={"100%"} mt={"3%"} type="number" placeholder='Enter Mobile Number' value={ph} onChange={(e)=>setph(e.target.value)} />
      <Button colorScheme={"blue"} w={"100%"} mt={"3%"} onClick={onSingup}>Send otp</Button> </Box>:
      <Box style={{width:"50%",margin:"auto",marginTop:"5%"}} >
      <div style={{width:"100%",margin:"auto", marginLeft:"2%"}} >

      <OtpInput 
                    value={otp}
                    onChange={setotp}
                    OTPLength={6}
                    otpType="number"
                    disabled={false}
                    color="#333"
                    inputStyles={{border:"1px solid black",width:"100%",marginBottom:"3%"}}
                autofocus
                    ></OtpInput>
      </div>

       <Button w={"100%"} colorScheme={"blue"} onClick={onOtpVerify}>Verify</Button>
       </Box>
       }
  
     
      </Box>
      }
<Text fontSize={"14px"} m="auto" w={"50%"} mt={"2%"}>By signing into your account,you agree</Text>
<Text fontSize={"14px"} m='auto' w={"50%"}><span>to Belks's </span><span style={{color:"#3182ce"}}>Privacy Policy </span><span> & </span> <span style={{color:"#3182ce"}}> Terms of Use</span></Text>
<br/>
    <hr style={{width:"50%", border:"1px dotted black ",margin:"auto"}}/>
<Box  mt={"2%"}>
    <Button background={"white"} border={"1px solid #3182ce"} w={"50%"} m="auto" color={"#3182ce"}>Create Account</Button></Box>
    </div>

  )
}

export default Login
