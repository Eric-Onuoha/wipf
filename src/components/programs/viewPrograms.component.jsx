import React from "react";
import { useSelector } from "react-redux";

import ViewOne from "../viewOne/viewOne.component";

const ViewPrograms = () => {
    const programsDB = useSelector((state) => state.programs.programs);
    const pathName = window.location.pathname;
    const paths = pathName.split("/");
    const path = paths[2];
    console.log(path);
    return(
        <ViewOne content = {programsDB[path]}></ViewOne>
    )
}; export default ViewPrograms;