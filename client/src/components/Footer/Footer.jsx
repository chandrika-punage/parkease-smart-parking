import "./footer.css";
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import LocationOnIcon from '@mui/icons-material/LocationOn';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* ADDRESS */}
        <div className="footer-col">
          <h4>ADDRESS LIST</h4>
          {/* <p>WorkFlo by OYO, Ranka Junction, KR Puram,</p> */}
          <p>Old Madras Road, Bangalore 560036</p>

          <div className="footer-icon">
            <FaPhoneAlt />
            <span>+91 1234567898</span>
          </div>

          <div className="footer-icon">
            <FaEnvelope />
            <span>contact@parkease.com</span>
          </div>
        </div>

        {/* SOCIAL */}
        <div className="footer-col">
          <h4>SOCIAL NETWORKS</h4>

          <div className="footer-icon">
            <FaFacebookF />
            <span>@parkeaseapp</span>
          </div>

          <div className="footer-icon">
            <FaLinkedinIn />
            <span>@parkease-services-pvt-ltd</span>
          </div>

          <div className="footer-icon">
            <FaYoutube />
            <span>@ParkEase</span>
          </div>
        </div>

        {/* LINKS */}
        <div className="footer-col">
          <h4>LINKS LIST</h4>
          <p>About ParkEase</p>
          <p>Our Tech</p>
          <p>For Business</p>
          <p>Contact</p>
          <p>Privacy & Policy</p>
          <p>Career</p>
        </div>

        {/* COMPANY INFO */}
        <div className="footer-col company">
          <h2 className="logo">
            Park<span>Ease</span> 
            <LocationOnIcon sx={{ fontSize: 35, color: "rgb(72, 72, 205)" }} />
          </h2>

          <p>
            ParkEase is a smart parking and mobility solutions firm
            that designs solutions to manage parking spaces and
            eliminate the pain vehicle owners face every day.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;