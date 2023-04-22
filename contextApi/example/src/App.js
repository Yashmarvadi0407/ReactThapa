import React, { createContext , useEffect } from 'react'
import ComA from './ComA'

const FirstName=createContext()
const LastName=createContext()
 function App(){
  useEffect(()=>{
    console.log("Appp");
    document.title=`welcom yash`
})
  return (
    <><FirstName.Provider value={"yash"}> <LastName.Provider value={"yash......"}> <ComA></ComA></LastName.Provider> </FirstName.Provider>
      
    </>
  )
 }

 export default App
 export {FirstName,LastName}