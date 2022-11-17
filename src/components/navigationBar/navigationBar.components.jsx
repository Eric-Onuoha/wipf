import React, { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import "../navigationBar/navigationBar.styles.scss";
import "../../index.css";

import Logo from "../../assets/images/wipfnewlogo.png";
import HamburgerMenu from "../../assets/images/hamburgermenu.png";
// import Button from "react-bootstrap/Button";
import AnimatedButton from "../animatedButton/animatedButton.component";

const NavigationBar = () => {
  return (
    <Fragment id="navBarComponent">
      <div id="navBar">
        <div id="navLogo">
          <img src={Logo} alt="Menu"/>
        </div>
        <div className="hamburgerMenu"><img src={HamburgerMenu} alt="Menu"/></div>
        <div className="navItems">
          <Link className="active" to={"/"}><ul>Home</ul></Link>
          <Link to={"aboutus"}><ul>About Us</ul></Link>
          <Link to={"programs"}><ul>Programs</ul></Link>
          {/* <ul>Newsletter</ul> */}
          <Link to={"contactus"}><ul>Contact Us</ul></Link>
          <Link to={"programsupload"}><ul>Upload Programs</ul></Link>
        </div>
        <div className="nwaLink">
          <AnimatedButton text= "Nigerian Women Aspirants "/>
        </div>
      </div>
      <Outlet/>
    </Fragment>
  );
};

export default NavigationBar;
