import React,{useState} from 'react'
import ReactDom from 'react-dom'

function App(){
 const [count,setCount]=useState(0)
 const clickhadler=()=>{
  setCount(count+1)
 }
 const clickhadlerr=()=>{
  setCount(count-1)
 }
  return(
  <><center> <h1> {count}</h1>
  <button onClick={clickhadler}> + </button><span></span>
  <button onClick={clickhadlerr}>-</button></center></>
)
}

ReactDom.render(
  <><App></App> </>,document.getElementById("root")
)