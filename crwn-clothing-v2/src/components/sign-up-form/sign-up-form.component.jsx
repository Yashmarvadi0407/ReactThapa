import { useState } from "react"
import Forminput from "../form-input/form-input.component";
import { createAuthUserWithEmailAndPassword ,createUserDocumentFromAuth} from "../utils/firebase/firebase.utils";
import "./sign-up-styles.scss";
import Button from "../button/button.components";
const defaultformfields={
    displayname:"",
    email:"",
    Password:"",
    confirmPassword:"",
}

const SignUpForm=()=>{
    const [formFields,setFormFields]=useState(defaultformfields);
    const {displayname,email,Password,confirmPassword}=formFields;
    console.log(formFields);
    const resetFormField=()=>{
       setFormFields(defaultformfields)
    }
    const handleSubmit=async(event)=>{
        event.preventDefault();
    
      if(Password !== confirmPassword){
        alert("password is not match")
        return
      }
    
      try {
        const {user}=await createAuthUserWithEmailAndPassword(email,Password)
       await createUserDocumentFromAuth(user,{displayname})
       resetFormField()     

    
    }catch (error) {
        if(error.code ==="auth/email-already-in-use"){
            alert("cannot create user,email already in use")
        }else{
        console.log(error)
      }}
     }

    const handlerChange=(event)=>{
        const {name,value}=event.target;
        setFormFields({...formFields,[name]:value})
    }
    return(
        <div className="sign-up-container">
        <h2> Dont have an account?</h2>
            <span> Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
          
                <Forminput type="text" 
                lable="Display name"
                onChange={handlerChange}
                 name="displayname" 
                 value={displayname} required></Forminput>

                <Forminput type="email"
                lable="Email"
                 onChange={handlerChange} 
                  name="email" 
                  value={email}required></Forminput>

                <Forminput type="password" 
                lable="Password"
                onChange={handlerChange}
                  name="Password"
                   value={ Password} required></Forminput>

                <Forminput type="Password" 
                label="confirmPassword"
                onChange={handlerChange} 
                name="confirmPassword" 
                value={confirmPassword} required></Forminput>

                <Button  type="submit">Sign Up</Button>
            </form>
        </div>
    )
    }
export default SignUpForm
