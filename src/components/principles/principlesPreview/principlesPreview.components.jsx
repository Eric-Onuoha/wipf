import React from "react";
import "./principlesPreview.styles.scss";

import LineSeperator from "../../../assets/images/line-s1.png";
import LineBg from "../../../assets/images/line5.png";

const PrinciplesPreview = ({ principles }) => {

  const principleTitles = Object.keys(principles);
  const principleContent = Object.values(principles);
  const principleColors = ["#FC6539","#FEA444","#FEA444","#FC6539"]

  return (
    <div id="principlesPreviewComponent">
      {principleTitles.map((principleTitle, i) => (
        <div className="principles" style={{backgroundColor:principleColors[i]}}>
            <h3>{principleTitle}</h3>
            <img src={LineSeperator} alt="" />
            <p>{principleContent[i]}</p>
        </div>
      ))}
    </div>
  );
}

export default PrinciplesPreview;
