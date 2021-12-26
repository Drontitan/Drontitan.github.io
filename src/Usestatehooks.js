import React from 'react'
import { useState } from 'react';
export const Usestatehooks = () => {
    const [count, setcount] = useState(0)
   
    const increment=()=>{
     setcount(count +1)
    }
    const decrement=()=>{
        setcount(count -1)
    }
    return (
        <div>
            welcome to my counter guys 
            <p>the count is as :{count}</p>
            <button onClick={increment}>+</button>
            <button  onClick={decrement}>-</button>
        </div>
    )
}
