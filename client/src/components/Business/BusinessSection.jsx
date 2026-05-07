import React from "react";
import HotelIcon from "@mui/icons-material/Apartment";
import EventIcon from "@mui/icons-material/ConfirmationNumber";
import "./BusinessSection.css";

import { useNavigate } from "react-router-dom";


const BusinessSection = () => {

  const navigate = useNavigate()

  return (
    <section className="business-section">
      <div className="business-container">

        {/* LEFT SIDE */}
        <div className="business-left">

          <div className="main-image">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"
              alt="Tech Park"
            />
            <span className="image-badge">TECH PARK</span>
          </div>

          <div className="small-image">
            <img
              src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a"
              alt="Shopping Mall"
            />
            <span className="image-badge">SHOPPING MALL</span>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="business-right">
          <h2>
            ParkEase for <span>Businesses</span>
          </h2>

          <p>
            Tailored parking solutions for every business. Whether you're an
            airport, mall, office building, or hospital, we have the expertise
            and services to optimize parking operations and provide a seamless
            experience for your customers and employees.
          </p>

          {/* Feature 1 */}
          <div className="feature-row">
            <HotelIcon className="feature-icon" />
            <div>
              <h4>Hotels</h4>
              <p>
                Reduce operational costs and errors by automating the payment
                process and eliminating the need for manual intervention
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="feature-row">
            <EventIcon className="feature-icon" />
            <div>
              <h4>Public Events</h4>
              <p>
                40% increase in parking revenue, 60% reduction in waiting
                time, 80% customer satisfaction rate
              </p>
            </div>
          </div>

          <button className="know-btn" onClick={() => navigate("/business-know-more")}>Know More</button>
        </div>

      </div>
    </section>
  );
};

export default BusinessSection;