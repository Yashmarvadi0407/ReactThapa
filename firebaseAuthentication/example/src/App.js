import { Routes, Route } from "react-router-dom";
import Home from './components/home/home';
import Login from './components/login/login';
import Signup from './components/signup/signup';
import { useEffect, useState } from "react";
import { auth } from "./firebase";


function App() {
  const [username,setUsername]=useState("")
  useEffect(()=>{ auth.onAuthStateChanged((user)=>{
  if(user){
    setUsername(user.displayName);
  }else setUsername("")
  })})
  return (
     <Routes>
      <Route path='/' element={<Home></Home>}/>
      <Route path='/login' element={<Login></Login>}/> 
      <Route path='/signup' element={<Signup></Signup>}/> 
     </Routes>
      );
}

export default App;
