import React from "react";
import "./AboutHighlightsSection.css";

import { useNavigate } from "react-router-dom";

const AboutHighlightsSection = () => {

  const navigate=useNavigate()
  
  return (
    <section className="about-highlights-section">
      <div className="about-highlights-container">

        {/* LEFT SIDE - CARDS */}
        <div className="about-highlights-left">

          <div className="highlight-card">
            <h3>Convenience</h3>
            <p>
              ParkEase offers a highly convenient parking solution for car owners
              who are short on time or prefer hassle-free parking.
            </p>
          </div>

          <div className="highlight-card">
            <h3>Safety</h3>
            <p>
              ParkEase takes the safety and security of your vehicle seriously.
              Your car is parked in a secure location and fully insured.
            </p>
          </div>

          <div className="highlight-card">
            <h3>Flexibility</h3>
            <p>
              ParkEase offers short-term and long-term parking with pricing
              options to suit your needs.
            </p>
          </div>

          <div className="highlight-card">
            <h3>Professionalism</h3>
            <p>
              Our experienced valets provide courteous service and ensure
              a stress-free parking experience.
            </p>
          </div>

        </div>

        {/* RIGHT SIDE - CONTENT */}
        <div className="about-highlights-right">
          <h2>Making Parking efficient and EZ!</h2>

          <p>
            One of the unique features of ParkEase is its focus on innovation. 
            The company uses technology to transform the way parking works, both 
            in terms of the efficiency of operations for property owners and parking 
            operators, as well as the ease of access to parking for parking users.
          </p>

          <p>
            The company’s proprietary tech platform can digitise any type and size of 
            parking space. Our EZ app for users allows parking visitors to find and 
            access parking spots and access several other car related services on-the-go. 
            Another key aspect of ParkEase's services is its commitment to customer satisfaction.
             The company’s field operations team is well trained to ensure that parking visitors 
             experience the best in customer service, and they are always willing to go the extra 
             mile to ensure that customers are satisfied. This includes access to parking spots, 
             valet assistance, and other value added services such as EV Charging, car wash and detailing 
             services and several others.
          </p>

          <p>
            We are a customer first organisation, committed to providing a hassle-free and convenient parking 
            and vehicle care experience. Our focus on innovation, technology and customer satisfaction allowing 
            us to focus on our vision on revolutionising the way parking is experienced by users in India.
          </p>

          <button onClick={()=>navigate("/contact")} className="about-join-btn">Join Our Team</button>
        </div>

      </div>
    </section>
  );
};

export default AboutHighlightsSection;