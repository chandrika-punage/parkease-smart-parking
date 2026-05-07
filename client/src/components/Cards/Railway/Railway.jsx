import React from "react";
import "./Railway.css";

const Railway = () => {
  return (
    <section className="railway-details-section">
      <div className="railway-details-container">

        {/* TOP ROW */}
        <div className="railway-top">

          {/* IMAGE LEFT */}
          <div className="railway-image-wrapper">

            <img
              src="https://i0.wp.com/valetez.com/wp-content/uploads/2023/06/4-2.png?w=500&ssl=1"
              alt="Parking Solutions for Railway Stations"
            />
          </div>

          {/* CONTENT RIGHT */}
          <div className="railway-content">
            <h2>Parking Solutions for Railway Stations</h2>

            <p>
              Handle a large volume of short duration guest visitors vs longer duration parking users, requiring differential 
              pricing systems to handle these traffic patterns. High volume bursts of vehicle traffic throughout the day demands 
              an ability to handle rapid entry and exit.
            </p>
          </div>

        </div>

        {/* BOTTOM CONTENT */}
        <div className="railway-bottom">

          <div className="info-block">
            <h3>The Solution</h3>
            <p>
              FASTag (RFID) along with an advanced PoS interconnected with ParkEZ smart parking management system. ParkEZ is 
              configured to support differential pricing for short duration pick-up and drop-off traffic apart from regular 
              parking users.
            </p>
          </div>

          <div className="info-block">
            <h3>Impact</h3>
            <p>
              Seamless parking experience for both visitors accessing the pick-up and drop off points vs. regular parking. 
              Revenue enhancement of up to 15-20% from plugging loss of revenue that occurred earlier due to the lack of 
              differential pricing.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Railway;