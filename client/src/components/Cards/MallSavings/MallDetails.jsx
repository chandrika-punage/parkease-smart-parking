import React from "react";
import "./MallDetails.css";

const MallDetails = () => {
  return (
    <section className="mall-details-section">
      <div className="mall-details-container">

        {/* TOP ROW */}
        <div className="mall-top">

          {/* IMAGE LEFT */}
          <div className="mall-image-wrapper">

            <img
              src="https://i0.wp.com/valetez.com/wp-content/uploads/2023/05/3-5.png?fit=800%2C800&ssl=1"
              alt="Shopping Mall"
            />
          </div>

          {/* CONTENT RIGHT */}
          <div className="mall-content">
            <h2>Shopping Malls & Amusement Parks</h2>

            <p>
              Contactless automation and digital payment enablement, optimise
              space utilisation, reduce wait times for check-in and check-out,
              and provide real time information on parking occupancy and
              availability.
            </p>
          </div>

        </div>

        {/* BOTTOM CONTENT */}
        <div className="mall-bottom">

          <div className="info-block">
            <h3>The Solution</h3>
            <p>
              A smart parking system comprising of FASTag (RFID) based automated
              check-in and check-out with digital payments, self-use Kiosks for
              two-wheelers, high performance PoS terminals and sensors to track
              parking occupancy, all connected via the ParkEZ smart parking
              management system.
            </p>
          </div>

          <div className="info-block">
            <h3>Impact</h3>
            <p>
              A 20% improvement in parking revenues within 60 days, cost savings
              via automation, and complete visibility on parking traffic in real
              time. Dynamic pricing linked to parking occupancy and demand,
              driving higher utilisation.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default MallDetails;