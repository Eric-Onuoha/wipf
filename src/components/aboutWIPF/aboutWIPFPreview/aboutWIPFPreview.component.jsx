import "./aboutWIPFPreview.styles.scss";
import parse from "html-react-parser";
import MiniSectionIntro from "../../miniSectionIntro/miniSectionIntro.component";
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
              <div id="aboutUsImage">
                <img src={about.image} alt="" />
                  <p>Barr. Ebere Ifendu, President, Women In Politics Forum</p>
              </div>

                <div>
                  <div id="textContent">
                    <h2>{parse(about.intro)}</h2>
                    <p className="p1">{parse(about.content)}</p>
                  </div>
              </div>
            </div>
        </div>
      ))}
      </div>
  );
};

export default AboutWIPFPreview;
