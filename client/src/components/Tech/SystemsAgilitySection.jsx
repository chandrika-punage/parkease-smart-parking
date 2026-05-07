import React from "react";
import "./SystemsAgilitySection.css";
import agilityImage from "../../assets/tech/tech.png"; 

const SystemsAgilitySection = () => {
  return (
    <section className="agility-section">
      <div className="agility-container">

        {/* LEFT IMAGE */}
        <div className="agility-left">
          <img src={agilityImage} alt="System Agility" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="agility-right">
          <h3 className="agility-title">System's Agility</h3>
        </div>

      </div>
    </section>
  );
};

export default SystemsAgilitySection;
