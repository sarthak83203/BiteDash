import { assets } from "../../assets/assets";
import "./Navbar.css"
import {useContext, useState} from "react";
import deli from "../../assets/deli.png";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

export default function Navbar({setShowLogin}){
    const {getTotalCartAmount}=useContext(StoreContext);
    const [menu,setMenu]=useState("Home"); 
    return(
       <div className="navbar">
        <Link to="/"><img  src={deli} alt="" className="logo"/></Link>
     
        <ul className="navbar-menu">
            <Link to="/"  onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</Link>
            
            <a href="#exploremenu" onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Menu</a>
            <a href="#app-download" onClick={()=>setMenu("Mobile-app")} className={menu==="Mobile-app"?"active":""}>Mobile-app</a>
            <a href="#footer" onClick={()=>setMenu("Contact Us")} className={menu==="Contact Us"?"active":""}>Contact Us</a>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt=""/>
            <div className="navbar-search-icon">
               <Link to="/cart"> <img src={assets.basket_icon}/></Link>
                <div className={getTotalCartAmount()===0?"":"dot"}></div>
            </div>
            <button onClick ={()=>setShowLogin(true)} className="button">Sign in</button>

        </div>

       </div>
       

    );
}