import React from 'react';
import './BiodieselSection.css';
import { FaLeaf, FaIndustry, FaHome, FaUsers, FaRocket } from 'react-icons/fa';

const BiodieselSection = () => {
    return (
        <section className="biodiesel-section">
            <div className="content">
                <h2>Why Biodiesel is the Perfect Solution for India 🇮🇳</h2>
                <p className="intro">
                    Biodiesel is a renewable and sustainable energy source that can help India reduce its dependency on fossil fuels. It aligns perfectly with the country's vision for a cleaner environment, reduced pollution, and energy independence.
                </p>
                <div className="benefits">
                    <div className="benefit-card">
                        <img src="/image.png" alt="Eco Friendly" />
                        {/* <FaLeaf className="icon" /> */}
                        <h3>Support for Make in India</h3>
                        <p>Biodiesel promotes local production, reduces import dependence, and drives innovation in the renewable energy sector.</p>
                    </div>
                    <div className="benefit-card">
                        {/* <FaUsers className="icon" /> */}
                        <img src="/farmer.png" alt="Eco Friendly" />
                        <h3>Empowering Farmers</h3>
                        <p>By encouraging the cultivation of biofuel crops, biodiesel supports farmers, boosts their income, and strengthens India's rural economy.</p>
                    </div>
                    <div className="benefit-card">
                        {/* <FaHome className="icon" /> */}
                        <img src="/energy.png" alt="Eco Friendly" />
                        <h3>Energy Independence</h3>
                        <p>Biodiesel helps India achieve energy security by providing a domestic, sustainable energy source and reducing reliance on imported oil.</p>
                    </div>
                    <div className="benefit-card">
                        {/* <FaRocket className="icon" /> */}
                        <img src="/net-zero.png" alt="Eco Friendly" />
                        <h3>Net Zero Mission</h3>
                        <p>Biodiesel plays a key role in reducing carbon emissions, contributing to India’s net-zero emission targets and sustainable growth.</p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default BiodieselSection;
