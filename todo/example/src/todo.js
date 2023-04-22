import { useState } from "react";
import Todoform from "./Todoform";
import Todolist from "./Todolist";

function Todo() {
  const [task, setTask] = useState();
  const [listdata, setListdata] = useState([]);
  const [iscomplate, setIscomplate] = useState([]);
  const clickhandler = (e) => {
    e.preventDefault();
    //  console.log("yash");
    setListdata([...listdata, task]);
    setIscomplate([...iscomplate, false]);
    setTask("");
    console.log(task);
    console.log(listdata);
  };

  const deletehandler = (ind) => {
    setListdata(listdata.filter((item, i) => i !== ind));
  };

  const complateHandler = (ind) => {
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

  return (
    <>
      <Todoform
        task={task}
        setTask={setTask}
        listdata={listdata}
        clickhandler={clickhandler}
      ></Todoform>
      <Todolist
        listdata={listdata}
        iscomplate={iscomplate}
        setListdata={setListdata}
        complateHandler={complateHandler}
        deletehandler={deletehandler}
      >
        
      </Todolist>
    </>
  );
}

export default Todo;

