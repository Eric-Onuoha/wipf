import React, { Fragment, useState, useEffect } from "react";
import { Outlet, NavLink, useNavigate, } from "react-router-dom";
import "./navigationBar.styles.scss";
import "../../index.css";
import { handleNavigation } from "../../utils/handleNavigation.component";


import Logo from "../../assets/images/wipfnewlogo.png";
import HamburgerMenu from "../../assets/images/hamburgermenu.png";
// import Button from "react-bootstrap/Button";
import AnimatedButton from "../animatedButton/animatedButton.component";

const NavigationBar = (props) => {
  const navigate = useNavigate();
  const [showNav, setShowNav] = useState("navItemsMobile");
  const [navFocus, setNavFocus] = useState(" ");

  const toggleMenu = () => {

    (showNav === "navItemsMobile" ? setShowNav(" ") : setShowNav("navItemsMobile"));
    (navFocus === " " ? setNavFocus("navModal") : setNavFocus(" "));
  }

  useEffect(()=> {
    window.scrollTo(0, 0);
  }, [window.location.pathname]);

  return (
    <Fragment>
      <div id={navFocus} onClick={toggleMenu}></div>
      <div id="navBar">
        <div id="navLogo">
          <NavLink to={"/"}>
            <img src={Logo} alt="Menu"/>
          </NavLink>
        </div>
        <div className="hamburgerMenu" onClick={toggleMenu}><img src={HamburgerMenu} alt="Menu"/></div>
        <div id={showNav} className = "navItems">
          <div className="hamburgerMenu" onClick={toggleMenu}><img src={HamburgerMenu} alt="Menu"/></div>
          <NavLink activeclassname="active" to={"/"} onClick={toggleMenu}><ul>Home</ul></NavLink>
          <NavLink activeclassname="active" to={"aboutus"} onClick={toggleMenu}><ul>About Us</ul></NavLink>
          <NavLink activeclassname="active" to={"programs"} onClick={toggleMenu}><ul>Programs</ul></NavLink>
          <NavLink activeclassname="active" to={"contactus"} onClick={toggleMenu}><ul>Contact Us</ul></NavLink>
          {/* <NavLink to={"programsupload"}><ul>Upload Programs</ul></NavLink> */}
        </div>
        <a href="https://www.nigerianwomenaspirants.com/" target="_blank"><div className="nwaLink">
          <AnimatedButton text= "Nigerian Women Aspirants "/>
        </div>
        </a>
      </div>
      <Outlet/>
    </Fragment>
  );
};

export default NavigationBar;
