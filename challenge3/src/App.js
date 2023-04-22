
import React  from "react"

function App() {

  const currDate=new Date().getHours()
  console.log(currDate)
  var greeting=""
  const css={}
  
  if(currDate >=1 && currDate <=11){
    greeting="Good Morning"
    css.color="green"
  }
  else  if(currDate >=12 && currDate <=19){
    greeting="Good Afternoon"
    css.color="Orange"
  }
  else 
  {
    greeting="Good night"
    css.color="black"
  }

  return ( <>
    <div>
    <h1> hello Yashlal,<span style={css}>{greeting} </span></h1>  </div></>
  )
}

export default App;
