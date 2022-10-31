
import "./aboutUs.styles.scss";

import WIPFTeamPreview from "../../components/WIPFTeam/WIPFTeamPreview/WIPFTeamPreview.component";
import PageIntro from "../../components/pageIntro/pageIntro.component";
import AboutWIPF from "../../components/aboutWIPF/aboutWIPF.component";
import CoreAreas from "../../components/coreAreas/coreAreas.components";
import Sponsors from "../../components/sponsors/sponsors.component";

const AboutUs = () =>{
    return(
        <div id="aboutUsPage">
            <PageIntro pageTitle="About Us"></PageIntro>
            <AboutWIPF></AboutWIPF>
            <WIPFTeamPreview></WIPFTeamPreview>
            <CoreAreas></CoreAreas>
            <Sponsors></Sponsors>
        </div>
    )
}

export default AboutUs;