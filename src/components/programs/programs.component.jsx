import React, {useEffect} from 'react';
import "./programs.styles.scss";
import ProgramsPreview from "./programsPreview/programsPreview.component";
import { useSelector } from 'react-redux';


const Programs = ({number}) => {
    const programDetails = useSelector((state) => state.programs.programs);
    const programs = [];
    for (const program in programDetails){
      programs.push(programDetails[program]);
    }

    return(
        <div id='latestProgramsComponent'>
            <ProgramsPreview programs = {programs} number = {number}/>
        </div>
    )
};

export default Programs;