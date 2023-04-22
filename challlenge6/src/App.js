import React ,{useState} from 'react'
function App(){

let time=new Date().toLocaleTimeString()
const [currtime,setCurrtime]=useState(time)
console.log(currtime);
//console.log(setTimeout);
 function changetime(){
  let time=new Date().toLocaleTimeString()
  setCurrtime(time);
 }
 setInterval(changetime,1000)
  return (
    <> <center>
      <h1>{time}</h1>
      
      </center></>
  )
}

export default App