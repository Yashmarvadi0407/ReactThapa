import React from 'react'
import {useState} from 'react'
import Countdown from 'react-countdown';

//import { incNumber } from '../../react-redux/reduxapp/src/actions';
function App(){
  var count=0;
  const [num,setNum]=useState(count)

  function incNum(){
    return setNum(num+1)
  }
  function decNum(){
    if(num > 0){
    return setNum(num-1)
    }
    else{
      setNum(0)
      alert("After zero value we are not decress value")
    }
  }

return<>
  <div className='main_div'>
  <div className='center_div'>
    <h1> {num} </h1>
    <div className='btn_div'>
    <button className='btn1' onClick={incNum}>Increm</button>
    <button className='btn2' onClick={decNum}> Decrem</button>
   </div> 
   </div>
    </div>
     </>
}
export default App;