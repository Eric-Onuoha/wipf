import React from 'react';
import "./latestPrograms.styles.scss";
import LatestProgramsPreview from '../latestProgramsPreview/latestProgramsPreview.component';

const programDetails = [{title:"WIPF Academy: Bauchi", theme: "Mentorship and Training", date: "15 Januray"}, {title:"WIPF Academy: Bauchi", theme: "Mentorship and Training", date: "15 Januray"}, {title:"WIPF Academy: Bauchi", theme: "Mentorship and Training", date: "15 Januray"}];

const LatestPrograms = () => {
    return(
        <div id='latestProgramsComponent'>
            <LatestProgramsPreview programDetails = {programDetails}/>
        </div>
    )
};

export default LatestPrograms;