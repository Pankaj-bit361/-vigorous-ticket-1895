

import { useState } from 'react';
import {MensProducts} from "../components/MenProducts"
import {Sidebar} from "../components/Sidebar"
export const Mens = () => {
  const [discount,setdiscount]=useState("")

  return (
    <div style={{width:"100%",margin:"auto"}}> 
  
    <div style={{}}>  <MensProducts discount={discount} /></div>
    
    </div>
  )
}


