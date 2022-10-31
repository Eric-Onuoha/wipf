import React, {Fragment} from "react";
import "../bannerText/bannerText.styles.scss";

const BannerText = (prop)=>{
    return(
        <Fragment>
            <h1 id="bannerText">{prop.text}</h1>
        </Fragment>
    )
}

export default BannerText;