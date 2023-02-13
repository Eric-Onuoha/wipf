import "./ovalButton.styles.scss";

import arrowLeftOrange from "../../assets/images/arrowLeftOrange.png";

const OvalButton = () =>{
    return (
        <div id="ovalButtonComponent">
            <button id="ovalButton">
                <img src={arrowLeftOrange} alt="" />
            </button>
        </div>
    )
}

export default OvalButton;