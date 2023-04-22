import { useState } from "react";

export const TodoForm = ({listDataHan,isComplateHan}) => {
  const [task, setTask] = useState();
  const [listdata, setListdata] = useState([]);
  const [iscomplate, setIscomplate] = useState([]);
  const clickHandler = (e) => {
    e.preventDefault();
    setListdata([...listdata, task]);
    setTask("");
    setIscomplate([...iscomplate, false]);
    console.log(listdata);
    listDataHan(listdata)
    isComplateHan(iscomplate)
  };
  return (
    <>
      <form>
        <input
          type="text"
          value={task}
          placeholder="Enter your todos"
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
        <button onClick={clickHandler}>ADD</button>
      </form>
    </>
  );
};

