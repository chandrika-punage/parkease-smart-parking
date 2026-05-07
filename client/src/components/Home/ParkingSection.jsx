import React from "react";
import "./ParkingSection.css";

const ParkingSection = () => {
  return (
    <section className="parking-section">
      <div className="parking-container">
        <h2 className="parking-title">
          Parking Available <span>At</span>
        </h2>

        <p className="parking-text">
          ParkEase is the smart parking management system that lets you park like a boss.
          Whether you’re going to a mall, a hospital, an airport or anywhere else,
          ParkEase has a parking spot for you.
        </p>
      </div>
    </section>
  );
};

export default ParkingSection;