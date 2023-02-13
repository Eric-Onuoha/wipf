import React from "react";
import "./principles.styles.scss";
import { useSelector } from "react-redux";

import PrinciplesPreview from "./principlesPreview/principlesPreview.components";

const Principles = () => {

    const principles = useSelector((state)=> state.mandate.mandate.Mandate) || {};

    return(
        <div id="principlesComponent">
            <PrinciplesPreview principles = {principles}></PrinciplesPreview>
        </div>
    )
};

export default Principles;