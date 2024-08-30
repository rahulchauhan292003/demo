import React from 'react'
import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

const Like = () => {

    const [islike, setIslike] = useState(false)

    const handlelike =() =>{
        setIslike(!islike)
console.log(islike)
    }

  return (
    <>
      <div onClick={handlelike}>
        
        {islike?<FaHeart size={80} color='red'/> :<FaRegHeart size={80}/> }
      </div>
      <div className='flex m5'>
        <button className='bg-red-700 p-5 m-10'>hello!</button>
        <button className>Hello!</button>
      </div>
      
    </>
  )
}

export default Like
