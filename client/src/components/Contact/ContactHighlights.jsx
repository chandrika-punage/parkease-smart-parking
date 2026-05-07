import React from "react";
import "./ContactHighlights.css";

const ContactHighlights = () => {
  return (
    <section className="contact-contact-section">
      <div className="contact-contact-box">
        <div className="contact-contact-left">
          <h3>Contact us today to learn more about how we can help you take your business to new heights.</h3>
          <a href="/contact" className="contact-contact-btn">
            Get Started
          </a>
        </div>

        <div className="contact-contact-right">
          <p>
            ParkEase offers innovative solutions that can help your business grow and thrive. 
            Whether it's through our smart parking technology or our valet management solutions, 
            we're committed to providing exceptional experiences that exceed your expectations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHighlights;
