

import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const Privateroutes = ({children}) => {
  
    const {isAuth}=useSelector((state)=>state.authreducer)
   if(!isAuth){
    <Navigate to="/login" state={location.pathname} replace  />
   }

  
}

export default Privateroutes
