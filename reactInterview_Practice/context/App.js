import React, {createContext, useState} from "react";
import Child from "./Child";
import SuperChild from "./SuperChild";
import SiblingChild from "./SiblingChild";
export const GlobalInfo=createContext()
const App1=()=>{
    const[color, setColor]=useState('blue')
    const[day, setDay]=useState("Tuesday")
    const getDay=(item)=>{
        setDay(item)
    }
    return (
        
         <GlobalInfo.Provider value={{appColor:color, name:"rakesh", getDay:getDay}}>
                 <h1>this is App component {day}</h1>
                 <Child/>
                 <SuperChild/>
                 <SiblingChild/>
         </GlobalInfo.Provider>
        
    )
}

export default App1