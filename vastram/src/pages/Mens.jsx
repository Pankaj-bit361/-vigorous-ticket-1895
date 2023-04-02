

import { useState } from 'react';
import {MensProducts} from "../components/MenProducts"
import {Sidebar} from "../components/Sidebar"
export const Mens = () => {
  const [discount,setdiscount]=useState("")

  return (
    <div style={{width:"100%",margin:"auto"}}> 
    {/* <div style={{gridColumnStart:1 ,gridColumnEnd:3,margin:"auto",margin:"5%",marginTop:"15%", }}><Sidebar setdiscount={setdiscount} /></div> */}
    <div style={{}}>  <MensProducts discount={discount} /></div>
    
    </div>
  )
}


