import React from 'react'
import { useState } from "react"


const Counter = () => {
    const [count, setCount] = useState(0)

    const handleInc =() =>{
        setCount(count+1)

}
const handleDesc =() =>{
    if(count<=0)return
    setCount(count-1)
}
  return (
    <div>
      <h1>count : {count} </h1>
      <div>
        <button onClick={handleInc}>Increase</button>
        <button onClick={handleDesc}>Decrease</button>
      </div>
    </div>
  )
}

export default Counter
