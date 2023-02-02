import React from "react";
// import bannerIntroShape from "../../assets/images/bannerIntroShape.webp";
import curvedLineBg1 from "../../assets/images/bannerCurvedLine.webp";
import curvedLineBg2 from "../../assets/images/bannerCurvedLine.png";

import "../landingPage/landingPage.styles.scss";

import AnimatedButton from "../../components/animatedButton/animatedButton.component";
import PlainButton from "../../components/plainButton/plainButton.component";
import LandingIntro from "../../components/landingIntro/landingIntro.component";
import BannerImage from "../../components/bannerImage/bannerImage.component";
import CoreAreas from "../../components/coreAreas/coreAreas.components";
import Sponsors from "../../components/sponsors/sponsors.component";
// import RecentEvents from "../../components/recentEvents/recentEvents.component";
import NewsPreviews from "../../components/newsPreviews/newsPreviews.component";
import Programs from "../../components/programs/programs.component";

const LandingPage = () => {
  return (
    <div fluid="true" id="landingPageBody">
      <img id="curvedLineBg1" src={curvedLineBg1} alt=""/>
      <img id="curvedLineBg2" src={curvedLineBg2} alt=""/>

      <div className="landingIntros">

        <div className="landingIntroDiv">
          <LandingIntro />
          <div className="introButtons">
            <form action="/programs">
              <AnimatedButton text="Our Programs "></AnimatedButton>
            </form>
            <form action="/contactus">
              <PlainButton text="Join Us "></PlainButton>
            </form>
          </div>
        </div>

        <div className="hoverAnimation"> <BannerImage/></div>

      </div>

      <div className="coreAreasDiv">
        <CoreAreas/>
      </div>

      <div className="newsPreviewsDiv">
         <NewsPreviews/>
      </div>

      <div className="latestProgramsDiv">
        <Programs/>
      </div>

      <div className="sponsorsDiv">
        <Sponsors/>
      </div>
      
    </div>
  );
};

export default LandingPage;
