import React from "react";
import { Link } from "react-router-dom";
import "./cmsNav.styles.scss";

const CMSNav = () => {
    return(
        <div id="cmsNavComponent">
            <h1>Select item to update</h1>
            <div id="cmsNav">
                <Link className="compNav" to={"/landingcms"}><p>Core Areas</p></Link>
                <Link className="compNav" to={"/newsupdatescms"}><p>News Updates</p></Link>
                <Link className="compNav" to={"/programscms"}><p>Programs</p></Link>
                <Link className="compNav" to={"/mandatecms"}><p>Mandate</p></Link>
            </div>
        </div>
    )
};

export default CMSNav;