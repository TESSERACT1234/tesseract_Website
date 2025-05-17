import React from 'react';
import './TeamsSection.css';

const teams = [
  {
    title: 'Production',
    description: 'Our production team ensures high-quality biodiesel output through sustainable practices and advanced technology.',
  },
  {
    title: 'Accounts',
    description: 'The finance team manages funds, ensures compliance, and supports cost-effective biofuel operations.',
  },
  {
    title: 'Logistics',
    description: 'Efficient fuel delivery is handled by our logistics team with precision, safety, and responsibility.',
  },
  {
    title: 'Research & Development',
    description: 'Innovating sustainable fuel alternatives through continuous research and process improvements.',
  },
];

const TeamsSection = () => {
  return (
    <div className="teams-section">
      <div className="intro">
        <p>
          At Tesseract Flex Fuel, every team plays a critical role in building a sustainable energy future. From sourcing raw materials to delivering the final product, our mission is powered by collaboration, innovation, and purpose.
        </p>
      </div>

      <div className="teams-grid">
        {teams.map((team, idx) => (
          <div key={idx} className="team-card">
            <div className="team-content">
              <h3><b>{team.title} Team</b></h3>
              <p>{team.description}</p>
              <a href="/contact">Know more</a>
            </div>
          </div>
        ))}
      </div>

      <div className="culture-section">
        <h2>Our Culture</h2>
        <p>
          At Tesseract, we’re more than just a fuel company—we're a family of innovators. Our culture is built on:
        </p>
        <ul>
          <li><strong>Collaboration:</strong> We work cross-functionally and support one another to deliver excellence.</li>
          <li><strong>Transparency:</strong> Honest communication and accountability form the backbone of our operations.</li>
          <li><strong>Growth:</strong> We encourage continuous learning and empower individuals to take ownership.</li>
          <li><strong>Purpose:</strong> Each day, we move closer to a greener, cleaner India—and the world.</li>
        </ul>
        <p>
          Join us to make a meaningful impact while building a fulfilling career.
        </p>
        <a href="/contact" className="career-btn">
          Explore Career Opportunities
        </a>
      </div>
    </div>
  );
};

export default TeamsSection;
