import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewsUpdates } from "../../reduxStore/actionDispatches";
import { addCollectionAndDocuments } from "../../firestore/postToFirestore.utils";

const NewsUpdatesCMS = () => {
    const dispatch = useDispatch();
    const defaultFormFields = {};

    const [formFields, setFormFields] = useState({});
    const {title, videoLink, summary, source, date, link} = formFields;

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormFields({...formFields, [name]:value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addNewsUpdates(formFields));
    }

    const newsUpdates = useSelector((state) => state.newsUpdates.newsUpdates) || {};
    
    useEffect(() => {
        if(newsUpdates.length !== 0){
        addCollectionAndDocuments("NewsUpdates", undefined, newsUpdates);
        }
    }, [newsUpdates])


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
                <label>Report Summart</label>
                <br />
                <textarea onChange={handleChange} name="summary" cols={80} rows={4} value={summary}></textarea>
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