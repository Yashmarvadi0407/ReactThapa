import React from 'react'
import About from './About';
import Contact from './Contact';
import Menu from './Menu';
//import Navbar from './Navbar';
import { Routes ,Route } from 'react-router-dom';
 function App(){
  return(
    <>
    <Menu></Menu>
    <Routes>
    <Route exact path='/' Component={About}></Route>
    <Route path='/contact' Component={Contact}></Route>
    </Routes>
     
    </>
  )
 }

 export default App;