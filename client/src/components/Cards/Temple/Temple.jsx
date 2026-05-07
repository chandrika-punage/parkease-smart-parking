import React from "react";
import "./Temple.css";

const Temple = () => {
    return (
        <section className="temple-details-section">
            <div className="temple-details-container">

                {/* TOP ROW */}
                <div className="temple-top">

                    {/* IMAGE LEFT */}
                    <div className="temple-image-wrapper">

                        <img
                            src="https://i0.wp.com/valetez.com/wp-content/uploads/2023/06/EZ-3.png?w=375&ssl=1"
                            alt="Temples and Religious Places"
                        />
                    </div>

                    {/* CONTENT RIGHT */}
                    <div className="temple-content">
                        <h2>Temples and Religious Places</h2>

                        <p>
                            Rapid entry and exit of vehicles due to massive traffic loads, seamless digital payments and ability
                            to handle different access levels and pricing models based on type of visitor.
                        </p>
                    </div>

                </div>

                {/* BOTTOM CONTENT */}
                <div className="temple-bottom">

                    <div className="info-block">
                        <h3>The Solution</h3>
                        <p>
                            FASTag based pay & park with advanced parking PoS terminals combined with high speed automated access barriers
                            and networked displays to notify visitors instantly on their digital payment status. ParkEZ on cloud with ability
                            to auto-scale capacity rapidly for key festivals.
                        </p>
                    </div>

                    <div className="info-block">
                        <h3>Impact</h3>
                        <p>
                            1. High speed entry and exit allowed the property to massively scale up to handle more than 15,000 vehicles per day
                            from regular traffic of 5 to 6000 vehicles per day, all while ensuring seamless digital payments via FASTag.
                            <br/>
                            2. Ability to identify and allocate differential rate models for different types of users ensured minimal pile-ups 
                            and stress free experience for visitors
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Temple;