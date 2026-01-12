import { useContext } from "react";
import "./PlaceOrder.css"
import { StoreContext } from "../../context/StoreContext";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


export default function PlaceOrder(){
    const {getTotalCartAmount,token,food_list,cartItem,url} =useContext(StoreContext);
    const [data,setData]=useState({
        firstName:"",
        lastName:"",
        email:"",
        street:"",
        city:"",
        state:"",
        zipcode:"",
        country:"",
        phone:"",

    })
const navigate = useNavigate();


    //Now creating onchange handler function so that we can get data saved in that...
    const onChangeHandler=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setData((data)=>({...data,[name]:value}));

    }

    useEffect(()=>{
        if(!token){
            navigate("/cart");
        }else if(getTotalCartAmount()===0){
            navigate('/cart');

        }


    },[data])
    const placeOrder= async (event)=>{
       event.preventDefault()

        //calling api's
       let orderItems = [];

food_list.forEach((item) => {
  if (cartItem[item._id] > 0) {
    orderItems.push({
      ...item,
      quantity: cartItem[item._id],
    });
  }
});

        console.log(orderItems);
        let orderData={
            address:data,
            items:orderItems,
            amount:getTotalCartAmount()+2,
        }
        let response=await axios.post(url+"/api/order/place",orderData,{headers:{token}});
        if(response.data.success){
            const {session_url}=response.data;
            window.location.replace(session_url);
        }
        else{
            alert("Error");
        }



    }





    return(
        <form onSubmit={placeOrder} className="place-order">
            <div className="place-order-left">
                <p className="title">Delivery Information</p>
                <div className="multi-fields">
                    <input  required name="firstName" onChange={onChangeHandler} value={data.firstName} type="text" placeholder="First Name"/>
                    <input  required name="lastName" onChange={onChangeHandler} value={data.lastName} type="text" placeholder="last Name"/>
                </div>
                <div className="multi-fields">
                    <input  required name="email" onChange={onChangeHandler} value={data.email} type="text" placeholder="Email Address"/>
                <input   required name="street" onChange={onChangeHandler} value={data.street} type="text" placeholder="Street"/>

                </div>
               
                
                <div className="multi-fields">
                    <input  required name="city" onChange={onChangeHandler} value={data.city} type="text" placeholder="City"/>
                    <input  required name="state" onChange={onChangeHandler} value={data.state} type="text" placeholder="State"/>
                </div>
                <div className="multi-fields">
                    <input  required name="zipcode" onChange={onChangeHandler} value={data.zipcode} type="text" placeholder="Pin Code"/>
                    <input  required name="country" onChange={onChangeHandler} value={data.country} type="text" placeholder="Country"/>
                    <input  required name="phone" onChange={onChangeHandler} value={data.phone} type="text" placeholder="Phone Number"/>
                </div>
                

            </div>
            <div className="place-order-right">
            <div className="cart-total">
                    <h2>Cart Totals</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>SubTotal</p>
                            <p>${getTotalCartAmount()}</p>

                        </div>
                        <hr/>
                        <div className="cart-total-details">
                            <p>Delivery Fee</p>
                            <p>${getTotalCartAmount()===0?0:"40"}</p>
                        </div>
                        <hr/>
                        <div className="cart-total-details">
                            <p>Total</p>
                            <p>${getTotalCartAmount()===0?0:getTotalCartAmount()+40}</p>
                        </div>
                       
                       
                    </div>
                     <button type="submit" >PROCEED TO CHECKOUT</button>
                </div>
            </div>

        </form>

    );
}