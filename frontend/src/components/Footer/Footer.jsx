import { assets } from "../../assets/assets";
import "./Footer.css";
import deli from "../../assets/deli.png";

export default function Footer() {
    return (
        <div className="footer" id="footer">
            <div className="footer-content">

                <div className="footer-content-left">
                    <div className="footer-logo-wrapper">
                        <img src={deli} alt="Logo" className="footer-logo"/>
                    </div>

                    <p className="footer-text">This Website is very Good</p>

                    <div className="footer-social-item">
                        <img src={assets.facebook_icon} alt="facebook"/>
                        <img src={assets.twitter_icon} alt="twitter"/>
                        <img src={assets.linkedin_icon} alt="linkedin"/>
                    </div>
                </div>

                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li className="footer-link">Home</li>
                        <li className="footer-link">About Us</li>
                        <li className="footer-link">Delivery</li>
                        <li className="footer-link">Privacy Policy</li>
                    </ul>
                </div>

                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li className="footer-link">+1-212-2365-123</li>
                        <li className="footer-link">3256-8956-4521</li>
                    </ul>
                </div>

            </div>
        </div>
    );
}
