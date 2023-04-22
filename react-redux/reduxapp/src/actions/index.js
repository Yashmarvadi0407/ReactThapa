 function incNumber(num){
    return{
        type:"INCREMENT",
        payload:num
    }
 }
 function decNumber(num){
    return{
        type:"DECREMENT",
        payload:num
    }
 }

 export {incNumber,decNumber}