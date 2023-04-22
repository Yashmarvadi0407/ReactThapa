function Todolist({
  listdata,
  setListdata,
  deletehandler,
  complateHandler,
  iscomplate,
}) {
  return (
    <>
      {listdata.map((listdata, ind) => (
        <>
          <li>
       
            <span
              style={
                 iscomplate[ind] 
                  ? { color: "green", textDecoration: "line-through" }
                  : {}
              }
            >
              {listdata}
            </span>
          </li>
          <button onClick={() => complateHandler(ind)}> Complate</button>
          <button onClick={() => deletehandler(ind)}> Delete</button>
        </>
      ))}
    </>
  );
}

export default Todolist;
