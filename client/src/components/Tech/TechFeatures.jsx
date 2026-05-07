import React from "react";
import "./TechFeatures.css";
import { FaWifi } from "react-icons/fa";

const TechFeatures = () => {
    return (
        <section className="tech-features">
            <div className="features-container">

                {/* Scalability */}
                <div className="feature-card">
                    <h3>Scalability</h3>
                    <video
                        src="https://valetez.com/wp-content/uploads/2023/06/Untitled-design-2.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="feature-video"
                    />

                    <p>
                        Our system on <strong>CLOUD</strong> supports scaling the
                        transactions from 10k to 10Mn across the network in no time.
                    </p>
                </div>

                {/* Serviceability */}
                <div className="feature-card">
                    <h3>Serviceability</h3>

                    <video
                        src="https://valetez.com/wp-content/uploads/2023/06/Untitled-design-3.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="feature-video"
                    />

                    <p>
                        Quick to fix on-site issues from a distance with OTA software
                        patches and updates, <strong>without any downtime</strong>.
                        Works independently even when there’s no internet.
                    </p>
                </div>

                {/* Reliability with Animated WiFi */}
        <div className="feature-card">
          <h3>Reliability</h3>
          <div className="wifi-animation">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <p>
            ParkEase runs with or without the internet, keeping the
            <strong> business operations unaffected</strong>.
          </p>
        </div>

            </div>
        </section>
    );
};

export default TechFeatures;
