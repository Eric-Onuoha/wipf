import "./programs.styles.scss";

import ProgramsNavigation from "../../components/programsNavigation/programsNavigation.component";
import ProgramsViewPreview from "../../components/programsView/programsViewPreview/programsViewPreview.component";
import LatestPrograms from "../../components/latestPrograms/latestPrograms.component";
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