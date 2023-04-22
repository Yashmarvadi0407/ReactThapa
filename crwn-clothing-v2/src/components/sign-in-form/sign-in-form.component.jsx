import { useState } from "react"
import Forminput from "../form-input/form-input.component";
import { signInWithGooglePopup ,signInAuthUserWithEmailAndPassword,createUserDocumentFromAuth} from "../utils/firebase/firebase.utils";
import "./sign-in-styles.scss"
import  Button,{ BUTTON_TYPE_CLASSES } from "../button/button.components";
const defaultformfields={
    email:"",
    Password:"",
  
}

const SignInForm=()=>{
    const [formFields,setFormFields]=useState(defaultformfields);
    const {email,Password}=formFields;
    console.log(formFields);
    const resetFormField=()=>{
       setFormFields(defaultformfields)
    }
    const signInwithGoogle= async()=>{
        const {user}=await signInWithGooglePopup()
         await createUserDocumentFromAuth(user)
}


    const handleSubmit=async(event)=>{
        event.preventDefault();
    
      try {
        const response= await signInAuthUserWithEmailAndPassword(email,Password)
        console.log(response);
        resetFormField()     
    }catch (error) {
        }
     }

    const handlerChange=(event)=>{
        const {name,value}=event.target;
        setFormFields({...formFields,[name]:value})
    }
    return(
        <div className="sign-up-container">
        <h2> Already  have an account?</h2>
            <span> Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
          
               
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
                   <div className="buttons-container">
                   <Button type="submit">Sign In</Button>
                   <Button type="button" buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInwithGoogle} > Google Sign In</Button>
                
                   </div>
            </form>
        </div>
    )
    }
export default SignInForm
