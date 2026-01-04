import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import "./FoodItem.css";
import {useContext} from "react";



export default function FoodItem({id,name,price,description,image}){
    
    const {cartItem,addcart,removeitemid,url}=useContext(StoreContext); //So if can get access of this files.....
    return(
     <div className="food-item">
        <div className="food-item-img-container">
            <img  className="food-item-image" src={url+"/images/"+image}/>
            { //This Part is Best as it can use as adding and removing......
            //This Logic is Great By the Way....
                !cartItem[id]
                ?<img className="add" onClick={()=>addcart(id)} src={assets.add_icon_white} alt=""/>:
                <div className="item">
                    <img  onClick={()=>removeitemid(id)} className="adding" src={assets.remove_icon_red} alt=""/>
                    <p>{cartItem[id]}</p>
                    <img onClick={()=>addcart(id)} className="adding" src={assets.add_icon_green} alt=""/>
                </div>
                
            }
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts}/>
            </div>
            <p className="food-item-description">{description}</p>
            <p className="food-item-price">${price}</p>
        </div>

     </div>
    );
}