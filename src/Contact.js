import React from 'react';
import './Contact.css';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-overlay">
        <div className="contact-container">
          <h1 className="contact-title">Contact Us</h1>
          <p className="contact-subtitle">
            We’d love to hear from you.<br />Let’s drive the future of sustainable fuels together.
          </p>

          <div className="contact-grid">
            <div className="contact-card">
              <MapPin className="icon" />
              <h3>Address</h3>
              <p>Tesseract Flex Fuel</p>
              <p>44B Suncity Industrial Park</p>
              <p>Haripura, Savli, Vadodara, Gujarat.</p>
            </div>

            <div className="contact-card">
              <Phone className="icon" />
              <h3>Phone</h3>
              <p>+91 63558 59040</p>
            </div>

            <div className="contact-card">
              <Mail className="icon" />
              <h3>Email</h3>
              <p>tesseractflexfuel10@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
