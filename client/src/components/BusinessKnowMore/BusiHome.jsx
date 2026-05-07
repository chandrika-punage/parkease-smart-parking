import React from "react";
import "./BusiHome.css";
import SmartparkingImg from '../../assets/business/smartParking.png'


const BusiHome = () => {
  return (
    <section className="knowmorepage">
      <div className="container knowmore-flex">
        
        {/* LEFT SIDE */}
        <div className="knowmore-left">
          <h1>
            Smart Parking Solution for Businesses<br />
          </h1>

          <p>
            Smart parking solution provider that offers customized and innovative 
            parking solutions for various types of businesses.
          </p>

          <div className="knowmore-buttons">
            <button className="btn primary-btn">Find Parking Solution</button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="knowmore-right">
          <img src={SmartparkingImg} alt="Parking Illustration" />
        </div>

      </div>
    </section>
  );
};

export default BusiHome;