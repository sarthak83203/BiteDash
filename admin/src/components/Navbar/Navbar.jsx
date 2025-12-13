import "./Navbar.css";
import { assets } from "../../assets/assets";

import photo from "../../assets/photo.jpg";
import deli from "../../assets/deli.png";

export default function Navbar() {
  return (
    <div className="navbar">
       <div className="io">
      <img className="logo" src={deli} alt="" />
      <h1 >BiteDash</h1>
      </div>
      <img className="profile" src={photo} alt="" />
    </div>
  );
}
