import React from "react";
import "./Parking.css";

import axios from "axios";
import { useState } from "react";

const Parking = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [countryCode, setCountryCode] = useState("+91");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            name,
            email,
            phone: countryCode + phone,
            message
        };

        try {
            await axios.post("http://localhost:8080/api/form", data);
            alert("Form Sent Successfully!");

            // Clearing the form after the submit button is clicked 
            setName("");
            setEmail("");
            setCountryCode("+91");
            setPhone("");
            setMessage("");

        } catch (err) {
            console.log(err);
            alert("Something went wrong");
        }
    };


    return (
        <section className="parkcont-section">
            <div className="parkcont-container">

                {/* LEFT SIDE - IMAGE */}
                <div className="parkcont-left">
                    <img src="https://i0.wp.com/valetez.com/wp-content/uploads/2024/07/Car-Parking-Shed.jpg?w=970&ssl=1"
                        alt="Parking" />
                </div>

                {/* RIGHT SIDE - CONTENT */}
                <div className="parkcont-right">
                    <h2>
                        <span>Parking Space</span>
                    </h2>

                    <p>
                        Please fill the information if you're looking to generate
                        income by renting out your parking space.
                    </p>

                    <form className="parkcont-form" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Full Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />

                        <input
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <div className="phone-group">

                            <select
                                value={countryCode}
                                onChange={(e) => setCountryCode(e.target.value)}
                            >
                                <option value="+91">+91</option>
                                <option value="+1">+1</option>
                                <option value="+44">+44</option>
                            </select>

                            <input
                                type="tel"
                                placeholder="Phone Number"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                            />
                        </div>

                        <textarea
                            placeholder="Your Message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>

                        <button type="submit">Submit</button>
                    </form>
                </div>

            </div>
        </section>
    );
};

export default Parking;