import React from "react";
import "./UsabilitySection.css";
import { FaPhone } from "react-icons/fa";

import beforeImg from "../../assets/business/three.png";   
import afterImg from "../../assets/business/four.png";     

const UsabilitySection = () => {
  return (
    <section className="usability-section">
      
      {/* HEADING */}
      <h2 className="usability-title">
        Improved usability of parking{" "}
        <span className="high">up to 80%</span>{" "}
        with ParkEase parking solution
      </h2>

      <div className="divider"></div>

      {/* BEFORE AFTER IMAGES */}
      <div className="charts-container">
        <div className="chart-box">
          <img src={beforeImg} alt="Before Chart" />
        </div>

        <div className="chart-box">
          <img src={afterImg} alt="After Chart" />
        </div>
      </div>

      {/* CALL SECTION */}
      <div className="call-section">
        <div className="call-left">
          <div className="call-icon">
            <FaPhone />
          </div>
          <div>
            <h3>Let's have a call</h3>
            <p>to discuss the parking solution we have for you</p>
          </div>
        </div>

        <a href="tel:+917204074928" className="call-button">
          <FaPhone /> +91 1234567898
        </a>
      </div>

    </section>
  );
};

export default UsabilitySection;