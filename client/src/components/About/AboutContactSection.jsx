import React from "react";
import "./AboutContactSection.css";

import { useNavigate } from "react-router-dom";

const AboutContactSection = () => {

  const navigate=useNavigate()

  return (
    <section className="about-contact-section">
      <div className="about-contact-box">
        <div className="about-contact-left">
          <h3>Have a question? Get in touch</h3>
          <button onClick={()=>navigate("/contact")} className="about-contact-btn">
            Contact Us
          </button>
        </div>

        <div className="about-contact-right">
          <p>
            Contact us today to experience hassle-free parking solutions with
            ParkEase. Our team is ready to assist you with any queries or
            concerns you may have.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutContactSection;
