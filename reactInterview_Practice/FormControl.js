import React, { useState } from 'react'

 const FormControl=()=>{
     const [name, setName]=useState("")
     const [deptt,setDeptt]=useState("")
     const [display, setDisplay]=useState("")
     const [newentry, setNewentry] = useState([])

     const formHandle=(e)=>{
         e.preventDefault()
         if(name && deptt){
            setDisplay(name)
            const newData={name,deptt}
            setNewentry([...newentry,newData])
            console.log(newentry)
            setName("")
            setDeptt("")
         }
         else {alert("fill all details")}
     }
    //  const eventUp=(e)=>{
    //     setName(e.target.value)
    //     setDeptt(e.target.value)
    //  }
    return(
      <> 
         <h1>this is form data:: {name} </h1>
         <h2>dept: {deptt}</h2>
         <h1>Display Name:: {display} </h1>

         <form onSubmit={formHandle}>
             Name of Students: <input type='text' name='name' value={name}  onChange={(e)=>setName(e.target.value)} placeholder='enter name'/>
             Name of deptt: <input type='text' name='deptt' value={deptt}  onChange={(e)=>setDeptt(e.target.value)} placeholder='enter deptt'/>
             <input type='submit' value='button'/>

         </form>
      </>
    )
}

export default FormControl;