import "./programs.styles.scss";

import ProgramsNavigation from "../../components/programsNavigation/programsNavigation.component";
import ProgramsViewPreview from "../../components/programsView/programsViewPreview/programsViewPreview.component";

const Programs = () => {
    return(
        <div id="programsPage">
            <div id="programsView">
                <ProgramsViewPreview/>
            </div>
            <div id="programsNavigation">
                <ProgramsNavigation />
            </div>
        </div>
    )
}

export default Programs;