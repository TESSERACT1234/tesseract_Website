import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomNavbar from './Navbar';
import Home from './Home'; // Newly created
// import About from './About'; // If you have more pages
import Contact from './Contact';
import './App.css';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import CompanyUpdates from './CompanyUpdates';
import Careers from './Careers';
import AboutUS from './AboutUs';


const App = () => {
  return (
    <Router>
      <div className="App">
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUS/>} /> Optional
          <Route path="/updates" element={<CompanyUpdates />} /> 
          <Route path="/careers" element={<Careers />} /> 
          <Route path="/contact" element={<Contact />} /> 
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
