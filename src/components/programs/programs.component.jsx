import React from 'react';
import "./programs.styles.scss";
import ProgramsPreview from "./programsPreview/programsPreview.component";
import { useSelector } from 'react-redux';

const Programs = () => {
    const programDetails = useSelector((state) => state.programs.programs);
    const programs = [];
    for (const program in programDetails){
      programs.push(programDetails[program]);
    }
    console.log(programs);
    return(
        <div id='latestProgramsComponent'>
            <ProgramsPreview programs = {programs}/>
        </div>
    )
};

export default Programs;