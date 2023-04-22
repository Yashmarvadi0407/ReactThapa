
import React from 'react'

export const Todolist=({listdata, setListdata,iscomplate,setIscomplate})=>{
    console.log(listdata);
    console.log(setListdata);
    const complatehandler = (ind) => {
        let temp = iscomplate.map((item, i) => {
          if (i === ind) {
            return true;
          }
          return false;
        });
        setIscomplate(temp);
      };

      const deletehandler = (ind) => {
        setListdata(listdata.filter((data, i) => i !== ind));
      };

      return(
    <>
        { listdata.map((listdata, ind) => {
        return (
          <>
            <li key={ind}>
              <span style={iscomplate[ind]?{color:"green" ,textDecoration:"line-through"}:{}}>{listdata}</span>
            </li>
            <button onClick={() => complatehandler(ind)}>Complate</button>
            <button
              onClick={() => {
                deletehandler(ind);
              }}
            >
              delete
            </button>
          </>
        );
      })}
    </>
)
}