import { useContext, useEffect, useState } from "react";
import "./MyOrders.css"
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { assets } from "../../assets/assets";

export default function MyOrders(){
    //Fetching users data and saving in one variable...
    const [data,setData]=useState([]);
    const {url,token} =useContext(StoreContext);
    const fetchOrders=async()=>{
        const response=await axios.post(url+"/api/order/userOrder",{},{headers:{token}});
        setData(response.data.data); //Now users data to be saved ......
        console.log("parcel:", assets.parcel_icon);





    }
    
     //Whenenever the website is being loaded we have to keep tracking....
      
     useEffect(()=>{
        if(token){
            fetchOrders();
        }
     },[token]); //Whenever the token is getting updated 


console.log(assets.parcel_icon);

    const lastOrder = data[data.length - 1]; // get last order

return (
    <div className="my-orders">
        <h2>My orders</h2>
        <div className="container">
            {data.map((order,index)=>{
                return(
                    //Key is set as index...
                    <div key={index} className="my-order-order"> 
                        <img src={assets.parcel_icon} alt=""/>
                        <p>{order.items.map((item,index)=>{
                            if(index===order.items.length-1){ //last item of user order
                                return item.name+" X "+item.quantity;

                            }else{
                                return item.name+" X "+item.quantity+",";
                            }

                        })}</p>
                        <p>${order.amount}.00</p>
                        <p>Items:{order.items.length}</p>
                        <p><span>&#x25cf;</span>{order.status}</p>
                        {/* It should be track again and again.. */}
                        <button onClick={fetchOrders}>Track order</button> 
                    </div>

                );
            })}
        </div>
    </div>
  
);

}