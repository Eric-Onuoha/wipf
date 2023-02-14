import React, {useState} from "react";
import "./contactUsPreview.styles.scss";
import AnimatedButton from "../../animatedButton/animatedButton.component";
import MiniSectionIntro from "../../miniSectionIntro/miniSectionIntro.component";
import { addCollectionAndDocuments } from "../../../firestore/postToFirestore.utils";

const ContactUsPreview = () => {

    const [submit, setSubmit] = useState("");
    const [formFields, setFormFields] = useState({});
    const {name, email, phone, message} = formFields;

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormFields({...formFields, [name]: value});
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        await addCollectionAndDocuments("Contactus", undefined, formFields)
        .then (setSubmit("       Message Received!"))
        .then(setFormFields({
            name: "",
            email: "",
            phone: "",
            message: ""
        }))
    }

    return(
        <div id="contactUsPreviewComponent">
            <div id="intro">
                <MiniSectionIntro sectionTitle = "Contact Us" />
                <h2>Get In Touch</h2>
                <p>Have a question to ask? Want to get in touch with us? Leave a message here. We'll get it and we'll respond!</p>
            </div>
            <div id="form">
                <form onSubmit={handleSubmit}>
                    <input onChange={handleChange} type="text" name="name" placeholder="Full Name" value={name}/>
                    <input onChange={handleChange} type="email" name="email" placeholder="Email" value={email}/>
                    <input onChange={handleChange} type="text" name="phone" placeholder="Phone Number" value={phone}/>
                    <textarea onChange={handleChange} name="message" id="message" cols="30" rows="10" placeholder="Message" value={message}></textarea>
                    <p>{submit}</p>
                    <AnimatedButton id="submitButton" text="Submit Now"></AnimatedButton>
                </form>
            </div>
        </div>
    )
};

export default ContactUsPreview;