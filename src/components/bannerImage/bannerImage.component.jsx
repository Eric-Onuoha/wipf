import React from "react";
import "./bannerImage.styles.scss";
import bannerImage from "../../assets/images/press conference.jpg";
import circleWBg from "../../assets/images/ngMap.png";
import circle from "../../assets/images/circle1.webp";

const BannerImage = ()=>{
    return(
        <div id="bannerImageDiv">
            <img id="circle" src={circle} />
            <img id="circleWBg" src={circleWBg} />
            <img id="bannerImage" src={bannerImage} alt="Banner Image of WIPF with other women groups hosting a press conference to lauch the Aspirants Website" />
        </div>
    )
}

export default BannerImage;