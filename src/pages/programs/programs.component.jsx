import { useEffect } from "react";
import "./programs.styles.scss";

import ProgramsNavigation from "../../components/programs/programsNavigation/programsNavigation.component";
import LatestPrograms from "../../components/programs/programs.component";
import PageIntro from "../../components/pageIntro/pageIntro.component";
import { getMultipleDocuments } from "../../firestore/getFromFirestore.utils";
import { addPrograms } from "../../reduxStore/actionDispatches";
import { useDispatch } from "react-redux";

const Programs = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        getMultipleDocuments("Programs").then((ProgramsDB) => dispatch(addPrograms(ProgramsDB)));
      }, []);

    return(
        <div id="programsPageBody">
            <PageIntro pageTitle="Our Programs"></PageIntro>

            <div id="programsNavigation">
                <ProgramsNavigation />
            </div>

            <div id="programsPreview">
                <LatestPrograms></LatestPrograms>
            </div>

        </div>
    )
}

export default Programs;