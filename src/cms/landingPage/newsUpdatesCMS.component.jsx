import React, {useState, } from "react";
import { useDispatch } from "react-redux";
import { addNewsUpdates } from "../../reduxStore/actionDispatches";
import { addCollectionAndDocuments } from "../../firestore/postToFirestore.utils";
import { getMultipleDocuments } from "../../firestore/getFromFirestore.utils";
import { DefaultEditor } from 'react-simple-wysiwyg';

const NewsUpdatesCMS = () => {
    const dispatch = useDispatch();
    const [html, setHtml] = useState(" ");

    const [formFields, setFormFields] = useState({});
    const {title, videoLink, source, date, link} = formFields;

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormFields({...formFields, [name]:value});
    }

    const handleReportChange = (e) => {
        const {name, value} = e.target;
        setHtml(value);
        setFormFields({...formFields, [name]:value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(formFields[0] === " "){
            delete formFields[0];
          }
      
          try{
            addCollectionAndDocuments("NewsUpdates", undefined, formFields);
            getMultipleDocuments("NewsUpdates").then((NewsUpdatesDB) => dispatch(addNewsUpdates(NewsUpdatesDB)));
          } catch(err){
            console.log(err);
          }
    }



    return (
        <div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <h1>NewsUpdate Form</h1>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <br />
                <input onChange={handleChange} name="title" cols={80} rows={4} value={title}></input>
                <br />
                <label>News Report Link</label>
                <br />
                <input onChange={handleChange} name="link" cols={80} rows={4} value={link}></input>
                <br />
                <label>Video Embed Link</label>
                <br />
                <input onChange={handleChange} name="videoLink" cols={80} rows={4} value={videoLink}></input>
                <br />
                <label>Report Summary</label>
                <br />
                <DefaultEditor name='summary' value={html} onChange={handleReportChange} />
                <br />
                <label>Source e.g. Thisday Newspapers</label>
                <br />
                <input onChange={handleChange} name="source" cols={80} rows={4} value={source}></input>
                <br />
                <label>Date e.g. 12th June 2021</label>
                <br />
                <input onChange={handleChange} name="date" cols={80} rows={4} value={date}></input>
                <br />
                <button>Add News Updates</button>
            </form>
        </div>
    )
}; export default NewsUpdatesCMS;