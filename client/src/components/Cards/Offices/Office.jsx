import React from "react";
import "./Office.css";

const Office = () => {
  return (
    <section className="office-details-section">
      <div className="office-details-container">

        {/* TOP ROW */}
        <div className="office-top">

          {/* IMAGE LEFT */}
          <div className="office-image-wrapper">

            <img
              src="https://i0.wp.com/valetez.com/wp-content/uploads/2023/05/9.jpg?w=500&ssl=1"
              alt="Office Parking"
            />
          </div>

          {/* CONTENT RIGHT */}
          <div className="office-content">
            <h2>Co-Working Office Parking</h2>

            <p>
              Ensure only authorised access to the parking zone. Flexible parking packages aligned to coworking packages. 
              Integrated access to parking lot and office space to minimise user inconvenience.
            </p>
          </div>

        </div>

        {/* BOTTOM CONTENT */}
        <div className="office-bottom">

          <div className="info-block">
            <h3>The Solution</h3>
            <p>
              Automated access control with NFC reader kiosk to restrict access to authorised users. ParkEZ software features 
              include ability to determine tenant and user parking occupancy status in real time. Common NFC smart card / smart 
              phone access to the parking lot and the co-working space.
            </p>
          </div>

          <div className="info-block">
            <h3>Impact</h3>
            <p>
              Flexible parking packages with seamless access management allowed for greater flexibility being available to co-working 
              members, ensuring better retention, optimisation of parking access allowing for 20% additional parking utilisation via 
              sharing among members, resulting in improved parking monetisation for the co-working space.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Office;