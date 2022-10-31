import React from "react";

import "./coreAreasPreview.styles.scss";
import "bootstrap/scss/bootstrap.scss";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import PlainButton from "../../plainButton/plainButton.component";

const CoreAreasPreview = ({ areas }) => {
  return (
    <div className="coreAreaPreviewPage">
      {areas.map((area) => (
        <div className="coreAreaPreview" style={{backgroundColor: area.colour}}>
          <h1>{area.name}</h1>
          <span>
            <p>
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
