import { useState } from "react";
import "./Orders.css"
import { useContext } from "react";
import { StoreContext } from "../../../../frontend/src/context/StoreContext";
import axios from "axios";
import {toast} from "react-toastify"
import { useEffect } from "react";
import { assets } from "../../../../frontend/src/assets/assets";
export default function Orders(){
    const url="http://localhost:4000";
   

    const [orders,setOrders]=useState([]);

    const fetchAllOrders=async()=>{
        const response=await axios.get(url+"/api/order/list");
        if(response.data.success){
            setOrders(response.data.data);
            console.log(response.data.data);

        }else{
            toast.error("Error");

        }

    }
    useEffect(()=>{ //Checking whether the order is comig or not....
        fetchAllOrders();    
    },[])


    const statusHandler=async(event,orderId)=>{
       //whenver changes will be done it will call api
       const response=await axios.post(url+"/api/order/status",{
        orderId,
        status:event.target.value

       });

       if(response.data.success){
        await fetchAllOrders();
       }

    }



     return (
        //Great logic of getting food...
        <div className="order add">
            <h3>Order Page</h3>

            <div className="order-list">
                {orders.map((order, index) => (
                    <div key={order._id || index} className="order-item">
                        <img src={assets.parcel_icon} alt="parcel" />
                            {/* Geting all the data from backend...... */}
                        <div>
                            <p className="order-item-food">
                                {order.items.map((item, i) => (
                                    <span key={i}>
                                        {item.name} x {item.quantity}
                                        {i !== order.items.length - 1 && ", "}
                                    </span>
                                ))}
                            </p>
                        
                            <p>Amount: ${order.amount}</p> 
                            
                            <p>Status: {order.payment ? "Paid" : "Pending"}</p>
                            <p className="order-item-name">{order.address.firstName+ " "+order.address.lastName}</p>
                            <div className="order-item-address">
                                <p>{order.address.street+", "}</p>
                                <p>{order.address.city+", "+order.address.state+", "+order.address.country+", "+order.address.zipcode}</p> 
                                
                                
                            </div>
                            <p className="order-item-phone">{order.address.phone}</p>
                            <select onChange={(event)=>statusHandler(event,order._id)} value={order.status}>
                               <option value="Food Processing">Food Processing</option>
                               <option value="Out for Delivery">Out for Delivery</option>
                               <option value="Delivered">Delivered</option>
                            </select>
                            
                        </div>
                        
                    </div>
                ))}
            </div>
        </div>
    );
}
