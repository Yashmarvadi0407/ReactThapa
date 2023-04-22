import React, { useState } from 'react'

// function App(){

// const [text,setText]=useState("hello yash")
// const change=()=>{

//    const val =text
//    //setText("hello")
 
//     if(val ==="hello yash"){
//       setText("hello")
//     }
//     else{
//       setText("hello yash")
//     }
// }

// return(
// <div> <h1> {text} </h1>
// <button onClick={change}> click hear</button>
// </div>
// )
// }

function App(){

const mydata=[
  {
    id:0,name:"yash",age:22
  },
  {
    id:1,name:"yash1",age:23
  },
  {
    id:2,name:"yash2",age:24
  },
  {
    id:3,name:"yash3",age:25
  },
  {
    id:3,name:"yash3",age:25
  },  {
    id:3,name:"yash3",age:25
  }
]

const [myarray,setMyarray]=useState(mydata)


const cleardata=()=>{
  setMyarray([])
}
return(
  <>
{
  myarray.map((currvalue)=>
    <h1> id:{currvalue.id},name:{currvalue.name},age:{currvalue.age}</h1>
    )
}
<button onClick={cleardata}>clear</button>

  </>
)


}




export default App