import "../contatctUsPreview/contactUsPreview.styles.scss";

import AnimatedButton from "../../animatedButton/animatedButton.component";
import MiniSectionIntro from "../../miniSectionIntro/miniSectionIntro.component";

const ContactUsPreview = () => {
    return(
        <div className="contactUsPreviewComponent">
            <div id="intro">
                <MiniSectionIntro sectionTitle = "Contact Us" />
                <h2>Get In Touch</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet quo saepe sequi commodi repudiandae earum, rerum provident illum</p>
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