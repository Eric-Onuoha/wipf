import { useState, useEffect } from "react";
import { updateCoreAreas } from "../../../reduxStore/actionDispatches";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addCollectionAndDocuments } from "../../../firestore/postToFirestore.utils";

const CoreAreasCMS = () => {

    const dispatch = useDispatch();

    const defaultFormFields = {
        mentorship: " ",
        advocacy: " ",
        activism: " "
    };

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {mentorship, advocacy, activism} = formFields;

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormFields({...formFields, [name]:value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateCoreAreas(formFields));
    }

    const coreAreas = useSelector((state)=> state.coreAreas.coreAreas);

    useEffect(() => {
        if(coreAreas.length != 0){
            console.log(coreAreas);
            addCollectionAndDocuments("LandingPage", "CoreAreas", coreAreas, false);
        }
    }, [coreAreas]);

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
                <textarea onChange={handleChange} name="mentorship" cols={80} rows={4} value={mentorship}></textarea>
                <br />
                <label>Political Advocacy</label>
                <br />
                <textarea onChange={handleChange} name="advocacy" cols={80} rows={4} value={advocacy}></textarea>
                <br />
                <label>Socio-Political Activism</label>
                <br />
                <textarea onChange={handleChange} name="activism" cols={80} rows={4} value={activism}></textarea>
                <br />
                <button>Add Core Area</button>
            </form>

            <p1>Mentorship: {coreAreas.mentorship}</p1>
            <p1>Advocacy: {coreAreas.advocacy}</p1>
            <p1>activism: {coreAreas.activism}</p1>
        </div>
    )
}

export default CoreAreasCMS;