import { initializeApp }from 'firebase/app';
import { getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
  createUserWithEmailAndPassword,
signInWithEmailAndPassword} from 'firebase/auth'
    import {
      getFirestore,
      doc,
      getDoc,
      setDoc

    } from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyDjhr4N3qIQ6JcqX16-q4UHH4yCsmR1cG8",
    authDomain: "crwn-clothing-db-5dc9c.firebaseapp.com",
    projectId: "crwn-clothing-db-5dc9c",
    storageBucket: "crwn-clothing-db-5dc9c.appspot.com",
    messagingSenderId: "892485613404",
    appId: "1:892485613404:web:aff0ffb8a96c69df16b399",
    measurementId: "G-4E55J8JLP3"
  };
  
 
  const firebaseApp = initializeApp(firebaseConfig);


  const googleProvider=new GoogleAuthProvider()

  googleProvider.setCustomParameters({
    prompt:"select_account"
  })

  export const auth=getAuth();

 export const signInWithGooglePopup=()=> signInWithPopup(auth,googleProvider)
 export const signInWithGoogleRedirect=()=> signInWithRedirect(auth,googleProvider)

 export const db=getFirestore()

 export const createUserDocumentFromAuth=async(userAuth,additionalInformation={})=>{
  if(!userAuth) return;    
  const userDocRef=doc(db,"user",userAuth.uid)
      console.log(userDocRef);
  
      const userSnapShot=await getDoc(userDocRef)
      if(!userSnapShot.exists()){
        const {displayname,email}=userAuth
        const createAt=new Date()
        try{
          await setDoc(userDocRef,{
            displayname,email,createAt,...additionalInformation
          })
        }
        catch(err){
          console.log("error creating the user",err.message);
      }
 }
 return userDocRef
}

export const createAuthUserWithEmailAndPassword= async(email,Password)=>{
 
 if(!email || !Password) return;
  return await createUserWithEmailAndPassword(auth,email,Password)
}
export const signInAuthUserWithEmailAndPassword= async(email,Password)=>{
 
  if(!email || !Password) return;
   return await createUserWithEmailAndPassword(auth,email,Password)
 }
 // 
//   export const signInWithGooglePopup=()=>
//     signInWithPopup(auth,provider)
  