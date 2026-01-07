import { useContext } from "react";
import "./Cart.css"
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";
export default function Cart(){
    const {cartItem,food_list,removeitemid,getTotalCartAmount,url}=useContext(StoreContext);
  const navigate=useNavigate();
    return(
        <div className="cart">
            <div className="cart-items">
                <div className="cart-items-title">
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>

                </div>
                <br></br>
                <hr/>
                {food_list.map((item,index)=>{
                    if(cartItem[item._id]>0){ //if cart item contain product with item id then ==
                        return (
                            <>

                            <div className="cart-items-title cart-items-item">
                                <img src={url+"/images/"+item.image} alt=""/>
                                <p>{item.name}</p>
                                <p>${item.price}</p>
                                <p>{cartItem[item._id]}</p>
                                <p>${item.price * cartItem[item._id]}</p>
                                <p onClick={()=>removeitemid(item._id)} className="cross">x</p>


                            </div>
                            <hr></hr>
                            <br></br>
                            </>

                        );
                    }

                })}
            </div>
            <div className="cart-bottom">
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
                <div className="cart-promo-code">
                    <div>
                        <p>If you have have code,Enter Here</p>
                        <div className="cart-promo-input">
                            <input type="text" placeholder="promo Code"/>
                            <button>Submit</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    );
}