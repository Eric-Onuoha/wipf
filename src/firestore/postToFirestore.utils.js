import {initializeApp} from "firebase/app";

import {
    getFirestore,
    doc,
    setDoc,
} from "firebase/firestore";

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
// const analytics = getAnalytics(app);


export const db = getFirestore();

export const addCollectionAndDocuments = async (CollectionKey, docKey, docToAdd, mergeStatus = true) => {
    await setDoc(doc(db, CollectionKey, docKey), docToAdd, mergeStatus);
    console.log("Added Succesfully");
}

// export const addMutipleDocuments = async (CollectionKey, docKeys, docsToAdd, mergeStatus = true) => {
    
// }




  