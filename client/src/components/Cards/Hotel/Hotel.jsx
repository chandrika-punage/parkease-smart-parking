import React from "react";
import "./Hotel.css";

const Hotel = () => {
  return (
    <section className="hotel-details-section">
      <div className="hotel-details-container">

        {/* TOP ROW */}
        <div className="hotel-top">

          {/* IMAGE LEFT */}
          <div className="hotel-image-wrapper">

            <img
              src="https://i0.wp.com/valetez.com/wp-content/uploads/2023/05/2-9.png?w=500&ssl=1"
              alt="Hotel Parking"
            />
          </div>

          {/* CONTENT RIGHT */}
          <div className="hotel-content">
            <h2>Parking solution for Hotels</h2>

            <p>
              Track real time occupancy and availability, personalised parking services leveraging digital technology, 
              ability to ramp up for frequent events as well as restaurant visitors apart from hotel guests. Inter-connect 
              with loyalty programs and existing systems.
            </p>
          </div>

        </div>

        {/* BOTTOM CONTENT */}
        <div className="hotel-bottom">

          <div className="info-block">
            <h3>The Solution</h3>
            <p>
             Parking PoS terminals with NFC readers to enable authorised parking access for hotel guests and staff. This combined 
             with ParkEZ valet management system that creates digital bookings and enables visitors to remotely recall vehicles 
             while they are still in the hotel. API stack allows ParkEZ to integrate with hotel concierge and loyalty program 
             software that offers a seamless integrated experience
            </p>
          </div>

          <div className="info-block">
            <h3>Impact</h3>
            <p>
              Real time visibility on parking occupancy and slot availability. Digital valet management improves valet parking 
              efficiency by 25% and seamless integration with hotel systems brings in improved customer satisfaction at the time 
              of entry and exit
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hotel;