import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaWhatsapp , FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <center>
          <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
          <a href="https://Youtube.com" target="_blank" rel="noreferrer"><FaYoutube /></a>
        </center>
      </div>
      {/* <div className="footer-container">
        <div className="footer-section about">
          <img
            src="./newlogo.png" // Path to your logo image
            alt="Tesseract Flex Fuel Logo"
            className="logo-img"
          />
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">About Us</a></li>
            <li><a href="/">Company Updates</a></li>
            <li><a href="/">Careers</a></li>
            <li><a href="/">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Contact</h3>
          <p>Email: info@tesseractflexfuel.com</p>
          <p>Phone: +91-98765-43210</p>
          <p>Address: Ahmedabad, Gujarat, India</p>
        </div>
      </div> */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Tesseract Flex Fuel. All rights reserved.
      </div>
      <p><center> Made with 💚 by Arya Shah</center></p>
    </footer>
  );
};

export default Footer;
