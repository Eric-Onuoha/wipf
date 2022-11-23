import React from "react";
import "./landingIntro.styles.scss";
import BannerText from "../bannerText/bannerText.component";

import LandingImage from "../../assets/images/press conference.jpg"

const LandingIntro = () => {
    return(
        <div id="landingIntroComponent">
            <img id="landingImageMobile" src={LandingImage} alt="" />
            <BannerText text="More Women Should Be Involved In Politics"/>
        </div>
    )
}

export default LandingIntro;