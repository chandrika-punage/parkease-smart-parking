import React from "react";
import "./BusinessHero.css";
import Img1 from "../../assets/business/one.png";
import PhoneEnabled from "@mui/icons-material/PhoneEnabled";

const BusinessHero = () => {
    return (
        <section className="business-hero">
            <div className="business-container">

                {/* LEFT CONTENT */}
                <div className="business-left">
                    <h1>
                        Looking for parking solutions for your business?
                    </h1>

                    <p>
                        We provide <strong>smart parking technology</strong> solutions that
                        enhance efficiency, security and user satisfaction for businesses.
                        We also create and manage parking spaces for businesses looking to
                        address their parking needs.
                    </p>

                    <a href="tel:+917204074928" className="call-button">
                        <PhoneEnabled
                            sx={{
                                fontSize: 20,
                                verticalAlign: "middle",
                                mr: 1,
                               
                            }}
                        />
                        +91 1234567898
                    </a>
                </div>

                {/* RIGHT IMAGE */}
                <div className="business-right">
                    <img src={Img1} alt="Business Parking Solution" />
                </div>

            </div>
        </section>
    );
};

export default BusinessHero;