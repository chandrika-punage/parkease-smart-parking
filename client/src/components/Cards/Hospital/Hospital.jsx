import React from "react";
import "./Hospital.css";

const Hospital = () => {
    return (
        <section className="hospitalpark-details-section">
            <div className="hospitalpark-details-container">

                {/* TOP ROW */}
                <div className="hospitalpark-top">

                    {/* IMAGE LEFT */}
                    <div className="hospitalpark-image-wrapper">

                        <img
                            src="https://i0.wp.com/valetez.com/wp-content/uploads/2023/05/5-2.png?w=800&ssl=1"
                            alt="Hospital Parking"
                        />
                    </div>

                    {/* CONTENT RIGHT */}
                    <div className="hospitalpark-content">
                        <h2>Hospital Parking</h2>

                        <p>
                            A solution that offers 24 x 7 x 365 uptime. Has the ability to serve different types of users with 
                            different permissions and pricing models simultaneously. Automates payment process while ensuring 
                            smooth entry and exit to patients and visitors.
                        </p>
                    </div>

                </div>

                {/* BOTTOM CONTENT */}
                <div className="hospitalpark-bottom">

                    <div className="info-block">
                        <h3>The Solution</h3>
                        <p>
                            1. FASTag enabled contactless parking system combined with Automated Number Plate Recognition (ANPR) and 
                            an advanced PoS solution
                            <br/>
                            2. All hardware inter-connected together with ParkEZ parking management system
                            <br/>
                            3. Differential pricing algorithms support a wide range of subscription users such as doctors, hospital 
                            staff, in-patient attendants apart from OPD and other types of occasional visitors
                        </p>
                    </div>

                    <div className="info-block">
                        <h3>Impact</h3>
                        <p>
                            A parking management system that ensures practically no downtime round the year, and helps manage a wide range 
                            of parking users. Seamlessly scale up to handle 3X traffic during peak periods and offer a smooth digital payment 
                            option for both pay per use and subscription users ensuring a stress-free parking experience for both the hospital 
                            and its visitors.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Hospital;