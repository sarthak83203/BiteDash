import { useContext, useEffect, useState } from "react";
import "./MyOrders.css"
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
export default function MyOrders(){
    //Fetching users data and saving in one variable...
    const [data,setData]=useState([]);
    const {url,token} =useContext(StoreContext);
    const fetchOrders=async()=>{
        const response=await axios.post(url+"/api/order/userOrder",{},{headers:{token}});
        setData(response.data.data); //Now users data to be saved ......
        console.log(response.data.data);




    }
    
     //Whenenever the website is being loaded we have to keep tracking..
      
     useEffect(()=>{
        if(token){
            fetchOrders();
        }
     },[token]); //Whenever the token is getting updated 




    return (
        <div className="my-orders">
            <h2>My Orders</h2>
            <div className="container">
                {data.map((order,index)=>{
                    return(
                    <div key={index} className="my-orders-order">


                    </div>

                    );

                })}
            </div>

        </div>

    );
}