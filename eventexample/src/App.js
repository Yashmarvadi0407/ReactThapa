import React, { useState } from 'react'


function App(){



let purple='yellow'
const[bg,setBg]=useState(purple)
 let text="click me"
 const[tex,setTex]=useState(text)

function bgChang(){
  
console.log('clicked')
const Green='green'
 setBg(Green)
const textnew="oyyoy 😇 "
 setTex(textnew)
}

 function bgDclick(){
  setBg(purple)
  setTex("Acooouch 🤯 ")
  console.log(setTex)
 }
  return <>
    <div style={{backgroundColor:bg}}>
      <button onMouseEnter={bgChang} onMouseLeave={bgDclick}> {tex}</button>
    </div>
  </>
}
export default App;