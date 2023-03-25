import React from "react";
import { Link } from "react-router-dom";
import "./cmsNav.styles.scss";

const CMSNav = () => {
    return(
        <div id="cmsNavComponent">
            <h1>Select item to update</h1>
            <div id="cmsNav">
                <Link className="compNav" to={"/admin/cms/coreareas/new"}><p>Core Areas</p></Link>
                <Link className="compNav" to={"/admin/cms/newsupdates/new"}><p>News Updates</p></Link>
                <Link className="compNav" to={"/admin/cms/programs/new"}><p>Programs</p></Link>
                <Link className="compNav" to={"/admin/cms/mandate/new"}><p>Mandate</p></Link>
                <Link className="compNav" to={"/admin/cms/staff/new"}><p>Staff</p></Link>
                <Link className="compNav" to={"/admin/cms/about/new"}><p>About WIPF</p></Link>
                <Link className="compNav" to={"/admin/cms/user/new"}><p>Add New Account</p></Link>
            </div>
        </div>
    )
};

export default CMSNav;