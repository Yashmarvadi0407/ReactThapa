// import React ,{createContext,useContext,useState}from 'react'
// import ReactDom from 'react-dom'
// const language=["javascript","python"]
// const LunguageContext=createContext()
// function Mainsection(){
//  const context=useContext(LunguageContext)
//  const [state,setState]=useState(context[0])
//  const clickhandler=()=>{  
//   if(state === "javascript")
//   {
//   setState(context[1])  
//   console.log(context[1]);
//  } else{
//   setState(context[0])
//   console.log(context[0]);
//  } }
// return(<><p> {state}</p>
//       <button onClick={clickhandler}>Toggle Lunguage</button>   
//  </>)
// }
// function App()
// {
//   return(<> <LunguageContext.Provider value={language}> <Mainsection/></LunguageContext.Provider></>)
// }
// ReactDom.render(<App />, document.getElementById("root"))






























import React, { createContext, useContext, useState } from 'react'
import ReactDom from "react-dom"



const Lunguage=["javascript","python"]
const LunguageContext=createContext()


function Mainsection (){
  const context=useContext(LunguageContext)
  const [state,setState]=useState(context[0])
  const clickhandler=()=>{
  if(state === "javascript"){
     setState(context[1])
  }else{
   // console.log(state[0]);
     setState(context[0])
  }}
 return (<>
       <p>{state}</p>
       <button onClick={clickhandler}>Toogle Lunguage</button>
  </>)
}

function App(){
  return(<>
    <LunguageContext.Provider value={Lunguage}> <Mainsection></Mainsection></LunguageContext.Provider>
  </>)
}




ReactDom.render(<App />, document.getElementById("root")) //