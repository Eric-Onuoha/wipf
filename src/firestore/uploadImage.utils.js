import { useState } from "react";
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";
import {getDownloadURL, ref, uploadBytesResumable, uploadBytes} from "firebase/storage";
import {v4} from "uuid";
import { addCollectionAndDocuments } from "./postToFirestore.utils";

const firebaseConfig = {
    apiKey: "AIzaSyDfBhAMiVeEGR_79hy8WcOyOLAefCvTSlE",  
    authDomain: "womeninpoliticsforumsite.firebaseapp.com",  
    projectId: "womeninpoliticsforumsite",  
    storageBucket: "womeninpoliticsforumsite.appspot.com",  
    messagingSenderId: "304906877555",  
    appId: "1:304906877555:web:b79ecaf0327678847b0806",  
    measurementId: "G-W16E91HVYN"
};

const app = initializeApp(firebaseConfig);
const Storage = getStorage(app);

export const uploadDocWithImage = (fileToUpload, CollectionKey, docKey, docToAdd, mergeStatus) => {
    const fileRef = ref(Storage, `wipf/images/${fileToUpload.name + v4()}`);
    const uploadTask = uploadBytesResumable(fileRef, fileToUpload)
        uploadTask.on("state_changed", (snapshot) => {}, (error) => {
            console.log("Error in image upload", error)
        }, ()=>{
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                docToAdd["image"] = downloadURL;
                addCollectionAndDocuments(CollectionKey, docKey, docToAdd, mergeStatus);
            });
        })
}

export const uploadDocWithImages = (filesToUpload, CollectionKey, docKey, docToAdd, mergeStatus) => {
    console.log(filesToUpload.length);
        let imageList = [];
        filesToUpload.forEach(fileToUpload => {
            const reference = ref(Storage, `wipf/images/${CollectionKey}/${docToAdd.ProgramTitle}/${fileToUpload.name + v4()}`)
            uploadBytes(reference, fileToUpload)
            .then(snapshot => {
            return getDownloadURL(snapshot.ref)
            })
            .then(downloadURL => {
            console.log('Download URL', downloadURL);
            imageList.push(downloadURL);
            
            if(filesToUpload.length == imageList.length){
                docToAdd["images"] = imageList;
                console.log("doc", docToAdd);
                addCollectionAndDocuments(CollectionKey, docKey, docToAdd, mergeStatus);
            }
            })
        }); 
}




//     // let imageList = [];
//     // filesToUpload.forEach(fileToUpload => {
//     //     const fileRef = ref(Storage, `wipf/images/${CollectionKey}/${fileToUpload.name + v4()}`);
//     //     const uploadTask = uploadBytesResumable(fileRef, fileToUpload)
//     //         uploadTask.on("state_changed", (snapshot) => {}, (error) => {
//     //             console.log("Error in image upload", error)
//     //         }, ()=>{
//     //             getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//     //                 console.log(downloadURL);
//     //                 // imageList.push(downloadURL);
//     //             });
//     //         })
//     };

//     // console.log(imageList);

//     // docToAdd["image"] = ["one", "two", "three"];
//     // addCollectionAndDocuments(CollectionKey, docKey, docToAdd, mergeStatus);
//     alert("Succesfully Added To Database"); 

// }

