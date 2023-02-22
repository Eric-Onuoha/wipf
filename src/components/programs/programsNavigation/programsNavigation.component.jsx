import ProgramsNavigationPreview from "./programsNavigationPreview/programsNavigationPreview.component";

const programs = [{year: "2022"},{year: "2021"},{year: "2020"},{year: "2019"},{year: "2018"},{year: "2017"},{year: "2016"},{year: "2015"},{year: "2014"}]

const ProgramsNavigation = () => {
    return(
        <div id="programsNavigationComponent">
            <ProgramsNavigationPreview programs={programs}/>
        </div>
    );
}

export default ProgramsNavigation;