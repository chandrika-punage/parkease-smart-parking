import React from "react";
import "./CardsSection.css";

/*  CARD COMPONENT  */
const Card = ({ image, title, description, link }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <a href={link} className="card-button">
        Know More
      </a>
    </div>
  );
};

/*  CARD GRID COMPONENT  */
const CardsSection = () => {
  const cards = [
    {
      image: "https://i0.wp.com/valetez.com/wp-content/uploads/2023/06/2-1.png",
      title: "Shopping Malls & Amusement Parks",
      description:
        "Optimize the space utilization, reduce waiting time, enable contactless payment and provide real-time information on parking availability and occupancy.",
      link: "/mall-savings",
    },
    {
      image: "https://i0.wp.com/valetez.com/wp-content/uploads/2023/06/3-1.png?w=1080&ssl=1",
      title: "Co-working space and offices",
      description: "Control the access of authorized vehicles, manage the parking fees and subscriptions and monitor the parking activity by providing barrier-based parking solutions.",
      link: "/office-parking",
    },
    {
      image: "https://i0.wp.com/valetez.com/wp-content/uploads/2023/06/4-1.png?w=1080&ssl=1",
      title: "Temples and Religious Places",
      description: "Contactless parking solutions that enable users to book, pay and access parking spaces through their smartphones, contribute to reducing congestion.",
      link: "/temple-parking",
    },
    {
      image: "https://i0.wp.com/valetez.com/wp-content/uploads/2023/06/12-1.png?w=1080&ssl=1",
      title: "Public Parks and Tourist Spots",
      description: "Handle large volumes of traffic during events, offer dynamic pricing and discounts and enhance customer satisfaction",
      link: "/tourist-parking",
    },
    {
      image: "https://i0.wp.com/valetez.com/wp-content/uploads/2023/06/6-1.png?w=1080&ssl=1",
      title: "Hospitals and Clinics",
      description: "Smooth entry and exit of patients and visitors, automate the payment process and reduce manual errors",
      link: "/hospital-parking",
    },
    {
      image: "https://i0.wp.com/valetez.com/wp-content/uploads/2023/06/11-1.png?w=1080&ssl=1",
      title: "Tech / Business Parks",
      description: "Affordable parking options for daily visitors with subscription by providing mobile-based parking solutions that manage the parking permits,",
      link: "/tech-parking",
    },
    {
      image: "https://i0.wp.com/valetez.com/wp-content/uploads/2023/06/1-4.png?w=1080&ssl=1",
      title: "Hotels",
      description: "Personalized parking services to their guests by providing NFC-based parking solutions that manage the parking inventory and loyalty programs and integrate ",
      link: "/hotel-parking",
    },
    {
      image: "https://i0.wp.com/valetez.com/wp-content/uploads/2023/06/10.png?w=1080&ssl=1",
      title: "Railway & Metro Stations",
      description: "Smart parking solutions for residents, guests and visitors, manage the parking spaces and allocations and ensure safety and convenience by providing mobile-based parking solutions.",
      link: "/railway",
    },
    {
      image: "https://i0.wp.com/valetez.com/wp-content/uploads/2023/06/9.png?w=1080&ssl=1",
      title: "Airports",
      description: "Optimize the space utilization, reduce waiting time, enable contactless payment and provide real-time information on parking availability and occupancy",
      link: "/airport-revenue",
    },
  ];

  return (
    <div className="cards-grid">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default CardsSection;