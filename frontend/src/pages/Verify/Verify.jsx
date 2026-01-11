import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import "./Verify.css"
import { useContext, useEffect } from "react";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios"
export default function Verify(){
    //Success = true and orderId

    const [searchParams,setSearchParams]=useSearchParams(); //used to read and update URL...
    //getting data from URL using keys
    const success=searchParams.get("success")==="true"; //We will get the value of success...
    const orderId=searchParams.get("orderId");

    console.log(success,orderId);//if am i getting data then set it as true..
    const {url} =useContext(StoreContext);
    const navigate=useNavigate();
    //lets create spinner 
    
    const verifypayment= async()=>{
        try{
            console.log("SENDING TO BACKEND ", { success, orderId });
             const response=await axios.post(url+"/api/order/verify",{success,orderId});
        console.log(response.data);
        if(response.data.success){
            navigate("/myorders");
        }else{
            navigate("/");
        }

        }catch(err){
            console.log(err);
        }
       

    }
    

   useEffect(()=>{
    verifypayment();
   },[])

    return(
        <div className="verify">
            <div className="spinner"></div>

        </div>

    );
}