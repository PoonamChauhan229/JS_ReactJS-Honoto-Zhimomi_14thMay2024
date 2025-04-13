import React from 'react'
import { useParams } from 'react-router-dom'

const Params = () => {
  
  console.log(useParams())
  const {holiday}=useParams()
  console.log(holiday)
  
  // To an Api Call using Params
  
  return (
    <div>
      Params-{holiday}
      <p>I like to vist {holiday}</p>
    </div>
  )
}

export default Params
