import React from 'react'
import { useSelector } from 'react-redux'

const Test = () => {

const value=useSelector((store)=>store.counter.value)
console.log("Printing from test",value)
  return (
    <div
    style={{fontSize:"50px",fontWeight:"bolder",color:"red"}}
    >Test-{value}</div>
  )
}

export default Test