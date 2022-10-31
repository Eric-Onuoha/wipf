import "./aboutWIPF.styles.scss";

import MiniSectionIntro from "../miniSectionIntro/miniSectionIntro.component";
import Principles from "../principles/principles.component";

import AboutUsImage from "../../assets/images/press conference.jpg";


const AboutWIPF = () => {
  return (
    <div id="aboutWIPFComponent">
      <div id="aboutWIPFBackground"></div>
      <div id="aboutWIPF">
        <div id="intro">
        <MiniSectionIntro sectionTitle = "Our Background" />
        <h1><span>WIPF:</span> Our Background, Principles and Commitment story</h1>
        </div>
        <div id="content">
          <div id="aboutUsImage"><img src={AboutUsImage} alt="" /></div>
          <div>
            <div id="textContent">
              <h2>Women In Politics Forum, ipsum dolor sit amet consectetur adipisicing elit. Ullam
              minus molestiae tem."</h2>

              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
              minus molestiae temporibus rem nam provident minima unde officia,
              sunt reprehenderit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
              minus molestiae temporibus rem nam provident minima unde officia,
              sunt reprehenderit.
            </div>
              <Principles></Principles>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutWIPF;
