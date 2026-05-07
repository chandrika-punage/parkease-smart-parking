import React from "react";
import "./Tourist.css";

const Tourist = () => {
    return (
        <section className="tourist-details-section">
            <div className="tourist-details-container">

                {/* TOP ROW */}
                <div className="tourist-top">

                    {/* IMAGE LEFT */}
                    <div className="tourist-image-wrapper">

                        <img
                            src="https://i0.wp.com/valetez.com/wp-content/uploads/2023/06/5-3.png?w=500&ssl=1"
                            alt="Public Parks and Tourist Spots"
                        />
                    </div>

                    {/* CONTENT RIGHT */}
                    <div className="tourist-content">
                        <h2>Public Parks and Tourist Spots</h2>

                        <p>
                            Rapid entry and exit of a wide range of vehicle types from two wheelers to buses, with contactless
                            digital payment options. High variability in traffic and Transparency in revenue collections.
                            High Reliability with near 100% uptime while handling intense traffic loads over a sustained period.
                        </p>
                    </div>

                </div>

                {/* BOTTOM CONTENT */}
                <div className="tourist-bottom">

                    <div className="info-block">
                        <h3>The Solution</h3>
                        <p>
                            1. Contactless Automated system with FASTag (RFID) to cover all 4-wheelers and commercial vehicles, combined with an advanced parking PoS or Self-use QR Code Kiosks
                            <br/>
                            2. All on-ground systems are interconnected via the ParkEZ smart parking software over cloud with built-in redundancy to work in offline mode during internet outages
                            <br/>
                            3. Auto-scaling feature to handle high variations in peak loads during peak season periods
                        </p>
                    </div>

                    <div className="info-block">
                        <h3>Impact</h3>
                        <p>
                            1. Highly automated system with built in redundancy ensured near 0% failures on transactions
                            <br/>
                            2. Smooth parking operations during peak season despite 5X traffic levels compared to off-peak periods
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Tourist;