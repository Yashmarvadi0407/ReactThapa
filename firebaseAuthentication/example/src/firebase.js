
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyCb_svokjZ6HLU1U0Xb2yRHNjuZOCrqRBM",
  authDomain: "fir-auth-project-df062.firebaseapp.com",
  projectId: "fir-auth-project-df062",
  storageBucket: "fir-auth-project-df062.appspot.com",
  messagingSenderId: "458288576444",
  appId: "1:458288576444:web:79f2a99c4ee292a6825db9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth()

export { app, auth };