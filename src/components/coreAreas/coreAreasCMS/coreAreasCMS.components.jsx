import { useState } from "react";

const CoreAreasCMS = () => {
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
                <textarea onChange={handleChange} name="mentorship" cols={80} rows={4} value={mentorship}></textarea>
                <br />
                <label>Political Advocacy</label>
                <br />
                <textarea onChange={handleChange} name="advocacy" cols={80} rows={4} value={advocacy}></textarea>
                <br />
                <label>Socio-Political Activism</label>
                <br />
                <textarea onChange={handleChange} name="activism" cols={80} rows={4} value={activism}></textarea>
            </form>
        </div>
    )
}

export default CoreAreasCMS;