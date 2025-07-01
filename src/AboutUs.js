import React, { useEffect } from 'react';
import './AboutUs.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutUs = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className="about-wrapper">

            <section className="about-hero no-image">
                <div className="hero-content">
                    <h1 data-aos="fade-down" className="text-fill">
                        Empowering India’s Green Future
                    </h1>
                    <p data-aos="fade-up" data-aos-delay="200" className="text-fill">
                        Tesseract Flex Fuel —Empowering tomorrow with green fuel today.
                    </p>
                </div>


            </section>

            <section className="about-section intro" data-aos="fade-up">
                <div className="container">
                    <h2>Who We Are</h2>
                    <p>
                        Tesseract Flex Fuel is a next-gen biodiesel manufacturer based in Gujarat, India.
                        Operating a <strong>state-of-the-art 180 KLPD</strong> plant, we’re revolutionizing the bioenergy landscape by fueling India’s sustainable growth.
                    </p>
                    <p>
                        Our culture thrives on curiosity, diversity, and collaboration. Engineers, field staff, and innovators come together to power progress — one drop at a time.
                    </p>
                </div>
            </section>

            <section className="about-section values" data-aos="fade-up">
                <div className="container">
                    <h2>Our Core Values</h2>
                    <div className="values-grid">
                        <div className="value-card" data-aos="zoom-in">
                            <h3>♻️ Sustainability</h3>
                            <p>Turning waste into wealth through world-class biodiesel production.</p>
                        </div>
                        <div className="value-card" data-aos="zoom-in" data-aos-delay="200">
                            <h3>💡 Innovation</h3>
                            <p>Constant R&D to stay ahead in clean fuel technology and efficiency.</p>
                        </div>
                        <div className="value-card" data-aos="zoom-in" data-aos-delay="400">
                            <h3>🤝 Inclusion</h3>
                            <p>Diversity and collaboration drive our ideas and our impact.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-section method" data-aos="fade-up">
                <div className="container">
                    <h2>Our Production</h2>
                    <p>
                        Our continuous transesterification process converts feedstocks like used cooking oil, acid oils, and non-edible oils into high-grade biodiesel (B100).
                    </p>
                    <div className="method-steps">
                        <div className="method-step" data-aos="fade-right">✅ Oil pre-treatment & degumming</div>
                        <div className="method-step" data-aos="fade-right" data-aos-delay="100">✅ Precise methanol & catalyst dosing</div>
                        <div className="method-step" data-aos="fade-right" data-aos-delay="200">✅ High-yield transesterification reactors</div>
                        <div className="method-step" data-aos="fade-right" data-aos-delay="300">✅ Automated glycerol separation & purification</div>
                        <div className="method-step" data-aos="fade-right" data-aos-delay="400">✅ Advanced distillation & polishing</div>
                    </div>
                    <p>
                        Everything is monitored in real-time with IoT-enabled sensors and SCADA systems for global compliance.
                    </p>
                </div>
            </section>

            <section className="about-section chairman" data-aos="fade-up">
                <div className="container">
                    <h2>Chairman’s Message</h2>
                    <blockquote>
                        “At Tesseract Flex Fuel, we’re not just producing biodiesel — we’re fueling India’s energy independence with sustainability, innovation, and community empowerment.”
                    </blockquote>
                </div>
            </section>

            <section className="about-section mission" data-aos="fade-up">
                <div className="container">
                    <h2>Vision & Mission</h2>
                    <div className="mission-grid">
                        <div className="mission-card" data-aos="flip-left">
                            <h3>🌍 Green Future</h3>
                            <p>Building a circular economy for biofuels and clean energy.</p>
                        </div>
                        <div className="mission-card" data-aos="flip-left" data-aos-delay="200">
                            <h3>🚛 Energy Independence</h3>
                            <p>Reducing India’s dependence on imported fuels with local production.</p>
                        </div>
                        <div className="mission-card" data-aos="flip-left" data-aos-delay="400">
                            <h3>🤝 Collaboration</h3>
                            <p>Partnering with farmers, industries, and government for shared impact.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-section culture" data-aos="fade-up">
                <div className="container">
                    <h2>Our Culture</h2>
                    <p>
                        We champion curiosity, ownership, and collaboration. Our team embraces new ideas and celebrates diverse perspectives to shape tomorrow’s biofuel industry.
                    </p>
                    <div className="culture-tags">
                        <span>🚀 Agile</span>
                        <span>💡 Innovative</span>
                        <span>🤝 Inclusive</span>
                        <span>📈 Growth-Driven</span>
                        <span>🌱 Eco-Conscious</span>
                    </div>
                </div>
            </section>

            <section className="about-section join" data-aos="fade-up">
                <div className="container">
                    <h2>Join Us</h2>
                    <p>
                        Ready to drive real change? Engineers, strategists, and innovators — your journey starts here.
                    </p>
                    <a href="/careers" className="about-cta">Explore Careers</a>
                </div>
            </section>

        </div>
    );
};

export default AboutUs;
