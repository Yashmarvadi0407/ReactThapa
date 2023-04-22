import React,{useState} from 'react'

function App(){
  const [name,setName]=useState("")
  const [fullname,setFullname]=useState("")
  const [lastname,setLastname]=useState("")
  const [lastnamenew,setLastnamenew]=useState("")


function inputEvent(event){
  //console.log(event.target.value)
  setName(event.target.value)
  }

  function onSubmits(event){
    event.preventDefault()
    setFullname(name)
    setLastnamenew(lastname)
  }

  function inputEventTwo(event){
    //console.log(event.target.value)
    setLastname(event.target.value)
    }
  
  return (
    <div>
    <form onSubmit={onSubmits}>
      <div>
      <h1> Hello {fullname}{lastnamenew}</h1>
      <input type="text" 
      className='div' 
      placeholder='Enter your name'
      onChange={inputEvent}
      value={name}>

      </input>
      <input type="text" 
      className='div1' 
      placeholder='Enter your last name'
      onChange={inputEventTwo}
      value={lastname}></input>
      <button >Submit</button>
      </div>
      </form>
    </div>
  )
}

export default App