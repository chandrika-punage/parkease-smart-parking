import React from "react";
import "./ourTech.css";

const OurTech = () => {
  return (
    <section className="our-tech">
      <div className="our-tech-inner">
        <h2 className="tech-title">
          Rapid entry & exit within 2 secs
        </h2>

        <div className="tech-subtitle">
          <span>Now a reality with </span>
          <span className="highlight">ParkEase's Tech</span>
          <span> using</span>
        </div>

        <div className="tech-grid">
          <div className="tech-card">
            <img
              src="https://i0.wp.com/valetez.com/wp-content/uploads/2023/06/Untitled-design-10.png"
              alt="Internet of Things"
            />
            <p>Internet of Things</p>
          </div>

          <div className="tech-card">
            <img
              src="https://i0.wp.com/valetez.com/wp-content/uploads/2023/06/25.png"
              alt="AI & Machine Learning"
            />
            <p>AI & Machine Learning</p>
          </div>

          <div className="tech-card">
            <img
              src="https://i0.wp.com/valetez.com/wp-content/uploads/2023/06/34.png"
              alt="Cloud Computing"
            />
            <p>Cloud Computing</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTech;
