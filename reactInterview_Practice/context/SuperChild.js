import React, {useContext} from "react";
import {GlobalInfo} from './App'
const day = "sunday"



const SuperChild=()=>{
    const {appColor, name, getDay}=useContext(GlobalInfo)
    return (
        <>
        <h1 style={{color:appColor}}>this is SuperChild component of {name}</h1>
        <button onClick={()=>{getDay(day)}}>ChangeDay</button>
        </>
    )
}

export default SuperChild