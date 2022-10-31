import "./sponsors.styles.scss";

import SectionIntro from "../sectionIntro/sectionIntro.component";

// import SponsorsBackground from "../../assets/images/sponsorsBackground.png";
import SponsorsList from "../sponsorsList/sponsorsList.component";

const Sponsors = () => {
    return(
        <div id="sponsorsComponent">
            <div id="sponsorsIntro">
                <SectionIntro header="Our Current Sponsors" />
            </div>
            <div>
                <SponsorsList />
            </div>
        </div>
    )
}

export default Sponsors;