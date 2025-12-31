import { createContext, useEffect } from "react";
import axios from "axios";
import {useState} from "react";
export const StoreContext=createContext(null);
const StoreContextProvider=(props)=>{
    const [cartItem,setCartItem]=useState({});
    const [token,setToken]=useState("");
    const [food_list,setFoodList]=useState([]);

    const url="http://localhost:4000";
    const fetchFoodList=async ()=>{
        const response=await axios.get(url+"/api/food/list");
        setFoodList(response.data.data);
    }

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
    for(let item in cartItem){
        if(cartItem[item]>0){ //if Quantity is &gt than 0
            let itemInfo=food_list.find((product)=>product._id===item);
        totalAmount+=itemInfo.price * cartItem[item];     

        }
        
    }
    return totalAmount;
}
//When it renders for first time then user remains same the logic 

useEffect(()=>{
   
    async function loaddata(){
        await fetchFoodList();
         if(localStorage.getItem("token")){
        setToken(localStorage.getItem("token"));
    }
    }
    
    loaddata();

},[])

  //Context API allows you to use all this components in  other Files....
    const contextValue={
        food_list, //Now we can access this food list anywhere
        cartItem, //Using Context API we can use all this things in other things....
        setCartItem,
        addcart,
        removeitemid,
        getTotalCartAmount,
        url,
        token,
        setToken,
        

    }
    //Because of this context we can access this food-list anywhere....
  
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider;