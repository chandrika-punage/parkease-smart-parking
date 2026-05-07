import React from "react";
import "./AboutSection.css";
import teamImage from "../../assets/about/team.png"; 

const AboutSection = () => {
  return (
    <section className="about-section">

      <div className="about-top">
        <h1>About Us</h1>
        <p>
          ParkEase is a smart parking solutions firm that aims to simplify and transform
          the parking experience for customers while helping property owners to
          optimise their parking spaces with efficient and cost effective digital systems.
        </p>

        {/* IMAGE INSIDE YELLOW */}
        <div className="about-image">
          <img src={teamImage} alt="ValetEZ Team" />
        </div>
      </div>

      {/* White bottom section */}
      <div className="about-bottom"></div>

    </section>
  );
};

export default AboutSection;