import React, { useState } from 'react';

function App() {
const state=useState()
console.log(state)
 const [count,setCount]=useState(0)
// console.log(setCount)

function inc(){
//  return console.log("updated")
     return setCount(count + 1) 
 //return console.log(count++)
}
  return (
    <> <center><h1>{count}</h1>
    <button onClick={inc}> click hear</button> </center></>
   
   
  );
}

export default App;
