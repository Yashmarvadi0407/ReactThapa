import React,{ useState} from 'react'
import ReactDom from 'react-dom'

function App(){

const [btn,setBtn]=useState("OFF")

const changeHandler=()=>{
  
if(btn === "OFF"){
  setBtn("ON")
}
else{
  setBtn("OFF")
}
}

return(<>
    <button onClick={changeHandler}>{ btn} </button>
  </>)
}



ReactDom.render(<><App></App> </>,document.getElementById("root"))