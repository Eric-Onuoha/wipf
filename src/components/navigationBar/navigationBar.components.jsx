import React, { Fragment} from "react";
import { Outlet, NavLink, } from "react-router-dom";
import "../navigationBar/navigationBar.styles.scss";
import "../../index.css";

import Logo from "../../assets/images/wipfnewlogo.png";
import HamburgerMenu from "../../assets/images/hamburgermenu.png";
// import Button from "react-bootstrap/Button";
import AnimatedButton from "../animatedButton/animatedButton.component";

const NavigationBar = (props) => {
  return (
    <Fragment id="navBarComponent">
      <div id="navBar">
        <div id="navLogo">
          <img src={Logo} alt="Menu"/>
        </div>
        <div className="hamburgerMenu"><img src={HamburgerMenu} alt="Menu"/></div>
        <div className="navItems">
          <NavLink activeClassName="active" to={"/"}><ul>Home</ul></NavLink>
          <NavLink activeClassName="active" to={"aboutus"}><ul>About Us</ul></NavLink>
          <NavLink activeClassName="active" to={"programs"}><ul>Programs</ul></NavLink>
          {/* <ul>Newsletter</ul> */}
          <NavLink activeClassName="active" to={"contactus"}><ul>Contact Us</ul></NavLink>
          {/* <NavLink to={"programsupload"}><ul>Upload Programs</ul></NavLink> */}
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
