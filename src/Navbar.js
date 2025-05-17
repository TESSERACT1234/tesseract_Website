import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Custom CSS for styling

const CustomNavbar = () => {
    return (
        <div className="navbar-container">
            {/* Rectangle Box for Logo with Image */}
            <div className="logo-box">
                <Link to="/">
                    <img
                        src="/newlogo.png" // Make sure it's in `public/` folder or served properly
                        alt="Tesseract Flex Fuel Logo"
                        className="logo-img"
                    />
                </Link>
            </div>

            {/* Bootstrap Navbar */}
            <Navbar expand="lg" className="navbar-custom">
                <Container>
                    <Navbar.Toggle aria-controls="navbar-nav" />
                    <Navbar.Collapse id="navbar-nav">
                        <div className="w-100 d-lg-flex justify-content-between">
                            {/* Left Navs */}
                            <Nav className="mb-2 mb-lg-0">
                                <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                                <Nav.Link as={Link} to="/updates">Company Updates</Nav.Link>
                            </Nav>

                            {/* Right Navs */}
                            <Nav className="ms-lg-auto">
                                <Nav.Link as={Link} to="/careers">Careers</Nav.Link>
                                <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
                            </Nav>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default CustomNavbar;
