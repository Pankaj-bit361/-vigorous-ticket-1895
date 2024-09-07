
import axios from 'axios'
import React, { useEffect, useState } from 'react'

// Widget
const Widget = () => {
  const [men , setMen] = useState([])
  const [women, setWomen] =useState([]);
  const [user,setUser] =useState([]);

  const displayMen =()=>{
    axios.get('http://vastram.pankajvashisht.xyz/men').then((res)=>{
      setMen(res.data);
    })
  }
  const displayWomen =()=>{
    axios.get('http://vastram.pankajvashisht.xyz/women ').then((res)=>{
      setWomen(res.data);
    })
  }
  const displayUser =()=>{
    axios.get('https://63f87b1f5b0e4a127de6dd05.mockapi.io/survey/users ').then((res)=>{
      setUser(res.data);
    })
  }

  useEffect(()=>{
    displayMen()
    displayWomen()
    displayUser()
  },[])
  return (
    <div className="widget">
      <div className="left">
        <span className="title">User</span>
        <span className="counter">{user.length}</span>
      </div>
      <div className="left">
        <span className="title">Men's</span>
        <span className="counter">{men.length}</span>
      </div>
      <div className="left">
        <span className="title">Women's</span>
        <span className="counter">{women.length}</span>
      </div>
      <div className="left">
        <span className="title">All Products</span>
        <span className="counter">{men.length + women.length}</span>
      </div>

    </div>
  )
}

export default Widget
