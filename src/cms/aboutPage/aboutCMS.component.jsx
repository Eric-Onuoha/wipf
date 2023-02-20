import React, { useState } from "react";
import { uploadDocWithImage } from "../../firestore/uploadImage.utils";
import { DefaultEditor } from 'react-simple-wysiwyg';


const AboutCMS = () => {

    const [formFields, setFormFields] = useState({});
    const {intro, content, image} = formFields;
    const [imageUpload, setImageUpload] = useState(null);
    const [html, setHtml] = useState(" ");


    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormFields({...formFields, [name]:value});

        if(e.target.files !== null) {
            setImageUpload(e.target.files[0]);
        }
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
            uploadDocWithImage(imageUpload, "aboutUs", "About", formFields, false);          
        } catch(err){
            console.log(err);
        }
    }

    return(        
        <div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <h1>About WIPF Update Form</h1>
            <form onSubmit={handleSubmit}>
                <label>Introduction</label>
                <br />
                <textarea onChange={handleChange} name="intro" cols={60} rows={3} value={intro}></textarea>
                <br />
                <label>Content</label>
                <br />
                <DefaultEditor name='content' value={html} onChange={handleReportChange} />
                <br />
                <label>Upload Image</label>
                <br />
                <input required onChange={handleChange} type="file" name="image"/>
                <br />
                <button>Update About WIPF</button>
            </form>
        </div>
    )
}; export default AboutCMS;