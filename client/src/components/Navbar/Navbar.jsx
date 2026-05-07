import { Link } from "react-router-dom";
import "./navbar.css";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import { useNavigate } from "react-router-dom";

const Navbar = () => {

    const navigate = useNavigate();

    return (
        <div class="navbar-wrapper">
            <nav className="navbar">

                <h2 className="logo">
                    ParkEase
                    <LocationOnIcon sx={{ fontSize: 35, color: "rgb(72, 72, 205)" }} />
                </h2>

                <div className="nav-links">
                    <Link to="/" className="btn">Home</Link>
                    <Link to="/business" className="btn">For Businesses</Link>
                    <Link to="/tech" className="btn">Our Tech</Link>
                    <Link to="/about" className="btn">About </Link>
                    {/* <Link to="/career" className="btn">Career</Link> */}
                    {/* <Link to="/reads" className="btn">Reads</Link> */}
                    <Link to="/contact" className="btn">Contact</Link>
                    <button
                        className="contact-btn"
                        onClick={() => navigate("/contact")}
                    >
                        <EmailOutlinedIcon className="btn-icon" />
                        Get In Touch
                    </button>
                </div>
            </nav>
        </div>
    );
};


export default Navbar;