import React from 'react'
import { memo } from 'react'
const Child = () => {
    console.log("this is cchild render")
  return (
    <div>
     <h1>this is child component</h1>
    </div>
  )
}

export default memo(Child)