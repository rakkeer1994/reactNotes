import React from 'react'



const Child=(props)=>{
    const name = props.data
    return(
        <>
        <h2>this child props recieve from parent and {name}</h2>
        </>
    )
}

export default Child