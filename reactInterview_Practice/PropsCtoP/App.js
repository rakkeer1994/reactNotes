import React, { useState } from 'react'
import Child from './Child'





 const App=()=>{
     const[print, setPrint]=useState()
     const getData=(data)=>{
       console.log("data is coming from appjs but it is passwd from child",data)
       setPrint(data)
     }
    return(
        
        <>
        <h1>this is parent component of {print} </h1>
        <Child onsubmit={getData}/>
        </>
    )
}
export default App