import React, { useMemo, useState } from 'react'

function Memo(){
 
   const[countone,setCountone]=useState(0)
   const[counttwo,setCounttwo]=useState(0)

   function Incrementone(){
    setCountone(countone+1)
   }
 
   function Incrementtwo(){
    setCounttwo(counttwo+2)
   }

const  isEven=useMemo(()=>{
    let i=0;
    while(i<20000000000)
    i++;
    return countone%2===0

},[countone])

return(<>
    <button onClick={Incrementone}> countone-{countone}</button>
     <span> {isEven?"even":"odd"}</span>
    <button onClick={Incrementtwo}> counttwo-{counttwo}</button> </>
)
}

export default Memo

