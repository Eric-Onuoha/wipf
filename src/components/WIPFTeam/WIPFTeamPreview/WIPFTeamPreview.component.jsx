import "./WIPFTeamPreview.styles.scss";

import MiniSectionIntro from "../../miniSectionIntro/miniSectionIntro.component";
import SectionIntro from "../../sectionIntro/sectionIntro.component";
import AnimatedButton from "../../animatedButton/animatedButton.component";
import TeamImages from "../../teamImages/teamImages.component";

const WIPFTeamPreview = () =>{
    return(
        <div id="WIPFTeamPreviewComponent">
            <div id="teamIntro">
                <MiniSectionIntro sectionTitle="Our Vibrant Team"></MiniSectionIntro>
            </div>
            <div id="teamImages">
                <TeamImages></TeamImages>
            </div>
        </div>
    )
};

export default WIPFTeamPreview;