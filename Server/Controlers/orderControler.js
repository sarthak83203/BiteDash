import orderModel from "../models/orderModel.js";
import usermodel from "../models/userModel.js";
import Stripe from "stripe";

const stripe=new Stripe(process.env.STRIPE_SECRET_KEY); //Created an Stripe Support....


//placing order...
const placeOrder = async (req,res)=>{
    try{
        const neworder=new orderModel({
            userId:req.user.id, //when userid will generate token with userId..

        })

    }catch(err){

    }





}
export {placeOrder};