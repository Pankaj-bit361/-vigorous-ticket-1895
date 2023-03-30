import React from 'react'
import Sidebar from '../components/Sidebar'
import { MensProducts } from './MensProduct'

const Mens = () => {
  return (
    <div style={{display:'grid', gridTemplateColumns:"repeat(7,1fr)",width:"90%",margin:"auto"}}> 
    <div style={{gridColumnStart:1 ,gridColumnEnd:3,border:"1px solid black",margin:"auto",margin:"5%"}}><Sidebar /></div>
    <div style={{gridColumnStart:3 ,gridColumnEnd:8  ,margin:"5%"}}>  <MensProducts  /></div>
    
    </div>
  )
}

export default Mens
