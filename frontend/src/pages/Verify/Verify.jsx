import { useSearchParams } from "react-router-dom";
import "./Verify.css"
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
export default function Verify(){
    //Success = true and orderId

    const [searchParams,setSearchParams]=useSearchParams(); //used to read and update URL...
    //getting data from URL using keys
    const success=searchParams.get("success"); //We will get the value of success...
    const orderId=searchParams.get("orderId");

    console.log(success,orderId);//if am i getting data then set it as true..
    const {url} =useContext(StoreContext);
    //lets create spinner 

    return(
        <div className="verify">
            <div className="spinner"></div>

        </div>

    );
}