import React from "react";
import "./ContactSection.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa";
import PlaceIcon from "@mui/icons-material/Place";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";

import axios from "axios";
import { useState } from "react";


const ContactSection = () => {

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [city, setCity] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [message, setMessage] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            name,
            phone,
            city,
            companyName,
            message
        };

        try {
            await axios.post("http://localhost:8080/api/contact", data);
            alert("Contact Form Sent Successfully!");

            // Clear the contact form 
            setName("");
            setPhone("");
            setCity("");
            setCompanyName("");
            setMessage("");

        } catch (err) {
            console.log(err);
            alert("Something went wrong");
        }
    };


    return (
        <section className="contact-section">
            <div className="contact-container">

                {/* Header */}
                <div className="contact-header">
                    <p className="sub-title">WE'D LOVE TO HEAR FROM YOU</p>
                    <h2>Stay Connected</h2>
                    <p className="description">
                        Don't hesitate to reach out to us for any inquiries or feedback.
                        We're always here to help and improve your parking experience. Contact us now!
                    </p>
                </div>

                <div className="contact-content">

                    {/* LEFT SIDE */}
                    <div className="contact-left">
                        <iframe
                            title="map"
                            src="https://www.google.com/maps?q=Bangalore&output=embed"
                            className="map"
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>

                        <div className="contact-info" style={{ marginTop: "20px" }}>
                            <h4 style={{
                                fontSize: "16px",
                                color: "#888",
                                marginBottom: "15px",
                                letterSpacing: "1px"
                            }}>
                                REACH US THROUGH
                            </h4>

                            {/* Address */}
                            <div style={{
                                display: "flex",
                                alignItems: "flex-start",
                                gap: "10px",
                                marginBottom: "12px"
                            }}>
                                <PlaceIcon sx={{ color: "rgb(72,72,205)", fontSize: 22, marginTop: "3px" }} />
                                <p style={{ margin: 0, fontSize: "16px", color: "#555", lineHeight: "1.6" }}>
                                    Old Madras Road,
                                    Bangalore 560 036
                                </p>
                            </div>

                            {/* Phone */}
                            <div style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "10px",
                                marginBottom: "12px"
                            }}>
                                <PhoneEnabledIcon sx={{ color: "rgb(72,72,205)", fontSize: 22 }} />
                                <p style={{ margin: 0, fontSize: "16px", color: "#555" }}>
                                    +91 1234567898
                                </p>
                            </div>

                            {/* Email */}
                            <div style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "10px"
                            }}>
                                <DraftsOutlinedIcon sx={{ color: "rgb(72,72,205)", fontSize: 22 }} />
                                <p style={{ margin: 0, fontSize: "14px", color: "#555" }}>
                                    contact@parkease.com
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* RIGHT SIDE */}
                    <div className="contact-right">
                        <h3>Let's get in touch!</h3>
                        <p>
                            Have a parking related query, fill the form and we’ll connect with you shortly
                        </p>

                        <form className="contact-form" onSubmit={handleSubmit}>

                            <input
                                type="text"
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />

                            <input
                                type="tel"
                                placeholder="Phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required

                            />
                            <input
                                type="text"
                                placeholder="City"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                            />

                            <input
                                type="text"
                                placeholder="Company Name"
                                value={companyName}
                                onChange={(e) => setCompanyName(e.target.value)}
                            />
                            <textarea
                                placeholder="Message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            >
                            </textarea>
                            <button type="submit">Submit</button>
                        </form>

                        {/* Social Icons */}
                        <div className="social-icons">
                            <FaFacebookF />
                            <FaTwitter />
                            <FaLinkedinIn />
                            <FaInstagram />
                        </div>
                    </div>
                </div>
            </div>

            {/* WhatsApp Floating Button */}
            <a
                href="https://wa.me/917204074928"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn"
            >
                <FaWhatsapp /> Whatsapp
            </a>
        </section>
    );
};

export default ContactSection;
