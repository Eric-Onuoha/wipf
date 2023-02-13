import "./aboutUs.styles.scss";

import WIPFTeam from "../../components/WIPFTeam/WIPFTeam.component";
import PageIntro from "../../components/pageIntro/pageIntro.component";
import AboutWIPF from "../../components/aboutWIPF/aboutWIPF.component";
import CoreAreas from "../../components/coreAreas/coreAreas.components";
import Sponsors from "../../components/sponsors/sponsors.component";

const AboutUs = () =>{
    return(
        <div id="aboutUsPage">
            <PageIntro pageTitle="About Us"></PageIntro>
            <AboutWIPF></AboutWIPF>
            <WIPFTeam></WIPFTeam>
            <CoreAreas></CoreAreas>
            <Sponsors></Sponsors>
        </div>
    )
}

export default AboutUs;