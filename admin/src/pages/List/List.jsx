//Fetchind data from Backend

import { useEffect, useState } from "react";
import "./List.css"
import axios from "axios";
import { toast } from "react-toastify";
export default function List(){
    const [list,setList]=useState([]);
    const [remove,setRemove]=useState("");

    const fetchList= async () =>{
        const response=await axios.get("http://localhost:4000/api/food/list");
        if(response.data.success){
            setList(response.data.data);
        }else{
            alert("Something went wrong in Database");
            toast.error("Error,something went wrong...."); 
        }


    }

    useEffect(()=>{
        fetchList();
    },[]);
    return(
        <div className="list add flex-col">
            <p>All Foods List</p>
            <div className="list-table">
                <div className="list-table-format title ">
                    <b>Image</b>
                    <b>Name</b>
                    <b>Category</b>
                    <b>price</b>
                    <b>Action</b>
                    
                </div>
                {list.map((item,index)=>{
                    return(
                        <div key={index} className="list-table-format">
                                <img src={"http://localhost:4000/images/"+item.image}/>
                                <p>{item.name}</p>
                                <p className="category">{item.category}</p>
                                <p className="price">${item.price}</p>
                                <p className="X">X</p>
                        </div>
                    );
                })}
            </div>

        </div>

    );
}