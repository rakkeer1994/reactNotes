import React, { useState } from 'react'





const Child=(props)=>{
    const[name, setName]=useState("")
    const[dis, setDis]=useState()
    const formHandle=(e)=>{
         e.preventDefault()
         props.onsubmit(name)
         setDis(name)
         setName(e.target.value="")
    }
    return(
        <>
        <h2>Tis is child component</h2>
        <h3>Name for check: {dis}</h3>
        <form onSubmit={formHandle}>
            Name: <input type='text' value={name} onChange={(e)=>setName(e.target.value)} placeholder='enter name' />
            <button type='submit'>ClickMe</button>
        </form>
        </>
    )
}

export default Child