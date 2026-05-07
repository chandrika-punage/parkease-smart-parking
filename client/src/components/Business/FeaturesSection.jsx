import React from "react";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import StarIcon from "@mui/icons-material/Star";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import "./FeaturesSection.css";

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <div className="features-container">

        {/* Card 1 */}
        <div className="feature-card">
          <div className="icon-wrapper">
            <LocalParkingIcon className="featured-icon" />
          </div>
          <h3>Efficient Parking Management</h3>
          <p>
            ParkEase streamlines parking operations, optimizing space
            utilization and reducing congestion for businesses.
          </p>
          <span className="badge">AI Driven</span>
        </div>

        {/* Card 2 */}
        <div className="feature-card">
          <div className="icon-wrapper">
            <StarIcon className="featured-icon" />
          </div>
          <h3>Enhanced Customer Experience</h3>
          <p>
            Partnering with ParkEase ensures a seamless and convenient
            parking solution, leaving a positive impression on customers.
          </p>
        </div>

        {/* Card 3 */}
        <div className="feature-card">
          <div className="icon-wrapper">
            <CurrencyRupeeIcon className="featured-icon" />
          </div>
          <h3>Revenue Generation</h3>
          <p>
            ParkEase helps businesses monetize unused parking spots,
            unlocking additional income potential while providing a
            valuable service.
          </p>
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;