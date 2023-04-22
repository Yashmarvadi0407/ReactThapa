


function Todoform({task,clickhandler,setTask}) {
    return ( <>
          <form>
            <input type="text"  value={task} placeholder="enter your task" onChange={(e)=>{ setTask(e.target.value)}} />
            <button onClick={clickhandler}> Add</button>
          </form>
    </>);
  }
  
  export default Todoform;
  