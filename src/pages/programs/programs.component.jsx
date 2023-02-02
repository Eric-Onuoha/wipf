import "./programs.styles.scss";

import ProgramsNavigation from "../../components/programs/programsNavigation/programsNavigation.component";
import LatestPrograms from "../../components/programs/programs.component";
import PageIntro from "../../components/pageIntro/pageIntro.component";

const Programs = () => {
    return(
        <div id="programsPageBody">
            <PageIntro pageTitle="Our Programs"></PageIntro>

            <div id="programsNavigation">
                <ProgramsNavigation />
            </div>

            <div id="programsPreview">
                <LatestPrograms></LatestPrograms>
                <LatestPrograms></LatestPrograms>
                <LatestPrograms></LatestPrograms>
            </div>

        </div>
    )
}

export default Programs;