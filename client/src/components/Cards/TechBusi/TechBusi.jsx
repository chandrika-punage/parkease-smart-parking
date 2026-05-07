import React from "react";
import "./TechBusi.css";

const TechBusi = () => {
    return (
        <section className="techbusi-details-section">
            <div className="techbusi-details-container">

                {/* TOP ROW */}
                <div className="techbusi-top">

                    {/* IMAGE LEFT */}
                    <div className="techbusi-image-wrapper">

                        <img
                            src="https://i0.wp.com/valetez.com/wp-content/uploads/2023/06/3-2.png?w=500&ssl=1"
                            alt="Tech / Business Parks"
                        />
                    </div>

                    {/* CONTENT RIGHT */}
                    <div className="techbusi-content">
                        <h2>Tech / Business Parks</h2>

                        <p>
                            Real time visibility on parking occupancy and usage across multiple parking lots and a large number 
                            of clients and their staff. Ability to transform unused spaces for special events and for F&B outlets 
                            outside of office hours.
                        </p>
                    </div>

                </div>

                {/* BOTTOM CONTENT */}
                <div className="techbusi-bottom">

                    <div className="info-block">
                        <h3>The Solution</h3>
                        <p>
                            1. FASTag (RFID) access management system combined with ANPR (Automated Number Plate Recognition) and 
                            NFC Kiosks (for two-wheeler visitors) with bay-wise sensors
                            <br/>
                            2. All hardware integrated via ParkEZ software with real time visibility on all parking lots and 
                            configurable dashboards to reallocate parking spaces during different time of day and days of the week.
                        </p>
                    </div>

                    <div className="info-block">
                        <h3>Impact</h3>
                        <p>
                            1. Optimisation resulted in 10% improvement in parking revenues due to alignment between allocation and 
                            utilisation among tenants
                            <br/>
                            2. 20% improvement in parking space availability outside office hours for non-tenant use based on demand 
                            patterns.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default TechBusi;