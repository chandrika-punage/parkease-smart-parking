import React from "react";
import "./home.css";
import parkingImg from '../../assets/home/parking.png'

import { useNavigate } from "react-router-dom";


const HomePage = () => {

  const navigate = useNavigate()

  return (
    <section className="homepage">
      <div className="container homepage-flex">

        {/* LEFT SIDE */}
        <div className="homepage-left">
          <h1>
            Experience True <br />
            <span className="highlight">Smart Parking</span> with <br />
            ParkEase
          </h1>

          <p>
            We are parking experts with real-time slots availability
          </p>

          <div className="homepage-buttons">
            {/* <button onClick={() => window.open("https://valetez.app", "_blank")} className="btn primary-btn">FIND PARKING</button> */}
            <button className="btn primary-btn">FIND PARKING</button>

            <button onClick={()=>navigate("/rent-parking")} className="btn secondary-btn">RENT OUT PARKING</button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="homepage-right">
          <img src={parkingImg} alt="Parking Illustration" />
        </div>

      </div>
    </section>
  );
};

export default HomePage;