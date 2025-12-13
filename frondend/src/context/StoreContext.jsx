import { createContext, useEffect } from "react";
import { food_list } from "../assets/assets";
import {useState} from "react";
export const StoreContext=createContext(null);
const StoreContextProvider=(props)=>{
    const [cartItem,setCartItem]=useState({});

    function addcart(itemid){ //If the user Add one item in card then this statment is executed..
        if(!cartItem[itemid]){ //this is create new entry to our product..
            setCartItem((prev)=>({...prev,[itemid]:1}))
        }else{ //if it is already one then set this...
            setCartItem((prev)=>({...prev,[itemid]:prev[itemid]+1}));
        }
    }

    function removeitemid(itemid){
        setCartItem((prev)=>({...prev,[itemid]:prev[itemid]-1}));

    }

 //When the cart item get updated it will print
const getTotalCartAmount=()=>{
    let totalAmount=0;
    for(let item in food_list){
        if(cartItem[item]>0){ //if Quantity is &gt than 0
            let itemInfo=food_list.find((product)=>product._id===item);
        totalAmount+=itemInfo.price * cartItem[item];     

        }
        
    }
    return totalAmount;
}

  //Context API allows you to use all this components in  other Files....
    const contextValue={
        food_list, //Now we can access this food list anywhere
        cartItem, //Using Context API we can use all this things in other things....
        setCartItem,
        addcart,
        removeitemid,
        getTotalCartAmount,
        

    }
    //Because of this context we can access this food-list anywhere....
  
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider;