import React,{useEffect} from 'react'
import { FirstName } from './App';
 function ComC(){
    console.log("ComC");
    return(
        <FirstName.Consumer>{()=>{
            return( <p> hello {FirstName} </p>)
        }}</FirstName.Consumer>
    )
 }

 export default ComC;