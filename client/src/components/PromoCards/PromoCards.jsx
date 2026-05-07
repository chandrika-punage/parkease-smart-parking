import React from "react";
import "./PromoCards.css";

import reviewImg from "../../assets/promo/review-google.png";
import evImg from "../../assets/promo/ev-charge.png";

const PromoCards = () => {
  return (
    <section className="promo-section">
      <div className="promo-container">
        
        <div className="promo-card">
          <img src={reviewImg} alt="Review us on Google" />
        </div>

        <div className="promo-card">
          <img src={evImg} alt="Charge your EV" />
        </div>

      </div>
    </section>
  );
};

export default PromoCards;