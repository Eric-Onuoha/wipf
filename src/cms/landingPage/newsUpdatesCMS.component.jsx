import React, {useState, } from "react";
import { useDispatch } from "react-redux";
import { uploadDocWithImage } from "../../firestore/uploadImage.utils";
import { addCollectionAndDocuments } from "../../firestore/postToFirestore.utils";
import { DefaultEditor } from 'react-simple-wysiwyg';
import "./newsUpdatesCMS.styles.scss";

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
        <div id="newsUpdatesCMSComponent">
            <form onSubmit={handleSubmit}>
            <h2>Add News Update</h2>
                <label>What type of News Report is this?</label>
                <select required name="newsType" onChange={handleType}>
                    <option value="News Article">News Article</option>
                    <option value="Online Video">Online Video</option>
                </select>


                <label>Title</label>
                <textarea class="longInput" required onChange={handleChange} name="title" cols={60} rows={2} value={title}></textarea>

                <label>Date</label>
                <input required onChange={handleChange} name="date" cols={60} rows={1} value={date} type="date"></input>

                <label>News Report Link</label>
                <textarea class="longInput" required onChange={handleChange} name="link" cols={60} rows={2} value={link}></textarea>

                {(type === "News Article" ? (
                    <div>
                        <label>Upload Image for the Report</label>
                        <input required onChange={handleChange} type="file" name="image"/>
                    </div>
                ) : (
                    <div>
                        <label>Online Video EMBED Link</label>
                        <textarea class="longInput" required onChange={handleChange} name="videoLink" cols={60} rows={2} value={videoLink}></textarea>
                    </div>
                ))}

                <label>Summary of the Article/News Report</label>
                <DefaultEditor required name='summary' value={html} onChange={handleReportChange} />

                <label>Source e.g. Thisday Newspapers</label>
                <textarea required onChange={handleChange} name="source" cols={60} rows={1} value={source}></textarea>

                <button>Add News Updates</button>
            </form>

            <div>
            <h3>Guidelines</h3>
            <p>
                <ol>
                    <li>All form fields are compulsory</li>
                    <li>Report type can either be article or online video on youtube, vimeo or other video platforms</li>
                    <li>News Updates from articles must have ONLY ONE image</li>
                    <li>The image file names MUST NOT include brackets () or other special symbols</li>
                    <li>News summary must not include any external formatting. Please be careful when copying and pasting</li>
                        <ul>
                            <li>For Videos:</li>
                            <ol>
                                <li>News Report link is the usual link copied from your browser url area.</li>
                                <li>To get the embed link you need to select "embed" option after clicking share. Look in the iframe details for src e.g. src = "xyz". In this example xyz will be the embed link</li>
                            </ol>
                        </ul>
                </ol>
            </p>
            </div>
    </div>
    )
}; export default NewsUpdatesCMS;