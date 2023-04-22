import './App.css';
import {useState} from "react"

const Add=()=>{
 const [state,setState]=useState(" hekkkkkkkk")

const Add1=()=>{

  const [data,setData]=useState(state)
  return( <>{data} </>)
}
  return(
    <>
       <h1> <Add1></Add1> </h1>
    </>
  )
}

function App() {
  return ( <Add></Add>);
}

export default App;
