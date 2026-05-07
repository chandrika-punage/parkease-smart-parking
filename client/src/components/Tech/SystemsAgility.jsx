import React from "react";
import "./SystemsAgility.css";

import realtimeIcon from "../../assets/tech/1.svg";
import plugPlayIcon from "../../assets/tech/2.svg";
import iotIcon from "../../assets/tech/3.svg";
import remoteIcon from "../../assets/tech/4.svg";

const features = [
  {
    icon: realtimeIcon,
    title: "Real-time optimization",
    description:
      "Real-time view of parking infrastructure, transparency and security in parking charges and service delivery, flexibility in managing and accessing parking spaces, and data analytics on parking utilization.",
  },
  {
    icon: plugPlayIcon,
    title: "Plug & Play",
    description:
      "ParkEase system can be deployed on parking lots of any size and format, and can integrate with various hardware and software platforms to create an integrated smart parking solution",
  },
  {
    icon: iotIcon,
    title: "IoT and AI enabled",
    description:
      "Using IoT devices and AI/ML algorithms to collect and analyze parking data, enable contactless parking and digital payments, adjust parking prices, predict demand, segment customers, and offer hyperlocal services",
  },
  {
    icon: remoteIcon,
    title: "Remote Monitoring & Support",
    description:
      "ParkEase system allows remote monitoring, support, and maintenance of hardware and software using OTA software uploads and cloud-based logging",
  },
];

const SystemsAgility = () => {
  return (
    <section className="systems-agility">
      <div className="container">
        {features.map((item, index) => (
          <div className="system-card" key={index}>
            <div className="icon-wrapper">
              <img src={item.icon} alt={item.title} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SystemsAgility;
