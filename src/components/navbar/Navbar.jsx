import React, { useState } from "react";
import "./navbar.scss";
import logo from "../../images/logo.png";
import { NavLink } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar() {
  const [show, setShow] = useState(false);
  const handleNavbar = () => {
    setShow(!show);
    console.log(show);
  };
  return (
    < div  className="container" style={{backgroundColor:"#ebf9ff",paddingTop:"15px"}}>
      <div className="navbar">
        <div className="wrapper">
          <div className="left">
            <img className="logo" src={logo} alt="logo" />
            <h3>ANIMAL SHELTER</h3>
          </div>
          <div className={`center ${show && "active"}`}>
            <ul>
              <li className="lisitem">
                <NavLink
                  to="/"
                  style={{ marginRight: "8px" }}
                  className={({ isActive }) =>
                    isActive ? "linkActive" : "linkInactive"
                  }
                >
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "linkActive" : "linkInactive"
                  }
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="right">
            <div className={`icons ${show && "active"}`}>
              <LinkedInIcon className="icon" />
              <TwitterIcon className="icon" />
              <InstagramIcon className="icon" />
            </div>

            <div className="menu" onClick={handleNavbar}>
              <MenuIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
