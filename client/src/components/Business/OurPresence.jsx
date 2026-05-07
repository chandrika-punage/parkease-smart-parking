import React from "react";
import "./OurPresence.css";
import indiaMap from '../../assets/business/two.png'; 

const OurPresence = () => {
  return (
    <section className="our-presence">
      <div className="presence-container">
        
        {/* LEFT SIDE - IMAGE */}
        <div className="presence-left">
          <img src={indiaMap} alt="ValetEZ Presence Map" />
        </div>

        {/* RIGHT SIDE - CONTENT */}
        <div className="presence-right">
          <h4 className="subtitle">17 States & Growing</h4>
          <h2 className="title">Our Presence</h2>

          <p className="description">
            ParkEase has built a strong presence in cities across India, 
            delivering reliable parking solutions tailored for businesses. 
            Our services cater to airports, shopping malls, office buildings, 
            and educational institutions, providing convenience for employees, 
            customers, and visitors. With our extensive network, parking becomes 
            effortless, enhancing productivity and creating seamless experiences 
            for your business.
          </p>

          <div className="stats-grid">
            <div className="stat-box">
              <h3>2,381</h3>
              <p>Devices Installed</p>
            </div>

            <div className="stat-box">
              <h3>150+</h3>
              <p>Active Clients</p>
            </div>

            <div className="stat-box">
              <h3>125K+</h3>
              <p>Transactions/Day</p>
            </div>

            <div className="stat-box">
              <h3>550+</h3>
              <p>Team Members</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OurPresence;
