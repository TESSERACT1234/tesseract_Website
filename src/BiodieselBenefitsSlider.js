import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./BiodieselBenefitsSlider.css";

const benefits = [
  {
    image: "/benefit1.jpg",
    title: "Cleaner Engines",
    description: "Biodiesel keeps your engine running smoother and cleaner."
  },
  {
    image: "/benefit2.jpg",
    title: "Local Economy",
    description: "Boosts domestic jobs and reduces fuel imports."
  },
  {
    image: "/benefit3.jpg",
    title: "Lower Emissions",
    description: "Reduces CO₂ and greenhouse gas emissions significantly."
  },
  {
    image: "/benefit4.jpg",
    title: "Renewable Source",
    description: "Produced from sustainable, renewable feedstocks."
  },
  {
    image: "/benefit5.jpg",
    title: "Supports Farmers",
    description: "Creates new markets for agricultural waste and crops."
  },
  {
    image: "/benefit6.jpg",
    title: "Circular Economy",
    description: "Turns used cooking oil and waste into valuable fuel."
  },
];

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1280 }, items: 3 },
  desktop: { breakpoint: { max: 1280, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 768 }, items: 2 },
  mobile: { breakpoint: { max: 768, min: 0 }, items: 1 },
};

const BiodieselBenefitsSlider = () => {
  return (
    <section className="benefits-slider-section">
      <h2 className="slider-heading">Why Biodiesel?</h2>
      <Carousel
        responsive={responsive}
        swipeable
        draggable
        infinite
        autoPlay
        autoPlaySpeed={4000}
        keyBoardControl
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="benefit-image-card"
            style={{ backgroundImage: `url(${benefit.image})` }}
          >
            <div className="benefit-overlay">
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default BiodieselBenefitsSlider;
