import { assets } from "../../assets/assets";
import "./Navbar.css"
import {useContext, useState} from "react";
import deli from "../../assets/deli.png";
import { Link, useNavigate } from "react-router-dom"; //from react router dom
import { StoreContext } from "../../context/StoreContext";

export default function Navbar({setShowLogin}){
    const {getTotalCartAmount,token,setToken}=useContext(StoreContext);
    const [menu,setMenu]=useState("Home"); 
    const navigate=useNavigate();

    const logout=()=>{
        //Now after logout i am navigate to home page automatically
        localStorage.removeItem("token");
        setToken("");
        navigate("/");
        

    }

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
            {!token? <button onClick ={()=>setShowLogin(true)} className="button">Sign in</button>:
            <div className="navbar-profile">
                <img src={assets.profile_icon} alt="something"/>
                <ul className="nav-profile-dropdown">
                    <li onClick={()=>navigate('/myorders')}><img src={assets.bag_icon} alt="bag"/><p>Orders</p></li>
                    <hr/>
                    <li onClick={logout}><img src={assets.logout_icon} alt="logout"/><p>Logout</p></li>

                </ul>
                </div>}
           

        </div>

       </div>
       

    );
}