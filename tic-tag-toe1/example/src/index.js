import React, { useState } from "react";
import ReactDom from "react-dom";

function Squar(props) {

  return (
    <>
      <div onClick={props.onClick}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100px",
          width: "100px",
          border: "1px solid",
        }}
      >
        <h1> { props.value}</h1>
      </div>
    </>
  );
}

function Board() {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXturn,setIsXturn]=useState(true)
  const clikchandler=(index)=>{
    console.log(index);
     const copystate=[...state]
     copystate[index]= isXturn ? "X":"0"
     setState(copystate)
     setIsXturn(!isXturn)  
  }

   const checkwinner=()=>{
    const winnerlogic=[
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]
for(let logic of winnerlogic){
  const [a,b,c]=logic
  if(state[a] !== null && state[a] === state[b] && state[a] === state[c]){
    return state[a]
}
}
return false
}
const iswinner=checkwinner()
const resethandler=()=>{
  setState(Array(9).fill(null))
}
 return (
    <> <p> {iswinner}   </p>
    <button onClick={resethandler}> Reset</button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <Squar onClick={()=> clikchandler(0) }  value={state[0]}/>
          <Squar onClick={()=> clikchandler(1) }  value={state[1]}/>
          <Squar onClick={()=> clikchandler(2) } value={state[2]} />
        </div>
        <div>
          <Squar value={state[3]} onClick={()=> clikchandler(3) } />
          <Squar value={state[4]} onClick={()=> clikchandler(4) }/>
          <Squar value={state[5]} onClick={()=> clikchandler(5) }/>
        </div>
        <div>
          <Squar value={state[6]} onClick={()=> clikchandler(6) } />
          <Squar value={state[7]} onClick={()=> clikchandler(7) }/>
          <Squar value={state[8]} onClick={()=> clikchandler(8) }/>
        </div>
      </div> 
    
    </>
  );
      }

function App() {
  return (
    <>
      <Board></Board>
    </>
  );
}

ReactDom.render(
  <>
    <App></App>
  </>,
  document.getElementById("root")
);
