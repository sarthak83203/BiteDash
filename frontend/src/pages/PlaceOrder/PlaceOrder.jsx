import { useContext } from "react";
import "./PlaceOrder.css"
import { StoreContext } from "../../context/StoreContext";
export default function PlaceOrder(){
    const {getTotalCartAmount} =useContext(StoreContext);
    return(
        <form className="place-order">
            <div className="place-order-left">
                <p className="title">Delivery Information</p>
                <div className="multi-fields">
                    <input type="text" placeholder="First Name"/>
                    <input type="text" placeholder="Last Name"/>
                </div>
                <div className="multi-fields">
                    <input type="text" placeholder="Email Address"/>
                <input type="text" placeholder="Street"/>

                </div>
               
                
                <div className="multi-fields">
                    <input type="text" placeholder="City"/>
                    <input type="text" placeholder="State"/>
                </div>
                <div className="multi-fields">
                    <input type="text" placeholder="Pin Code"/>
                    <input type="text" placeholder="Country"/>
                    <input type="text" placeholder="Phone Number"/>
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
                     <button onClick={()=>navigate("/order")}>PROCEED TO CHECKOUT</button>
                </div>
            </div>

        </form>

    );
}