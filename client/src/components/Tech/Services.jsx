import React from "react";
import "./Services.css";

const servicesData = [
  {
    title: "Anomaly Detection & Fraud Prevention",
    img: "https://i0.wp.com/valetez.com/wp-content/uploads/2023/06/Untitled-design-16.png?fit=1080%2C1080&ssl=1",
    desc: "Detects and prevents anomalies and frauds in parking transactions and operations, such as unauthorized access, fake payments, overcharging, etc."
  },
  {
    title: "Optimize Space, Predicting Demand & Supply",
    img: "https://i0.wp.com/valetez.com/wp-content/uploads/2023/06/Untitled-design-22.png?fit=1080%2C1080&ssl=1",
    desc: "Intelligent system that anticipates parking needs based on historical data, predicts demand patterns across different locations and time periods."
  },
//   {
//     title: "Dynamic Pricing",
//     img: "https://assets1.lottiefiles.com/packages/lf20_uscycyxf.json", // Lottie JSON
//     desc: "Adjusts parking prices based on various factors such as occupancy, location, time, seasonality, events, etc. to optimize revenue and incentivize customers.",
//     isLottie: true
//   }
];

const Services = () => {
  return (
    <div className="services-section">
      {servicesData.map((service, index) => (
        <div className="service-card" key={index}>
          <h3>{service.title}</h3>

          {service.isLottie ? (
            <lottie-player
              src={service.img}
              background="transparent"
              speed="1"
              loop
              autoplay
              style={{ width: "250px", height: "250px" }}
            ></lottie-player>
          ) : (
            <img src={service.img} alt={service.title} loading="lazy" />
          )}

          <p>{service.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default Services;
