import React from "react";
import "../bannerText/bannerText.styles.scss";

const BannerText = (prop)=>{
    return(
        <div id="bannerTextComponent">
            <h1 className="h1">{prop.text}</h1>
        </div>
    )
}

export default BannerText;