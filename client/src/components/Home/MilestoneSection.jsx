import React from "react";
import "./MilestoneSection.css";

import PeopleAlt from "@mui/icons-material/PeopleAlt";
import CheckCircle from "@mui/icons-material/CheckCircle";
import LocationOn from "@mui/icons-material/LocationOn";
import EmojiEvents from "@mui/icons-material/EmojiEvents";

const MilestoneSection = () => {
  return (
    <section className="milestone-section">
      {/* HEADING */}
      <h2 className="milestone-title">
        With the support of{" "}
        <span className="highlight-pill">2Mn+ users</span>{" "}
        we have achieved a milestone of
      </h2>

      <div className="milestone-divider"></div>

      {/* GRID */}
      <div className="milestone-grid">

        <div className="milestone-box">
          <div className="icon-circle">
            <PeopleAlt fontSize="large" />
          </div>
          <h3>3Mn+</h3>
          <p>Transactions/Month</p>
        </div>

        <div className="milestone-box">
          <div className="icon-circle">
            <CheckCircle fontSize="large" />
          </div>
          <h3>100K+</h3>
          <p>Parking Slots</p>
        </div>

        <div className="milestone-box">
          <div className="icon-circle">
            <LocationOn fontSize="large" />
          </div>
          <h3>17 States</h3>
          <p>And Growing</p>
        </div>

        <div className="milestone-box">
          <div className="icon-circle">
            <EmojiEvents fontSize="large" />
          </div>
          <h3>5 Awards</h3>
          <p>Parking App</p>
        </div>

      </div>
    </section>
  );
};

export default MilestoneSection;