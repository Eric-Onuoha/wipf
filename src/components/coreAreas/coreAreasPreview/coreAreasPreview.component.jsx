import React from "react";

import "./coreAreasPreview.styles.scss";

import PlainButton from "../../plainButton/plainButton.component";

const CoreAreasPreview = ({ areas }) => {
  const areaTitles = Object.keys(areas);
  const areaContent = Object.values(areas);
  return (
    <div className="coreAreaPreviewComponent">
      {areaTitles.map((areaTitle, i) => (
        <div className="coreAreaPreview" key={areaTitle}>
          <h1 className="h2">{areaTitle}</h1>
          <span>
            <p className="p2">
              {areaContent[i]}
            </p>
            <PlainButton text="Read Details "></PlainButton>
          </span>
        </div>
      ))}
    </div>
  );
};

export default CoreAreasPreview;
