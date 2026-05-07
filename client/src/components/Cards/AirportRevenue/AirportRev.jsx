import React from "react";
import "./AirportRev.css";

const AirportRev = () => {
  return (
    <section className="airport-details-section">
      <div className="airport-details-container">

        {/* TOP ROW */}
        <div className="airport-top">

          {/* IMAGE LEFT */}
          <div className="airport-image-wrapper">

            <img
              src="https://i0.wp.com/valetez.com/wp-content/uploads/2023/05/4-1.png"
              alt="Airport Parking"
            />
          </div>

          {/* CONTENT RIGHT */}
          <div className="airport-content">
            <h2>Airport Parking</h2>

            <p>
              Contactless automation and digital payment enablement, optimise space utilisation, 
              reduce wait times for check-in and check-out, and provide real time information on 
              parking occupancy and availability.
            </p>
          </div>

        </div>

        {/* BOTTOM CONTENT */}
        <div className="airport-bottom">

          <div className="info-block">
            <h3>The Solution</h3>
            <p>
              FASTag + ANPR + Self-use Kiosks + advanced PoS and a forecourt management system.
            </p>
          </div>

          <div className="info-block">
            <h3>Impact</h3>
            <p>
              A 20% improvement in parking revenues within 60 days, cost savings via automation, 
              and complete visibility on parking traffic in real time. Dynamic pricing linked to 
              parking occupancy and demand, driving higher utilisation.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AirportRev;