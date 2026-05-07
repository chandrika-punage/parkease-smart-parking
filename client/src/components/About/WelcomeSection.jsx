import React from "react";
import "./WelcomeSection.css";

const WelcomeSection = () => {
  return (
    <section className="welcome-section">
      <div className="welcome-container">

        {/* LEFT SIDE */}
        <div className="welcome-left">
          <h2>
            Welcome to a new era of <br /> Parking
          </h2>
        </div>

        {/* RIGHT SIDE */}
        <div className="welcome-right">
          <p>
            ParkEase is a smart parking and valet solutions firm based out of Bangalore, India.
            Founded in 2016, the company caters to the parking and mobility needs of customers
            across various cities in India. The company offers a range of solutions including
            parking management, valet parking, pre-booking parking spots, digital valet
            management, and car care services.
          </p>

          <p>
            ParkEase aims to provide a hassle-free parking experience to its customers.
            The company’s solutions are designed to make parking easy and stress-free.
            With ParkEase, customers can pre-book their parking spots, and know the
            company’s ParkEase will park their cars for them.
          </p>

          <p>
            ParkEase's offerings are not just limited to parking. The company also
            offers a range of car care services including car wash, detailing,
            and maintenance. The firm is also at the forefront of the EV revolution,
            offering its proprietary EV Charging solutions under the brand ChargeEZ.
          </p>
        </div>

      </div>
    </section>
  );
};

export default WelcomeSection;