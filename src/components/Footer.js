import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
    const currentYear =new Date().getFullYear();
  return (
    <div className="footer-container">
      <div className="footer-links">
        <a target="_blank" href="https://www.facebook.com/hamza.darej/" ><FaFacebook/></a>
        <a target="_blank" href="https://github.com/hamzadarej" ><FaGithub/></a>
        <a target="_blank" href="https://www.instagram.com/hamzadarej1/"><FaInstagram/></a>
        <a target="_blank" href="https://www.linkedin.com/feed/?trk=DACH-SEM_google-adwords_brand-ghp"><FaLinkedinIn/> </a>
      </div>
      <div className="footer-copyright">
      Copyright <sup> © </sup> <span className="year">{ currentYear}</span>
    </div></div>
  );
}

export default Footer;
