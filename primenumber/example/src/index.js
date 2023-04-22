
function combination(str){
  var string=[]
  for(var i=0;i<str.length;i++){
    for(var j=0;j<str.length;j++){
      string.push(str.slice(i,j))
    }
  } return string 
  
}
console.log(combination("yash"));


