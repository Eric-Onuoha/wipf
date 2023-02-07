import React from "react";
import "./principles.styles.scss";
import { useSelector } from "react-redux";

import PrinciplesPreview from "./principlesPreview/principlesPreview.components";

// [{name:"Mission", text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non impedit culpa corporis eius id temporibus quibusdam unde esse quam enim.", color: "#FC6539"}, 
//                     {name:"Vision", text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non impedit culpa corporis eius id temporibus quibusdam unde esse quam enim.", color: "#FEA444"}, 
//                     {name:"Values", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non impedit culpa corporis eius id temporibus quibusdam unde esse quam enim.", color: "#FEA444"}, 
//                     {name:"Objectives", text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non impedit culpa corporis eius id temporibus quibusdam unde esse quam enim.", color: "#FC6539"}];

const Principles = () => {

    const principles = useSelector((state)=> state.mandate.mandate.Mandate) || {};
    console.log(principles);

    return(
        <div id="principlesComponent">
            <PrinciplesPreview principles = {principles}></PrinciplesPreview>
        </div>
    )
};

export default Principles;