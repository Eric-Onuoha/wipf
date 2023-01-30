import React from "react";
import { useSelector } from "react-redux";

import ViewOne from "../viewOne/viewOne.component";

const ViewArea = () => {
    
const content = useSelector((state) => state.coreAreas.coreAreas.CoreAreas) || {};

    return(
        <ViewOne content = {content}></ViewOne>
    )
}; export default ViewArea;