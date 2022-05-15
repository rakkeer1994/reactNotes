import React from 'react'
import { Outlet } from 'react-router-dom'
import { useParams } from 'react-router-dom'
const User = () => {
    
  
  
  const {userId}=useParams()
  return (
    <div>
        <h1>UserId: {userId}</h1>
        <h1>User2</h1>
        <h1>User3</h1>
        <Outlet/>
    </div>
  )
}

export default User