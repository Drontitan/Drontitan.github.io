import React from 'react'
import "../App.css"
import { useSelector,useDispatch } from 'react-redux'
import {increment,decrement} from "../actions/index"
export const Reduxop = () => {

      const mystate = useSelector((state) => state.changethenumber);
      const dispatch =useDispatch();
    return (
    <>
      <div classNameName="main-div">
      

      <div className="container">
  
      <h1>Increment/Decrement counter</h1>
      <h4>using React and Redux</h4>
      
      <div className="quantity">
        <a className="quantity__minus" title="Decrement" onClick={()=>dispatch(decrement())}><span>-</span></a>
        <input name="quantity" type="text" className="quantity__input" value={mystate} />
        <a className="quantity__plus" title="Increment" onClick={()=>dispatch(increment(5))} ><span>+</span></a>
      </div>
  
          </div>
        </div>
    </>
    )
}
