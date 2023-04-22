import React, { useState } from 'react'
import styles from './signup.module.css'
import Inputcontrol from '../inputcontrol/inputcontrol';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../firebase';

const Signup=()=>{
const  navigaet=useNavigate()
 const [values,setValues]=useState({
    name:"",
    email:"",
    pass:"",
 })
 const [errorMsg,setErrorMsg]=useState()
 const [submitButtonDisabled,setSubmitButtonDisabled]=useState(false)
  const handlesubmision=()=>{
    if(!values.name || !values.email ||!values.pass){
        setErrorMsg("Fill all fields")
    }
    setErrorMsg(" ")
    setSubmitButtonDisabled(true)
    createUserWithEmailAndPassword(auth,values.email,values.pass)
    .then(async(response)=>{ console.log(response);
    const user=response.user;
   await updateProfile(user,{
        displayName:values.name
    })
     navigaet("/") })
    .catch((err)=>{
        setSubmitButtonDisabled(false)
        setErrorMsg(err.message)})
  }



    return(
     <div className={styles.container}>
     <div className={styles.innerBox}>
        <h1 className={styles.heading}>Signup </h1>

        <Inputcontrol  onChange={(event)=>{setValues((prev)=>({...prev,name:event.target.value}))}} label="Name" placeholder="Enter ypur name" />
        <Inputcontrol  onChange={(event)=>{setValues((prev)=>({...prev,email:event.target.value}))}} label="Email" placeholder="Enter Email Address" />
        <Inputcontrol  onChange={(event)=>{setValues((prev)=>({...prev,pass:event.target.value}))}} label="Password" placeholder="Enter password" />


       <div className={styles.footer}>
       <p className={styles.error}>{errorMsg}</p>
       <button onClick={handlesubmision} disabled={submitButtonDisabled }> Signup</button>
       <p> Already have an account?{" "}
       <span>
       
        <Link to="/login"> Login</Link>
       </span>
       </p>
       </div>
     </div>
     </div>
    )
}

export default Signup;