import "../contatctUsPreview/contactUsPreview.styles.scss";

import AnimatedButton from "../../animatedButton/animatedButton.component";
import MiniSectionIntro from "../../miniSectionIntro/miniSectionIntro.component";

const ContactUsPreview = () => {
    return(
        <div id="contactUsPreviewComponent">
            <div id="intro">
                <MiniSectionIntro sectionTitle = "Contact Us" />
                <h2>Get In Touch</h2>
                <p>Have a question to ask? Want to get in touch with us? Leave a message here. We'll get it and we'll respond!</p>
            </div>
            <div id="form">
                <form action="#" method="post">
                    <input type="text" aria-label="Name" placeholder="Name"/>
                    <input type="text" aria-label="Name" placeholder="Email"/>
                    <input type="text" aria-label="Name" placeholder="Phone Number"/>
                    <textarea name="message" id="message" cols="30" rows="10" placeholder="Message"></textarea>
                    <AnimatedButton id="submitButton" text="Submit Now"></AnimatedButton>
                </form>
            </div>
        </div>
    )
};

export default ContactUsPreview;