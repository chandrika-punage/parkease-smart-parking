import React, { useState } from "react";
import "./InterestingReads.css";

import news1 from "../../assets/reads/news1.jpg";
import news2 from "../../assets/reads/news2.jpg";
import news3 from "../../assets/reads/news3.jpg";

import event1 from "../../assets/reads/event1.jpg";
import event2 from "../../assets/reads/event2.png";
import event3 from "../../assets/reads/event3.png";

import blog1 from "../../assets/reads/blog1.png";
import blog2 from "../../assets/reads/blog2.png";
import blog3 from "../../assets/reads/blog3.png";

const data = {
  News: [
    { img: news1, title: "Parking woes?" },
    { img: news2, title: "Smart parking update" },
    { img: news3, title: "City parking reform" },
  ],
  Events: [
    { img: event1, title: "Tech Expo 2026" },
    { img: event2, title: "Mobility Summit" },
    { img: event3, title: "EV Launch Event" },
  ],
  Blogs: [
    { img: blog1, title: "Mobile apps for smart parking" },
    { img: blog2, title: "Future of urban mobility" },
    { img: blog3, title: "Parking solutions at fingertips" },
  ],
};

const InterestingReads = () => {
  const [activeCategory, setActiveCategory] = useState("News");

  return (
    <section className="reads-section">

      {/* Heading */}
      <div className="reads-heading">
        <h2>
          Some Interesting <span>Reads</span>
        </h2>
        <div className="reads-line"></div>
      </div>

      <div className="reads-content">

        {/* Categories */}
        <div className="categories">
          {Object.keys(data).map((category) => (
            <div
              key={category}
              className={`category-item ${
                activeCategory === category ? "active" : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </div>
          ))}
        </div>

        {/* Images */}
        <div className="reads-grid">
          {data[activeCategory].map((item, index) => (
            <div key={index} className="read-card">
              <img src={item.img} alt={item.title} />
              <p>{item.title}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default InterestingReads;