
import SignUpForm from "../../sign-up-form/sign-up-form.component"
import SignInForm from "../../sign-in-form/sign-in-form.component"
import { signInWithGooglePopup,
    createUserDocumentFromAuth,} from "../../utils/firebase/firebase.utils"




const Authentication=()=>{
    

    return(
        <div>
            <h1> Sign in Page</h1>
            <SignInForm></SignInForm>
            <SignUpForm></SignUpForm>
        </div>
    )
}

export default Authentication;