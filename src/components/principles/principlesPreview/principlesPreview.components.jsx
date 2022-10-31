import React from "react";
import "./principlesPreview.styles.scss";

import LineSeperator from "../../../assets/images/line-s1.png";
import LineBg from "../../../assets/images/line5.png";

const PrinciplesPreview = ({ principles }) => {
  return (
    <div id="principlesPreviewComponent">
      {principles.map((principle) => (
        <div className="principles" style={{backgroundColor:principle.color}}>
            <h3>{principle.name}</h3>
            <img src={LineSeperator} alt="" />
            <p>{principle.text}</p>
        </div>
      ))}
    </div>
  );
}

export default PrinciplesPreview;
