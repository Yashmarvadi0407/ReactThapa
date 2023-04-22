
import React, { useState } from 'react';
import ReactDom from 'react-dom';
function App() {
  const [task, setTask] = useState()
  const [listdata, setListdata] = useState([])
  const [iscomplate,setIscomplate]=useState([])
  const eventhandler = (event) => {
    setTask(event.target.value) 
  }
   const complatehandler = (ind) => {
    let temp =iscomplate.map((item,i)=>{
      if(i === ind){
        return true
      }
      else {
        return item
      }
    })
       setIscomplate(temp)
   }
  const handleDelete = (ind) => {
    setListdata(listdata.filter((listdata,i) => i !== ind))
    console.log(listdata);
  }
  const onClickHandler = (event) => {
    event.preventDefault()
    setListdata([...listdata, task])
    setIscomplate([...iscomplate,false])
    setTask("")
  }
  return (
    <div> <center>
      <h1>TODO-LIST</h1>
      <input type='text' name="taskd" placeholder='enter-your-text'
        onChange={eventhandler} value={task} />
      <button onClick={onClickHandler}  > ADD</button><br /><br></br>
      <span> {
        listdata.map((listdata,ind) => {
          console.log(listdata)
          return (<><li key={ind}><span style={iscomplate[ind]?{color:"green",textDecoration:"line-through"}:{}}>{listdata}</span>
            <button onClick={()=> complatehandler(ind)} > Complate </button> <span> <button onClick={() => handleDelete(ind)}> Delete </button></span></li> <br /></>)
        })
      }
      </span></center>
    </div>
  );
}
ReactDom.render(
  <App />,
  document.getElementById('root')
)