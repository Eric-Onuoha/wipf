import React from "react";

import "./coreAreasPreview.styles.scss";

import PlainButton from "../../plainButton/plainButton.component";

const CoreAreasPreview = ({ areas }) => {
  return (
    <div className="coreAreaPreviewComponent">
      {areas.map((area) => (
        <div className="coreAreaPreview" style={{backgroundColor: area.colour}} key={area.name}>
          <h1 className="h2">{area.name}</h1>
          <span>
            <p className="p2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
              perspiciatis dolore. Odit esse quasi, laborum libero blanditiis ex
              eaque harum dignissimos nesciunt, recusandae aliquid repudiandae.
            </p>
            <PlainButton text="Read Details "></PlainButton>
          </span>
        </div>
      ))}
    </div>
  );
};

export default CoreAreasPreview;
