import "./aboutWIPFPreview.styles.scss";

import MiniSectionIntro from "../../miniSectionIntro/miniSectionIntro.component";
import Principles from "../../principles/principles.component";
import AboutUsImage from "../../../assets/images/press conference.jpg";


const AboutWIPFPreview = ({aboutContent}) => {
  return (
    <div id="aboutWIPFComponent">

        <div id="aboutWIPFBackground"></div>
        {aboutContent.slice(0,1).map((about)=>(
        <div id="aboutWIPF">
            <div id="intro">
              <MiniSectionIntro sectionTitle = "Our Background" />
              <h1 className="h2"><span>WIPF:</span> Our Background, Principles and Commitment story</h1>
            </div>

            <div id="content">
              <div id="aboutUsImage"><img src={AboutUsImage} alt="" /></div>

                <div>
                  <div id="textContent">
                    <h2>{about.intro}</h2>{about.content}
                  </div>
                  <Principles></Principles>
              </div>
            </div>

        </div>
      ))}
      </div>
  );
};

export default AboutWIPFPreview;
