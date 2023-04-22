import React, { useState } from "react";
import Squar from "./squar";


function  Board(){

    const [state,setState]=useState(Array(9).fill(null))
    //console.log(state);
    const [isXturn,setIsXturn]=useState(true)


   const checkwinner=()=>{
    const logicwinner=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
  for(let logic of logicwinner){
     const [a,b,c]=logic;
     if(state[a] !== null && state[a] === state[b]  && state[a] === state[c])
  { return state[a] }
    }
    return false
   }
 
 const iswinner=checkwinner()

    const onclickHandler=(index)=>{
     //console.log(index)
     const copystate=[...state];
     copystate[index]= isXturn ? "X": "0"
     setState(copystate)
     setIsXturn(!isXturn)
     //console.log(setIsXturn);
    }

 const resethandler=()=>{
    setState(Array(9).fill(null))
 }

    return(<div>
    <div className="board-container">
    <center><p> { iswinner} is winner</p>
    <br/>
    <p>  player {isXturn ? "X":"0"} turn </p>
    <button onClick={resethandler}>RESET</button> </center>
     <div  className="board-row">
     <Squar onClick={()=>{onclickHandler(0)}} value={state[0]} />
     <Squar onClick={()=>{onclickHandler(1)}} value={state[1]}/>
     <Squar onClick={()=>{onclickHandler(2)}} value={state[2]}/> </div>
     <div className="board-row">
     <Squar onClick={()=>{onclickHandler(3)}} value={state[3]}/>
     <Squar onClick={()=>{onclickHandler(4)}} value={state[4]}/>
     <Squar onClick={()=>{onclickHandler(5)}} value={state[5]}/> </div>
     <div className="board-row">
     <Squar onClick={()=>{onclickHandler(6)}} value={state[6]}/>
     <Squar onClick={()=>{onclickHandler(7)}} value={state[7]}/>
     <Squar onClick={()=>{onclickHandler(8)}} value={state[8]}/> </div>
        </div> 
    </div>)
}


export default Board;