import React, {useEffect, useState} from 'react';
import ProgramsPreview from "./programsPreview/programsPreview.component";
import { useDispatch, useSelector } from 'react-redux';
import { getMultipleDocuments } from '../../firestore/getFromFirestore.utils';
import { addPrograms } from '../../reduxStore/actionDispatches';
import { dispatch } from 'react';
import { useParams } from 'react-router-dom';


const Programs = ({number}) => {
    const dispatch = useDispatch();
    let sortedPrograms;
    const { searchq } = useParams();

    const [searchName, setSearchName] = useState(" ");
    const [searchValue, setSearchValue] = useState(" ");

    useEffect(() => {
        getMultipleDocuments("Programs").then((ProgramsDB) => dispatch(addPrograms(ProgramsDB)));
    }, []);

    useEffect(() => {
        if(window.location.search){
            const query = window.location.search.split("_");
            setSearchName(query[0])
            setSearchValue(decodeURI(query[1]));
        }
    }, [window.location.search]);

    const programDetails = useSelector((state) => state.programs.programs);
    const programs = [];
    for (const program in programDetails){
      programs.push(programDetails[program]);
    }

    if(window.location.search && searchValue != " "){
        if(searchName == "?year"){
            sortedPrograms = programs.filter((program) => (
                program.year == searchValue
            ))    
        } else if (searchName == "?theme"){
            sortedPrograms = programs.filter((program) => (
                program.ProgramTheme == searchValue
            ))   
        } else if(searchName == "?title"){
            sortedPrograms = programs.filter((program) => (
                // program.ProgramTitle.indexOf(searchValue) > -1
                // program.year == searchValue
                program.ProgramTitle.toLowerCase().includes(searchValue.toLowerCase())
            ))  
        }

    } else {
        sortedPrograms = programs.sort((a,b) => (new Date(b.ProgramDate) - new Date(a.ProgramDate)));
    }


    return(
        <div id='latestProgramsComponent'>
            <ProgramsPreview programs = {sortedPrograms} number = {number}/>
        </div>
    )
};

export default Programs;
