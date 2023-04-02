import { useState } from 'react';
import {WomenProducts} from "../components/WomenProducts"
import {Sidebar} from "../components/Sidebar"
import WithSubnavigation from "../components/Navbar";
import LargeWithAppLinksAndSocial from "../components/Footer"
import { Kidsproduct } from '../components/Kidsproduct';
export const Kids = () => {
  const [discount,setdiscount]=useState("")



  return(
<>
    <WithSubnavigation/>
    <div style={{display:'grid', gridTemplateColumns:"repeat(7,1fr)",width:"90%",margin:"auto"}}> 
    <div style={{gridColumnStart:1 ,gridColumnEnd:3,margin:"auto",margin:"5%",marginTop:"15%"}}><Sidebar setdiscount={setdiscount} /></div>
    <div style={{gridColumnStart:3 ,gridColumnEnd:8  ,margin:"5%"}}>  <Kidsproduct discount={discount} /></div>
    
   
    </div>

    <LargeWithAppLinksAndSocial/>
    </>
  )
}