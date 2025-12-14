import { useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import "./Add.css"
import axios from "axios";
import { toast } from "react-toastify";
export default function Add(){
    
    const [image,setImage]=useState(false);
    const [data,setData]=useState({
        name:"",
        description:"",
        price:"",
        category:"Salad"
        
    })
    const Onchange=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setData((data)=>({...data,[name]:value}));

    }

    useEffect(()=>{
        console.log(data);

    },[data])
  
    const onsubmit= async (event)=>{
        event.preventDefault();
        const formData=new FormData();
        formData.append("name",data.name);
        formData.append("description",data.description);
        formData.append("price",Number(data.price));
        formData.append("category",data.category);
        formData.append("image",image);
        const response= await axios.post("http://localhost:4000/api/food/add",formData);
        if(response.data.success){
            setData({
                name:"",
                description:"",
                price:"",
                category:"",
            })
            setImage(false);
            toast.success("Added Successfully");
        }else{
          alert("Something went wrong at Backend")
          toast.error("Not added,Something went wrong");
        }
    }

   
    return(
        <div className="add">
            <form className="flex-col" onSubmit={onsubmit}>
                <div className="add-img-upload flex-col">
                    <p>Upload Image</p>
                    <label htmlFor="image">
                        <img src={image?URL.createObjectURL(image):assets.upload}/>
                    </label>
                    <input  onChange={(event)=>setImage(event.target.files[0])} type="file" id="image" hidden required/>
                </div>
                <div className="add-product-name flex-col">
                    <p>Product name</p>
                    <input  onChange={Onchange} value={data.name}  type="text" name="name" placeholder="type Here"/>
                </div>
                <div className="add-product-description">
                    <p>Product Description</p>
                    <textarea onChange={Onchange} value={data.description} name="description" rows="6" placeholder="Write Content here" required></textarea>
                </div>
                <div className="add-category-price">
                    <div className="add-category flex-col">
                        <p>Product Category</p>
                        <select onChange={Onchange}  name="category" className="ji">
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
                        <input onChange={Onchange} value={data.price} type="number" name="price" placeholder="$20" min="5" max="100" />
                    </div>

                </div>
                <button type="submit" className="add-btn">Add</button>

            </form>
            
        </div>

    );
}