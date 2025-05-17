import React from 'react';
import './Contact.css';
import { Mail, Phone, MapPin } from 'lucide-react'; // Optional: You can replace with emojis if needed

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-overlay">
        <div className="contact-box">
          <h2>Contact Us</h2>
          <p className="subheading">We’d be happy to hear from you.<br />Let’s connect and build something great together.</p>

          <div className="contact-info">
            <p><MapPin className="icon" /> Tesseract Flex Fuel, 44B Suncity Industrial Park</p>
            <p>Haripura , Jarod , Vadodara.</p>
            <p><Phone className="icon" /> +91 6355859040</p>
            <p><Mail className="icon" /> tesseractflexfuel10@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
