import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCollectionAndDocuments } from "../../firestore/postToFirestore.utils";
import { updateMandate } from "../../reduxStore/actionDispatches";

const MandateCMS = () => {

    const dispatch = useDispatch();

    const [formFields, setFormFields] = useState({});
    const {mission, vision, values, objectives} = formFields;

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormFields({...formFields, [name]:value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateMandate(formFields));
    }

    const mandate = useSelector((state) => state.mandate.mandate);

    useEffect(() => {
        console.log(mandate);

        if(Object.keys(mandate).length !== 0){
            addCollectionAndDocuments("aboutUs", "Mandate", mandate, false);
        }
    }, [mandate]);

    return(        
        <div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <h1>WIPF Mandate Update Form</h1>
            <form onSubmit={handleSubmit}>
                <label>Mission</label>
                <br />
                <textarea onChange={handleChange} name="Mission" cols={60} rows={3} value={mission}></textarea>
                <br />
                <label>Vision</label>
                <br />
                <textarea onChange={handleChange} name="Vision" cols={60} rows={3} value={vision}></textarea>
                <br />
                <label>Values</label>
                <br />
                <textarea onChange={handleChange} name="Values" cols={60} rows={3} value={values}></textarea>
                <br />
                <label>Objectives</label>
                <br />
                <textarea onChange={handleChange} name="Objectives" cols={60} rows={3} value={objectives}></textarea>
                <br />
                <button>Update WIPF Mandate</button>
            </form>
        </div>
    )
}; export default MandateCMS;