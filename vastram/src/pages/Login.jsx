import React, { useState } from 'react'
import { auth } from '../firebase';
import axios from "axios"
import OtpInput from "otp-input-react"
import { RecaptchaVerifier, signInWithPhoneNumber, } from 'firebase/auth';
import { Box, Button, Input,PinInput,PinInputField,Text } from '@chakra-ui/react';

import { useEffect } from 'react';
import {  Link, useNavigate } from 'react-router-dom';
import {Toaster,toast} from "react-hot-toast"
import Swal from 'sweetalert2'
import { async } from '@firebase/util';
import WithSubnavigation from '../components/Navbar';
import LargeWithAppLinksAndSocial from '../components/Footer';
export const Login = () => {
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
  let flag=false


//for(var i=0;i<)

  data.map((item)=>{
if(checkemail==="admin123@gmail.com" && checkpss==="admin"){
  navigate("/Admin");
  flag=true
}


else if    (item.Email===checkemail && item.Password===checkpss){
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Login Success',
        showConfirmButton: false,
        timer: 1500
      })
      navigate("/")
    flag=true;
    
    
    }
  

  })
console.log(flag)

if(flag===false){
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: "Wrong email or password",
   
  })
}

}
console.log(data)
// const clicked=()=>{
//   navigate("/admin")
// }
/////







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
      
     toast.success('Otp Send Successfully')
      
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
        title: 'Login Successful',
        showConfirmButton: false,
        timer: 1500
      })
      navigate("/")
      }).catch((error) => {
       wrongalert()
      });
}

  return (

    <>
    <WithSubnavigation/>
    <div>
   
<Button mt={"2%"} color="white" bg={"#721f1f"} onClick={()=>setchnage(!change)}>{change?"Sign in using Number":"Sign in using Email"}</Button>

{change?<Box pt={"5%"} w={"50%"} m="auto" >
<Text fontSize={"xl"} textAlign="left">My Account</Text>
<Input mt={"3%"} placeholder="Email" value={checkemail} onChange={(e)=>setcheckemail(e.target.value)}/>
<Input mt={"3%"} placeholder="Password" value={checkpss} onChange={(e)=>setcheckpss(e.target.value)}  />
<Button onClick={onsubmit} mt={"3%"} color="white" bg={"#721f1f"} w={"100%"}>Sign In</Button>
</Box>:<Box> 
<Toaster  toastOptions={{duration:1000}}/>
 <Box id="recaptcha-container" > </Box>
    
   {change2? <Box w={"50%"}  margin="auto">  <Input w={"100%"} mt={"3%"} type="number" placeholder='Enter Mobile Number' value={ph} onChange={(e)=>setph(e.target.value)} />
      <Button   color="white" bg={"#721f1f"} w={"100%"} mt={"3%"} onClick={onSingup}>Send otp</Button> </Box>:
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

       <Button w={"100%"}  color="white" bg={"#721f1f"} onClick={onOtpVerify}>Verify</Button>
       </Box>
       }
  
     
      </Box>
      }
<Text fontSize={"14px"} m="auto" w={"50%"} mt={"2%"}>By signing into your account,you agree</Text>
<Text fontSize={"14px"} m='auto' w={"50%"}><span>to Belks's </span><span style={{color:"red"}}>Privacy Policy </span><span> & </span> <span style={{color:"red"}}> Terms of Use</span></Text>
    <hr style={{width:"50%"}}/>
    <Link to="/signup"> <Box  mt={"2%"}>
  <Button   bg={"#721f1f"} background={"white"} border={"1px solid #721f1f"} w={"50%"} m="auto" color={"#721f1f"}>Create Account</Button></Box></Link>
    </div>
    <LargeWithAppLinksAndSocial/>
</>
  )
}