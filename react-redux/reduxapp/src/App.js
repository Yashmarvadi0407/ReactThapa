import React from "react"
import './App.css'
import { useSelector ,useDispatch} from "react-redux";
import { incNumber,decNumber } from "./actions/index.js";
function App(){
  const myState=useSelector((state)=> state.changeNumber )
  const dispatch=useDispatch()
  return(
    <><div className="container"> 
    <h1> Increament/Decrement Counter</h1>
      <h3>using React and Redux</h3>
      <div className="div1">
        <button className="btn1" onClick={()=>dispatch(decNumber(1))}>-</button>
        <input className="in1" type="text" value={myState}></input>
        <button className="btn2" onClick={()=>dispatch( incNumber(5))}>+</button>
      </div>
      </div>
</>
  )
}

export default App;