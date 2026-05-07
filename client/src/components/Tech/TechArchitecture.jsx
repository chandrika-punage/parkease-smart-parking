import React from "react";
import "./TechArchitecture.css";

const TechArchitecture = () => {
  return (
    <div className="architecture-section">
      <div className="architecture-content">
        <h3 className="architecture-title">
          Network-Centric Flexible Scalable Architecture
        </h3>

        <p className="architecture-text">
          Connects and integrates various devices and systems across different
          parking locations in multiple cities and even countries while
          supporting diverse parking formats and sizes, enabling our services
          even at
        </p>

        <div className="architecture-buttons">
          <button className="arch-btn">Remote Location</button>
          <button className="arch-btn active">
            Active Site: Doddabetta Peak
          </button>
        </div>
      </div>

    </div>
  );
};

export default TechArchitecture;
