import React from 'react'
import Child from './Child'
const Parent=()=>{
    const data = "and name is Props"
    return(
        <>
        <h1>This is Parant Component</h1>
        <Child data={data}/>
        </>
    )
}

export default Parent