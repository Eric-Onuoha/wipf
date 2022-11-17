import React from 'react';

import "../contactUs/contactUs.styles.scss";

// import "../landingPage/landingPage.styles.scss";

import ContactUsBanner from "../../assets/images/contactUsBanner.jpg";

import ContactUsPreview from '../../components/contactUsForm/contatctUsPreview/contactUsPreview.component';
import ContactDetails from '../../components/contactDetails/contactDetails.component';

const ContactUs = () => {
    return(
        <div id ="contactUsComponent">
            <div id='contactUsBanner'>
                <img src={ContactUsBanner} alt="" srcset="" />
                <h2>Contact Us</h2>
            </div>
            <div id='contactUs'>
                <ContactUsPreview></ContactUsPreview>
                <ContactDetails></ContactDetails>
            </div>
        </div>
    );
};

export default ContactUs;