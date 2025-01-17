import React from "react";
import "./Footer.css"
import Home_icon from "../../Common/asset/images/voteimg/Home_icon.svg";
import Profile_icon from "../../Common/asset/images/voteimg/Profile_icon.svg";
import setting_icon from "../../Common/asset/images/voteimg/setting_icon.svg";
import Helpline_icon from "../../Common/asset/images/voteimg/Helpline_icon.svg";
import center_icon from "../../Common/asset/images/voteimg/center_icon.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_tag">
        <div className="d-flex flex-column align-items-center">
          <img className="Footer_icon" src={Home_icon}></img>
          <span className="footer_text">Home</span>
        </div>
        <div className="d-flex flex-column align-items-center">
          <img className="Footer_icon" src={Profile_icon}></img>
          <span className="footer_text">Profile</span>
        </div>
        <div className="d-flex flex-column align-items-center">
          <img className="Footer_iconS" src={center_icon}></img>
          {/* <span>Home</span> */}
        </div>
        <div className="d-flex flex-column align-items-center">
          <img className="Footer_icon " src={setting_icon}></img>
          <span className="footer_text">Setting</span>
        </div>
        <div className="d-flex flex-column align-items-center">
          <img className="Footer_icon" src={Helpline_icon}></img>
          <span className="footer_text">Helpline</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
