// import React, { useState } from 'react'

// const User = () => {
//     const [count, setCount]=useState(10)
//     console.log("this is rendered from regular component")
//   return (
//     <>
//     <h1>this is regular component</h1>
//     <button onClick={()=>setCount(count+1)}>UserCountIs:{count}</button>
//     </>
//   )
// }

// export default User

import React, { Component, PureComponent } from 'react'

export class User extends PureComponent {
    constructor(){
        super()
        this.state={
            count:10
        }

    }
    // shouldComponentUpdate(newProps, newState){
    //     if(newState.count !== this.state.count){
    //         return true
    //     }
    //     return false
    // }
  render() {
      console.log("Usercomp rendered")
    return (
        <>
             <h1>this is regular component</h1>
            <button onClick={()=>this.setState({count:this.state.count+1})}>UserCountIs:{this.state.count}</button>
        </>
    )
  }
}

export default User

// pureComponent is avoid shouldcomponentUpdate lifecycle method 
// purecomponent were introduced to enhance the development performance