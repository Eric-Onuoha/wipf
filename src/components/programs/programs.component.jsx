import React, {useEffect} from 'react';
import "./programs.styles.scss";
import ProgramsPreview from "./programsPreview/programsPreview.component";
import { useDispatch, useSelector } from 'react-redux';
import { getMultipleDocuments } from '../../firestore/getFromFirestore.utils';
import { addPrograms } from '../../reduxStore/actionDispatches';
import { Dispatch } from 'react';


const Programs = ({number}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        getMultipleDocuments("Programs").then((ProgramsDB) => dispatch(addPrograms(ProgramsDB)));
    }, []);

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
