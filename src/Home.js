import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Mission from './Mission';
import BiodieselSection from './BiodieselSection';
import SEO from './SEO';
import BiodieselBenefitsSlider from './BiodieselBenefitsSlider';
import Announcement from './Announcement';

import './Home.css'

const Home = () => {
  return (
    <>
      <SEO
        title="Home"
        description="Tesseract Flex Fuel is India’s leader in sustainable biodiesel manufacturing. Join us in driving the green energy revolution."
        keywords="biodiesel India, Tesseract Flex Fuel, sustainable biofuel, biodiesel news, biodiesel latest news, biodiesel, biofuel india, biofuel"
        url="https://www.tesseractflexfuel.com/"
      />

      <div className="hero-section">
        <div className="hero-message">
          <h1 style={{ fontSize: "2rem" }}><b>Empowering tomorrow with green fuel today.</b></h1>
          <p>At Tesseract Flex Fuel, we are committed to redefining the future of energy through innovation, integrity, and impact. As a trusted name in biodiesel manufacturing, we combine cutting-edge technology with eco-conscious practices to deliver clean, efficient, and reliable fuel solutions. Whether you're a partner, client, or visitor, we're excited to have you here and look forward to driving progress—together.</p>
          <p><b><span style={{ color: "#FF9933" }}>A Tesseract</span> of <span style={{ color: "white" }}>Innovation</span> — <span style={{ color: "#138808" }}>Crafted in</span> <span style={{ color: "#138808" }}>Bharat</span></b></p>
        </div>
      </div>

      <Mission />

      <div className="biodiesel-section">
        <Container>
          <h2 className="section-title" style={{ color: "#2e7d32" }}>Biodiesel: Fueling a Cleaner Tomorrow</h2>
          <p className="section-description">
            Biodiesel is a renewable, biodegradable fuel manufactured from vegetable oils , acid oils and UCO : Used Cooking Oil. It reduces carbon emissions, improves engine lubrication, and can be used in existing diesel engines with little or no modification.
          </p>

          <Row className="benefit-cards">
            <Col md={4} sm={12} className="benefit-card">
              <img src="/earth.png" alt="Eco Friendly" />
              <h5>Eco-Friendly</h5>
              <p>Reduces greenhouse gases and supports a cleaner environment.</p>
            </Col>
            <Col md={4} sm={12} className="benefit-card">
              <img src="/engineering.png" alt="Engine Safe" />
              <h5>Engine Compatible</h5>
              <p>Can be used in existing diesel engines with minimal adjustments.</p>
            </Col>
            <Col md={4} sm={12} className="benefit-card">
              <img src="/renewable-energy.png" alt="Renewable" />
              <h5>Renewable Source</h5>
              <p>Made from renewable plant or waste-based sources.</p>
            </Col>
          </Row>
        </Container>
      </div>
      <BiodieselBenefitsSlider/>
      <Announcement/>
      <BiodieselSection />
     
      
    </>
  );
};

export default Home;
