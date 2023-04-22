import React from 'react'
import styles from './Login.module.css'
import Inputcontrol from '../inputcontrol/inputcontrol';
import { Link } from 'react-router-dom';

const Login=()=>{
    return(
     <div className={styles.container}>
     <div className={styles.innerBox}>
        <h1 className={styles.heading}>Login </h1>

        <Inputcontrol label="Email" placeholder="Enter Email Address" />
        <Inputcontrol label="Password" placeholder="Enter password" />
       <div className={styles.footer}>
       <button> Login</button>
       <p> Already have an account?{" "}
       <span>
       
        <Link to="/signup"> Sign up</Link>
       </span>
       </p>
       </div>
     </div>
     </div>
    )
}

export default Login;