import React from "react";
import "./BusinessCases.css";

import { useNavigate } from "react-router-dom";

const cases = [
  {
    id: 1,
    title: "Shopping malls with ₹80Mn annual parking revenue",
    description:
      "Real time parking availability, secure and transparent charges, and flexible access to spaces. ParkEase can also help malls to boost revenue by optimizing lot usage and reducing leakage.",
    buttonText: "Save ₹16Mn",
    link: "/mall-savings",
  },
  {
    id: 2,
    title: "Hospital with ₹8Mn annual parking cost",
    description:
      "Hassle-free parking for patients, visitors and staff, by using smart technologies like Fastag, RFID, NFC and ANPR. ParkEase can also help hospitals to handle peak demand and different user types.",
    buttonText: "50% Growth",
    link: "/hospital-growth",
  },
  {
    id: 3,
    title: "Airport with ₹800Mn annual parking revenue",
    description:
      "ParkEase can help airports manage complex parking operations with high security and real-time tracking. Seamless parking for travelers and staff using a mobile and cloud platform that works across locations.",
    buttonText: "Generate ₹1200Mn",
    link: "/airport-revenue",
  },
];

const BusinessCases = () => {


  const navigate = useNavigate();

  return (
    <section className="cases-section">
      <div className="cases-container">
        {cases.map((item) => (
          <div key={item.id} className="case-card">
            <h3>{item.title}</h3>
            <p>{item.description}</p>

            
            <button
              className="case-btn"
              onClick={() => navigate(item.link)}
            >
              {item.buttonText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BusinessCases;