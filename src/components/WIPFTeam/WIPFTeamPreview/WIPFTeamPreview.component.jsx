import "./WIPFTeamPreview.styles.scss";

import MiniSectionIntro from "../../miniSectionIntro/miniSectionIntro.component";
import SectionIntro from "../../sectionIntro/sectionIntro.component";
import AnimatedButton from "../../animatedButton/animatedButton.component";
import TeamImages from "../../teamImages/teamImages.component";
import { handleNavigation } from "../../../utils/handleNavigation.component";
import { useNavigate } from "react-router-dom";

const WIPFTeamPreview = () =>{
    const navigate = useNavigate();
    return(
        <div id="WIPFTeamPreviewComponent">
            <div id="teamIntro">
                <MiniSectionIntro sectionTitle="Our Vibrant Team"></MiniSectionIntro>
                <SectionIntro header="Our Vibrant Team"></SectionIntro>
                <p className="p2">Women in Politics forum is staffed by brilliant young minds with expertise in Accounting, Program Development, Communication and Design, Politics and many more. Want to join our team? Keep an eye out on this page for opennings!</p>
                <span onClick={() => navigate(handleNavigation("/contactus"))}>
                <AnimatedButton text="Join Our Team "></AnimatedButton>
                </span>
            </div>
            <div id="teamImages">
                <TeamImages></TeamImages>
            </div>
        </div>
    )
};

export default WIPFTeamPreview;