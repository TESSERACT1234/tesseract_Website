import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className="about-wrapper">

            <section className="about-hero">

                <div className="hero-text" />

            </section>

            <section className="about-section intro">

                <p>
                    Tesseract Flex Fuel is a next-generation biodiesel manufacturing company located in Gujarat, India.
                    With a state-of-the-art plant operating at a capacity of <strong>180 KLPD (Kilolitres Per Day)</strong>,
                    we are committed to transforming the bioenergy landscape. Our mission is to drive India’s transition
                    toward sustainable, domestic fuel solutions. At Tesseract, we believe in innovation, inclusion, and impact.
                    Our team thrives in a fast-paced, purpose-driven environment where every member—from engineers to field staff—
                    is empowered to lead, learn, and grow. We celebrate curiosity, ownership, and bold thinking.
                    We foster a culture where ideas are welcomed, experimentation is encouraged, and mistakes are seen as stepping stones to mastery.
                    Diversity fuels our creativity, and collaboration propels us forward. At our core, we are a mission-driven team
                    determined to leave a lasting impact on both the energy sector and the planet.
                    Because at Tesseract, you're not just working a job—you’re helping shape the future of sustainable fuel.
                </p>

                <div className="production-method">
                    <h3>Our Production Method</h3>
                    <p>
                        At Tesseract Flex Fuel, we use a continuous transesterification process to convert a wide range of feedstocks—
                        including used cooking oil, acid oils, and non-edible oils (Concept is to make Waste to Wealth)—into high-quality biodiesel (B100).
                        Our fully automated plant employs cutting-edge technologies for:
                    </p>
                    <ul>
                        <li>Efficient oil pre-treatment and degumming</li>
                        <li>Precise methanol and catalyst dosing</li>
                        <li>High-yield transesterification reactors</li>
                        <li>Automated glycerol separation and purification</li>
                        <li>Advanced distillation and polishing for fuel-grade biodiesel</li>
                    </ul>
                    <p>
                        The entire process is monitored in real-time using IoT-enabled sensors and SCADA systems to ensure consistent quality and compliance with international biodiesel standards such as ASTM D6751 and EN 14214.
                    </p>
                </div>

                <div className="chairman-message">
                    <h3>Chairman’s Message</h3>
                    <p>
                        “At Tesseract Flex Fuel, we are not just producing biodiesel—we are building the foundation for India’s energy future.
                        Our commitment is to sustainability, innovation, and the empowerment of communities. Together, we will fuel a cleaner, stronger tomorrow.”
                    </p>

                </div>
            </section>



            <section className="about-section mission">
                <h2>Our Vision & Mission</h2>
                <div className="mission-cards">
                    <div className="mission-card">
                        <h3>🌍 Sustainability</h3>
                        <p>Build a cleaner future through renewable biofuels and waste-to-energy innovation.</p>
                    </div>
                    <div className="mission-card">
                        <h3>🚛 Energy Independence</h3>
                        <p>Reduce dependency on imported fuels by producing cost-effective, high-quality biodiesel locally.</p>
                    </div>
                    <div className="mission-card">
                        <h3>🤝 Collaboration</h3>
                        <p>Work with farmers, industries, and the government to create a circular economy for biofuels.</p>
                    </div>
                </div>
            </section>

            <section className="about-section culture">
                <h2>Our Culture</h2>
                <p>
                    At Tesseract, we believe in innovation, inclusion, and impact. Our team thrives in a fast-paced,
                    purpose-driven environment where every member—from engineers to field staff—is empowered to lead
                    and grow. We celebrate curiosity, ownership, and bold thinking.

                </p>
                <div className="culture-tags">
                    <span>💡 Innovative Thinking</span>
                    <span>🤝 Team Spirit</span>
                    <span>📈 Growth-Oriented</span>
                    <span>⚖️ Ethical & Transparent</span>
                    <span>🌱 Eco-First Mindset</span>
                </div>
            </section>

            <section className="about-section join">
                <h2>Join Our Mission</h2>
                <p>
                    We're always looking for passionate minds who want to make an impact in green energy. Whether you're an engineer, chemist, logistician, or strategist—there’s a place for you at Tesseract Flex Fuel.
                </p>
                <a href="/careers" className="about-cta">Explore Career Opportunities</a>
            </section>
        </div>
    );
};

export default AboutUs;
