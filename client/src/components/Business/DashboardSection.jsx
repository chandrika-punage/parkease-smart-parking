import React from "react";
import "./DashboardSection.css";
import dashboardImg from '../../assets/business/dashboard.png'; 


const DashboardSection = () => {
  return (
    <section className="dashboard-section">
      <div className="dashboard-container">

        {/* Image */}
        <div className="dashboard-image">
          <img src={dashboardImg} alt="Business Dashboard" />
        </div>

        {/* Content */}
        <div className="dashboard-content">
          <p>
            Keep your business's critical metrics on your fingertip with
            customizable business dashboard which enables long form of data
            into visuals, making it robust and easy to use.
          </p>
        </div>

      </div>
    </section>
  );
};

export default DashboardSection;