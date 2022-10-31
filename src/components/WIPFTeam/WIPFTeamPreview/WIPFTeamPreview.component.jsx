import "./WIPFTeamPreview.styles.scss";

import MiniSectionIntro from "../../miniSectionIntro/miniSectionIntro.component";
import SectionIntro from "../../sectionIntro/sectionIntro.component";
import AnimatedButton from "../../animatedButton/animatedButton.component";
import TeamImagesPreview from "../../teamImages/teamImagesPreview/teamImagesPreview.component";

const WIPFTeamPreview = () =>{
    return(
        <div id="WIPFTeamPreviewComponent">
            <div id="teamIntro">
                <MiniSectionIntro sectionTitle="WIPF Team"></MiniSectionIntro>
                <SectionIntro header="Our Vibrant Team"></SectionIntro>
                <p>Explicabo impedit tempora repudiandae vitae nemo eligendi natus voluptate labore magnam animi molestiae. Architecto saepe perspiciatis hic debitis rerum!</p>
                <AnimatedButton text="Join Our Team "></AnimatedButton>
            </div>
            <div id="teamImages">
                <TeamImagesPreview></TeamImagesPreview>
            </div>
        </div>
    )
};

export default WIPFTeamPreview;