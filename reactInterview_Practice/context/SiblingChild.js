import React, {useContext} from "react";
import {GlobalInfo} from './App'
import SuperChild from "./SuperChild";
const SiblingChild=()=>{
    const {appColor, name}=useContext(GlobalInfo)
    return (
        <>
        <h1 style={{color:appColor}}>this is SiblingChild component of {name}</h1>
        {/* <SuperChild/> */}
        </>
    )
}

export default SiblingChild