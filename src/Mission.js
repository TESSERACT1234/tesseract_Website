import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Mission.css';

const Mission = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="mission-hero">
      <p className="section-label" data-aos="fade-down">our mission to create product that is</p>
      <h1 className="mission-line line1" data-aos="fade-up">Import Substitute</h1>
      <h1 className="mission-line line2" data-aos="fade-up" data-aos-delay="300">Pollution Free</h1>
      <h1 className="mission-line line3" data-aos="fade-up" data-aos-delay="600">Indigenous</h1>
    </section>
  );
};

export default Mission;
