import React, { useState } from 'react'
import {User} from './User'
const App = () => {
    const[fleg, setFleg]=useState(true)
    console.log("This render from App Component")
  return (
    <>
     <h1>Hello Good {fleg ? "Morning" : "Evening"}!!</h1>
     <button onClick={()=>setFleg(!fleg)}>ChangReet</button>
     <User/>
    </>
  )
}

export default App