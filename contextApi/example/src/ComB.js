import React, { useContext } from 'react'
import { FirstName,LastName } from './App'
 
function ComB(){
  console.log("ComB");
  const fn=useContext(FirstName)
  const ln=useContext(LastName)
    return (
    <>
      <h1> hello {fn} {ln}</h1>
    </>
  )
 }

 export default ComB