import React from "react";


function  Squar(props){
    return(<>
   
    <div  onClick={props.onClick}
    style={{border:"1px solid", 
    height:"100px",
     width:"100%",
     display:"flex",
     justifyContent:"center",
     alignItems:"center"
     }}
    className="board-container">
        <h5> {props.value}</h5>
        </div>
    </>)
}


export default Squar;