import { initializeApp } from "firebase/app";
import url from './config'
import axios from "axios";

import {getAuth,GoogleAuthProvider,signInWithPopup} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcKKSafr7Av-3DhIxK1Nsad-2znoclL5E",
  authDomain: "auth-login-402b6.firebaseapp.com",
  projectId: "auth-login-402b6",
  storageBucket: "auth-login-402b6.appspot.com",
  messagingSenderId: "725818933277",
  appId: "1:725818933277:web:96104ff7f683064cfc46f4",
  measurementId: "G-SDR1K2FZ01"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth =getAuth(firebaseApp)



const provider=new GoogleAuthProvider();

const signInWithGoogle=(userlogin)=>{

    signInWithPopup(auth,provider).then((res)=>{

        
       
        axios.post('/registration/g_auth/login',{ name:res.user.displayName,email:res.user.email,g_token:res.user.stsTokenManager.accessToken}).then((response)=>{
            userlogin(response.status);

        })

    }).catch((e)=>{
        console.log(e)
    })
}





export {signInWithGoogle};