import { useEffect } from "react";
import { assets } from "../../assets/assets";
import "./LoginPopup.css"
import {useState} from "react"
export default function LoginPopup({setShowLogin}){
    const [currState,setCurrState]=useState("Login");
   //Now i have to create the state function for integration

   const [data,setData]=useState({
    name:"",
    email:"",
    password:"",

   })

   //Now adding the onchange like if we add any input it will get store in state function

   const onchange=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    //Now giving this name and value in setdata
    setData((data)=>({...data,[name]:value}));

   }

   useEffect(()=>{
    console.log(data);

   },[data]);

   




    return(
        <div className="login-popup">
            <form className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt=""/>
                </div>
                <div className="login-popup-input">
                    {currState==="Login"?<></>:<input  name='name'  type="text" onChange={onchange} value={data.name} placeholder="Enter Your name" required/>}
                    
                    
                    <input type="email" name="email" val={data.email} onChange={onchange} placeholder="Your Email" required/>
                    
                    <input type="password"  name="password" val={data.password}  placeholder="Enter your password" required/>

                </div>
                <button>{currState==="Sign Up"?"Create Account":"Login"}</button>
                <div className="login-pop-condition">
                    <input type="checkbox" required/>
                    <p>By contining , i agree to the terms of use & privacy policy.</p>
                </div>
                {currState==="Login"?<p>Create New Account?<span className="span" onClick={()=>setCurrState("Sign Up")}>Click Here</span></p>:<p>Already Have an account?<span className="span"  onClick={()=>setCurrState("Login")}>Login Here</span></p>}
                
                

            </form>


        </div>

    );

}