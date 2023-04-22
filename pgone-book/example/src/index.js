import React,{useState} from 'react'
import ReactDom from 'react-dom'


function EntryForm({addentryBook}){
 const [firstName,setFirstName]=useState()
 const [lastName,setLastName]=useState()
 const [Phonenumber,setPhonenumber]=useState()

 const submithandle=(e)=>{
   e.preventDefault()
   addentryBook({firstName,lastName,Phonenumber})
   setFirstName("")
   setLastName("")
   setPhonenumber("")
 }
 return (<>
  <center>
  <form>
    <input type="text"  value={firstName} onChange={(e)=>{setFirstName(e.target.value)}} placeholder='enter your first name'/> <span></span>
    <input type="text"  value={lastName} onChange={(e)=>{setLastName(e.target.value)}} placeholder='enter your last name'/> <span></span>
    <input type="text"  value={Phonenumber} onChange={(e)=>{setPhonenumber(e.target.value)}} placeholder='enter your number'/> <span></span>
    <button onClick={submithandle}> Add</button>
  </form>
  </center>
 </>
 )

}


function Display({enteries}){
  return(
    <> <center>
      <table>
        <thead> 
        <tr>
          <th> First name</th>
          <th> last name</th>
          <th> phone number</th>
        </tr></thead>
        <tbody>
        { enteries.map((entry,id)=>{
            return(
            <tr key={id}>
            <th>{entry.firstName} </th>
            <th> {entry.lastName}</th>
            <th>{entry.Phonenumber}</th>
          </tr>)
          })
        }
        </tbody>
      </table>
      </center>
    </>
  )
}


function App(){
 const [enteries,setEnteries]=useState([])
  const addentrybook=(entry)=>{
    setEnteries([...enteries,entry].sort((a,b)=>a.lastName.toLowerCase() > b.lastName.toLowerCase() ? 1: -1))
  }

return(
  <> <EntryForm addentryBook={addentrybook}></EntryForm>
  <Display enteries={enteries}></Display>
  </>
)

}
ReactDom.render(<> <App></App></>,document.getElementById("root"))