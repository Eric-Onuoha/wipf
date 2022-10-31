import React from "react";
// import bannerIntroShape from "../../assets/images/bannerIntroShape.webp";
import curvedLineBg1 from "../../assets/images/bannerCurvedLine.webp";
import curvedLineBg2 from "../../assets/images/bannerCurvedLine.png";

import "../landingPage/landingPage.styles.scss";
import "bootstrap/scss/bootstrap.scss";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import AnimatedButton from "../../components/animatedButton/animatedButton.component";
import PlainButton from "../../components/plainButton/plainButton.component";
import LandingIntro from "../../components/landingIntro/landingIntro.component";
import BannerImage from "../../components/bannerImage/bannerImage.component";
import CoreAreas from "../../components/coreAreas/coreAreas.components";
import Sponsors from "../../components/sponsors/sponsors.component";
// import RecentEvents from "../../components/recentEvents/recentEvents.component";
import NewsPreviews from "../../components/newsPreviews/newsPreviews.component";
import LatestPrograms from "../../components/latestPrograms/latestPrograms.component";

const LandingPage = () => {
  return (
    <Container fluid id="landingPageBody">
      <img id="curvedLineBg1" src={curvedLineBg1} alt=""/>
      <img id="curvedLineBg2" src={curvedLineBg2} alt=""/>
      <Row>
        <Col>
          <LandingIntro />
          <div className="introButtons">
            <AnimatedButton text="Our Programs "></AnimatedButton>
            <PlainButton text="Join Us "></PlainButton>
          </div>
        </Col>
        <Col className="hoverAnimation"> <BannerImage/></Col>
      </Row>
      <Row>
        <Col> <CoreAreas/> </Col>
      </Row>
      <Row>
        <Col className="barMargin barPadding"> <NewsPreviews/> </Col>
      </Row>
      <Row>
        <Col className="barMargin barPadding"> <LatestPrograms/> </Col>
      </Row>
      <Row>
        <Col> <Sponsors/> </Col>
      </Row>
    </Container>
  );
};

export default LandingPage;
