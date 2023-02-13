import React from "react";
// import rightArrow from "../../assets/images/arrowRight.png";
import rightArrowD from "../../assets/images/arrowRightDark.png";
import rightArrowW from "../../assets/images/arrowRightWhite.png";
import "./plainButton.styles.scss";

const PlainButton = (prop)=>{
    return(
    <div>
        <button id="plainButton">{prop.text}<img id="rightArrowD" className="rightArrow" src={rightArrowD} alt=""/> <img id="rightArrowW" className="rightArrow" src={rightArrowW} alt=""/></button>
    </div>
    )
}

export default PlainButton;