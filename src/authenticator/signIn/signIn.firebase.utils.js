import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from 'firebase/auth';

import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDfBhAMiVeEGR_79hy8WcOyOLAefCvTSlE",  
  authDomain: "womeninpoliticsforumsite.firebaseapp.com",  
  projectId: "womeninpoliticsforumsite",  
  storageBucket: "womeninpoliticsforumsite.appspot.com",  
  messagingSenderId: "304906877555",  
  appId: "1:304906877555:web:b79ecaf0327678847b0806",  
  measurementId: "G-W16E91HVYN"
  };

  const firebaseapp = initializeApp(firebaseConfig);

  export const auth = getAuth();

  export const db = getFirestore();

  export const signIn = async (email, password) =>{
    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
  }  

  export const monitorAuthState = (cb) => {
    onAuthStateChanged(auth, cb);
  }


