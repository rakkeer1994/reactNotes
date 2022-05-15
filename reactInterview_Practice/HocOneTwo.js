import React, { useState } from 'react'
const HocOneTwo=(WrappedComponent)=>{
const HocOneTwo=(props)=>{
    const [count, setCount]=useState(0)
    const increment=()=>{
        setCount(count+1)
    }
    return(
<>
<WrappedComponent count={count} increment={increment}/>
</>
    )
}
return HocOneTwo
}
export default HocOneTwo