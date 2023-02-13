import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCollectionAndDocuments } from "../../firestore/postToFirestore.utils";
import { updateAboutWIPF } from "../../reduxStore/actionDispatches";

const AboutCMS = () => {

    const dispatch = useDispatch();

    const [formFields, setFormFields] = useState({});
    const {intro, content, image} = formFields;

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormFields({...formFields, [name]:value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        try{
            dispatch(updateAboutWIPF(formFields));
            addCollectionAndDocuments("aboutUs", "About", formFields, false);
        } catch (err){
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
                <textarea onChange={handleChange} name="content" cols={60} rows={3} value={content}></textarea>
                <br />
                <label>Image Url</label>
                <br />
                <textarea onChange={handleChange} name="image" cols={60} rows={3} value={image}></textarea>
                <br />
                <button>Update About WIPF</button>
            </form>
        </div>
    )
}; export default AboutCMS;