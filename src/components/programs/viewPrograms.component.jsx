import React from "react";
import { useSelector } from "react-redux";

import ViewOne from "../viewOne/viewOne.component";

const ViewPrograms = () => {
    const programsDB = useSelector((state) => state.programs.programs);

    const pathName = window.location.pathname;
    const paths = pathName.split("/");
    const path = paths[2];

    const programs = [];
    for (const program in programsDB){
      programs.push(programsDB[program]);
    }

    return(
        <ViewOne content = {programs} path = {path}></ViewOne>
    )
}; export default ViewPrograms;