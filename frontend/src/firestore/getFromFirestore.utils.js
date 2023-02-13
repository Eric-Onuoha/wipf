import { initializeApp } from 'firebase/app';

import {
    doc,
    getDoc,
    getDocs,
    getFirestore,
    collection,
    // query,
    // getDocs
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

export const db = getFirestore();

export const getSingleDocument = async (collectionKey, documentKey) => {
    const docRef = doc(db, collectionKey, documentKey);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
        return {};
    } 
    const document = docSnap.data();
    return document;
}

export const getMultipleDocuments = async (collectionKey) => {
    const querySnapshot = await getDocs(collection(db, collectionKey));
    let documents = {}
    querySnapshot.docs.map((doc) => { 
        documents[doc.id] = doc.data()
    });
    return documents;
}

