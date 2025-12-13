import { useState } from "react";
import { assets } from "../../assets/assets";
import "./Add.css"
export default function Add(){
    const [image,setImage]=useState(false);
    return(
        <div className="add">
            <form className="flex-col">
                <div className="add-img-upload flex-col">
                    <p>Upload Image</p>
                    <label htmlFor="image">
                        <img src={image?URL.createObjectURL(image):assets.upload}/>
                    </label>
                    <input  onChange={(event)=>setImage(event.target.files[0])} type="file" id="image" hidden required/>
                </div>
                <div className="add-product-name flex-col">
                    <p>Product name</p>
                    <input type="text" name="name" placeholder="type Here"/>
                </div>
                <div className="add-product-description">
                    <p>Product Description</p>
                    <textarea name="description" rows="6" placeholder="Write Content here" required></textarea>
                </div>
                <div className="add-category-price">
                    <div className="add-category flex-col">
                        <p>Product Category</p>
                        <select name="category" className="ji">
                            <option value="Salad">Salad</option>
                            <option value="Rolls">Rolls</option>
                            <option value="Deserts">Deserts</option>
                            <option value="Sandwitch">Sandwitch</option>
                            <option value="Cake">Cake</option>
                            <option value="Pure Veg">Pure Veg</option>
                            <option value="Pasta">Pasta</option>
                            <option value="Noodels">Noodles</option>
                        </select>
                    </div>
                    <div className="add-price flex-col">
                        <p>Product price</p>
                        <input type="number" name="price" placeholder="$20" min="5" max="100" />
                    </div>

                </div>
                <button type="submit" className="add-btn">Add</button>

            </form>
            
        </div>

    );
}