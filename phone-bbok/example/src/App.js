import './App.css';
import { useState} from "react"
function App() {
 const [entries,setEntries]=useState([])
 const addEntrytophonebook=(entry)=>{ 
  setEntries( 
    [...entries,entry].sort((a,b)=>a.lastname.toLowerCase() > b.lastname.toLowerCase() ? 1 : -1 )
  )
  }
  return (
    <div className="App">
     <Entryform addEntrytophoneBook={addEntrytophonebook} ></Entryform>
     <Display entries={entries}></Display>
    </div>
  );
}
function Entryform({addEntrytophoneBook}){
  const [firstname,setFirstname]=useState("")
  const [lastname,setLastname]=useState("")
  const [phonenumber,setPhonenumber]=useState("")
  const  handlersubmit=(e)=>{
   e.preventDefault()
   addEntrytophoneBook({firstname,lastname,phonenumber})
   console.log(firstname);
  } 
  return ( 
  <>
 <form onSubmit={handlersubmit} style={{margin:"30px"}}>
 <input type="text" name="firstname" id="firstname" placeholder='First name'
 value={firstname} onChange={(e)=>{ setFirstname(e.target.value)}}/>
<input type="text" name="lasttname" id="lasttname" placeholder='last name'
 value={lastname} onChange={(e)=>{ setLastname(e.target.value)}}/>
<input type="text" name="firstname" id="phonenumber" placeholder='phonenumber'
 value={phonenumber} onChange={(e)=>{ setPhonenumber(e.target.value)}}/>
<button type='submit' onSubmit={handlersubmit}>ADD</button>
  </form> </>
  )
}
function Display({entries}){
    return( <table>
      <thead>
        <tr>
          <th> Firstname</th>
          <th> Lastname</th>
          <th> Phone number</th>
        </tr>
      </thead>
      <tbody>
      { entries.map((entry) => 
      <tr>
        <td> { entry.firstname} </td>
        <td> { entry.lastname} </td>
        <td> { entry.phonenumber} </td>  </tr>
        )}
      </tbody>
    </table>
)}
export default App;
