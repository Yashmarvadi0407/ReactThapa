import "./App.css";
import { useState } from "react";

import { TodoForm } from "./TodoForm";
import { Todolist } from "./Todolist";
function Todo() {
  const [listdata,setListdata] = useState([])
  const [iscomplate,setIscomplate] = useState([])
  function listDataHan(listdata){
    console.log(listdata);
    setListdata(listdata);
  }

  function isComplateHan(iscomplate) {
    console.log(iscomplate);
    setIscomplate(iscomplate);
  }
  return (
    <>
      <TodoForm listDataHan={listDataHan} isComplateHan={isComplateHan}></TodoForm>
      <Todolist  listdata={listdata} setListdata={setListdata}  setIscomplate={setIscomplate} iscomplate={iscomplate} complate={iscomplate}></Todolist>
    </>
  );
}

export default Todo;
