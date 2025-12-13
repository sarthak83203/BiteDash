import { assets } from "../../assets/assets";
import "./Footer.css"
import deli from "../../assets/deli.png";
export default function Footer(){
    return(
        <div className="footer" id="footer">
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={deli} alt="" className="yes"/>
                    <p className="p">This Website is very Good </p>
                    <div className="footer-social-item">
                        <img src={assets.facebook_icon} alt=""/>
                        <img src={assets.twitter_icon} alt=""/>
                        <img src={assets.linkedin_icon} alt=""/>
                    </div>

                </div>
          
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul >
                        <li className="name">Home</li>
                        <li className="name">About Us</li>
                        <li className="name">Delivery</li>
                        <li className="name">Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul className="ul">
                        <li className="name">+1-212-2365-123</li>
                        <li className="name">3256-8956-4521</li>
                    </ul>
                </div>
                
                
            </div>




        </div>

    );
};