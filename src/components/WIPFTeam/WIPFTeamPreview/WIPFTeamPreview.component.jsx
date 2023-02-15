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
                <SectionIntro header="Our Vibrant Team"></SectionIntro>
                <p>Explicabo impedit tempora repudiandae vitae nemo eligendi natus voluptate labore magnam animi molestiae. Architecto saepe perspiciatis hic debitis rerum!</p>
                <AnimatedButton text="Join Our Team "></AnimatedButton>
            </div>
            <div id="teamImages">
                <TeamImages></TeamImages>
            </div>
        </div>
    )
};

export default WIPFTeamPreview;