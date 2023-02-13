import React from "react";
import AboutWIPFPreview from "./aboutWIPFPreview/aboutWIPFPreview.component";
import { useSelector } from "react-redux";

const AboutWIPF = () => {
    const aboutDB = useSelector((state) => state.about.about) || {};
    
    const aboutContent = [];
    for (const about in aboutDB){
        aboutContent.push(aboutDB[about]);
    }    


    return(
        <AboutWIPFPreview aboutContent = {aboutContent}></AboutWIPFPreview>
    )
}; export default AboutWIPF;