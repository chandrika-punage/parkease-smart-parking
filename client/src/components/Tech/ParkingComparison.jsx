import React from "react";
import "./ParkingComparison.css";

import conventionalImg from "../../assets/tech/left.webp";   
import automatedImg from "../../assets/tech/right.webp";        

const ParkingComparison = () => {
  return (
    <section className="park-section">
      <div className="park-container">

        {/* LEFT CARD */}
        <div className="park-card conventional">
          <h3 className="card-title">Conventional Parking</h3>

          <img src={conventionalImg} alt="Conventional Parking" />

          <ul className="card-list negative">
            <li>Entry & Exit In 2 Minutes</li>
            <li>System Failures</li>
            <li>Cash Leakage</li>
            <li>Long Queue In Parking Lot</li>
          </ul>
        </div>

        {/* RIGHT CARD */}
        <div className="park-card automated">
          <h3 className="card-title">ParkEase Automated Parking</h3>

          <img src={automatedImg} alt="ValetEZ Automated Parking" />

          <p className="card-description">
            ParkEase is automating parking inventory by using
            <strong> FASTag, NFC, ANPR, and QR Codes </strong>
            to provide contactless, ticketless, and paperless parking service to users,
            while saving costs for businesses by reducing labor, errors, and frauds.
          </p>

          <ul className="card-list positive">
            <li>Space utilization & revenue ↑</li>
            <li>Emissions ↓</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default ParkingComparison;
