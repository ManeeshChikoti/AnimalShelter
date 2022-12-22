import React from "react";
import EastIcon from "@mui/icons-material/East";
import logo from "../../images/logo.png";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import "./footer.scss";

export default function Footer() {
  return (
<div className="footer">
    <div className="footerTop">
        
      <div className="left">
        <div className="logowrapper">
          <img className="logo" src={logo} alt="logo" />
          <h3>ANIMAL SHELTER</h3>
        </div>
        <p>
          One of the best animal shelter places in India.We're recognized by the
          government.Please take a pledge to take care of these lovely pets!
        </p>
        <button className="footerButton">
          Adopt <EastIcon className="footericon" />
        </button>
      </div>
      <div className="center">
        <h3>GET IN TOUCH</h3>
        <div className="wrapper">
          <LocationOnOutlinedIcon />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam,
            nemo quis!-345646.
          </p>
        </div>
        <div className="wrapper">
          <MailOutlinedIcon />
          <p>codeparva@gmail.com</p>
        </div>

        <h3>FOLLOW US</h3>
        <TwitterIcon className="socialIcons" />
        <FacebookIcon className="socialIcons" />
        <LinkedInIcon className="socialIcons" />
      </div>
      <div className="right">
        <div className="linkWrap">
          <h3>QUICK LINKS</h3>
          <p>Home</p>
          <p>Contact US</p>
        </div>
       
      </div>
    </div>
    <div className="footerBottom">
       <hr/>
       <div className="copyright">
        <p>Copyright ©2023. Animal Shelter</p>
        <div className="terms">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Cookies settings</span>
        </div>
       </div>
    </div>
  
</div>
    
  );
}
