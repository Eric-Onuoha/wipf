import { useState, useEffect } from "react";
import { updateCoreAreas } from "../../reduxStore/actionDispatches";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addCollectionAndDocuments } from "../../firestore/postToFirestore.utils";

const CoreAreasCMS = () => {

    const dispatch = useDispatch();

    const [formFields, setFormFields] = useState({});
    const {mentorship, advocacy, activism, gbv} = formFields;

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormFields({...formFields, [name]:value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        try{
            dispatch(updateCoreAreas(formFields));
            addCollectionAndDocuments("LandingPage", "CoreAreas", formFields, false);
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
            <h1>Test Core Areas Form</h1>
            <form onSubmit={handleSubmit}>
                <label>Mentorship and Training</label>
                <br />
                <textarea onChange={handleChange} name="Mentorship & Training" cols={80} rows={4} value={mentorship}></textarea>
                <br />
                <label>Political Advocacy</label>
                <br />
                <textarea onChange={handleChange} name="Political Advocacy" cols={80} rows={4} value={advocacy}></textarea>
                <br />
                <label>Socio-Political Activism</label>
                <br />
                <textarea onChange={handleChange} name="Socio-Political Activism" cols={80} rows={4} value={activism}></textarea>
                <br />
                <label>Gender Based Violence</label>
                <br />
                <textarea onChange={handleChange} name="Gender Based Violence" cols={80} rows={4} value={gbv}></textarea>
                <br />
                <button>Add Core Area</button>
            </form>
        </div>
    )
}

export default CoreAreasCMS;