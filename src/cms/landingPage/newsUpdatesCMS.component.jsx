import React, {useState, } from "react";
import { useDispatch } from "react-redux";
import { uploadDocWithImage } from "../../firestore/uploadImage.utils";
import { addCollectionAndDocuments } from "../../firestore/postToFirestore.utils";
import { DefaultEditor } from 'react-simple-wysiwyg';

const NewsUpdatesCMS = () => {
    const dispatch = useDispatch();
    const [html, setHtml] = useState(" ");
    const [type, setType] = useState("News Article");
    const [imageUpload, setImageUpload] = useState(null);

    const [formFields, setFormFields] = useState({});
    const {title, videoLink, source, date, link} = formFields;

    const handleChange = (e) => {
        const {name, value} = e.target;

        if(e.target.files && e.target.files !== null) {
            setImageUpload(e.target.files[0]);
        }

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

        if (imageUpload && imageUpload !== null){
            uploadDocWithImage(imageUpload, "NewsUpdates", undefined, formFields);          
        } else {
            addCollectionAndDocuments("NewsUpdates", undefined, formFields);
        }     
    }

    const handleType = (e) => {
        setType(e.target.value);
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
                <label>What type of News Report is this?</label>
                <br />
                <select required name="newsType" onChange={handleType}>
                    <option value="News Article">News Article</option>
                    <option value="Online Video">Online Video</option>
                </select>
                <br />
                <br />
                <label>Title</label>
                <br />
                <textarea required onChange={handleChange} name="title" cols={60} rows={2} value={title}></textarea>


                {(type === "News Article" ? (
                    <div>
                        <br />
                        <br />
                        <label>News Report Link</label>
                        <br />
                        <textarea required onChange={handleChange} name="link" cols={60} rows={2} value={link}></textarea>
                        <br />
                        <label>Upload Image for the Report</label>
                        <br />
                        <input required onChange={handleChange} type="file" name="image"/>
                    </div>
                ) : (
                    <div>
                    <br />
                    <label>Online Video EMBED Link</label>
                    <br />
                    <textarea required onChange={handleChange} name="videoLink" cols={60} rows={1} value={videoLink}></textarea>
                    <br />
                    <br />
                </div>
                ))}


                <label>Summary of the Article/News Report</label>
                <br />
                <DefaultEditor required name='summary' value={html} onChange={handleReportChange} />
                <br />
                <label>Source e.g. Thisday Newspapers</label>
                <br />
                <textarea required onChange={handleChange} name="source" cols={60} rows={1} value={source}></textarea>
                <br />
                <label>Date e.g. 12th June 2021</label>
                <br />
                <textarea required onChange={handleChange} name="date" cols={60} rows={1} value={date}></textarea>
                <br />
                <button>Add News Updates</button>
            </form>
        </div>
    )
}; export default NewsUpdatesCMS;