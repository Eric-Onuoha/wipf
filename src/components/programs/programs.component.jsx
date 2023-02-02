import React from 'react';
import "./programs.styles.scss";
import LatestProgramsPreview from './programsPreview/programsPreview.component';

const programDetails = [{title:"WIPF Academy: Bauchi", theme: "Mentorship and Training", date: "15 Januray"}, {title:"WIPF Academy: Bauchi", theme: "Mentorship and Training", date: "15 Januray"}, {title:"WIPF Academy: Bauchi", theme: "Mentorship and Training", date: "15 Januray"}];

const Programs = () => {
    return(
        <div id='latestProgramsComponent'>
            <LatestProgramsPreview programDetails = {programDetails}/>
        </div>
    )
};

export default Programs;