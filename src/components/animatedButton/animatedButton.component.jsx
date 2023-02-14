import React from "react";
import rightArrow from "../../assets/images/arrowRightWhite.png";
import "./animatedButton.styles.scss";

const AnimatedButton = (prop)=>{
    return(
    <div>
        <button id="animatedButton">{prop.text}<img src={rightArrow} alt="Click to view Women Aspirants Website"/></button>
    </div>
    )
}

export default AnimatedButton;