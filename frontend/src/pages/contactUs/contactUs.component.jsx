import React from 'react';

import "./contactUs.styles.scss";

// import "../landingPage/landingPage.styles.scss";

import ContactUsBanner from "../../assets/images/contactUsBanner.jpg";

import ContactUs from '../../components/contactUsForm/contactUs.component';
import ContactDetails from '../../components/contactDetails/contactDetails.component';

const ContactUsPage = () => {
    return(
        <div id ="contactUsComponent">
            <div id='contactUsBanner'>
                <img src={ContactUsBanner} alt="" srcset="" />
                <h2 className='h2'>Contact Us</h2>
            </div>
            <div id='contactUs'>
                <ContactUs></ContactUs>
                <ContactDetails></ContactDetails>
            </div>
        </div>
    );
};

export default ContactUsPage;