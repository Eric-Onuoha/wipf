import {initializeApp} from "firebase/app";
import objectHash from "object-hash";

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

// const hash = objectHash();

export const addCollectionAndDocuments = async (CollectionKey, docKey, docToAdd, mergeStatus) => {
    if (docKey === undefined){
        docKey = objectHash.MD5(docToAdd);
        docToAdd["id"] = docKey;
    }

    if(docToAdd.ProgramDate && docToAdd.ProgramDate !== undefined){
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const date = new Date(docToAdd.ProgramDate);
        docToAdd["day"] = date.getDay();
        docToAdd["month"] = months[date.getMonth()];
        docToAdd["year"] = date.getFullYear();
    }

    await setDoc(doc(db, CollectionKey, docKey), docToAdd, mergeStatus);
    alert("Added Succesfully");
}





  