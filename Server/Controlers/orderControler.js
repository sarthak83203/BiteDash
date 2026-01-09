import orderModel from "../models/orderModel.js";
import usermodel from "../models/userModel.js";
import Stripe from "stripe";

const stripe=new Stripe(process.env.STRIPE_SECRET_KEY); //Created an Stripe Support....

const verifyOrder= async (req,res)=>{
    //to verify order payment
    const {orderId,success}=req.query;
    try{
        if(success==="true"){
            await orderModel.findByIdAndUpdate(orderId,{payment:true});
            res.json({
                success:true,
                message:"Amount Paid SuccessFully",
            })
        }
        //If the data is not found it will go to database it should be deleted....
        else{
            await orderModel.findByIdAndDelete(orderId);
            res.json({
                success:false,
                message:"Not paid",
            })
        }

    }
    catch(err){
        console.log(err);
        res.json({
            success:false,
            message:err.message,
        })

    }


}


//placing order...
const placeOrder = async (req,res)=>{
    const frontend_url="http://localhost:5173";
    try{
        const neworder=new orderModel({
            userId:req.user.id, //when userid will generate token with userId..
            items:req.body.items,
            amount:req.body.amount,
            address:req.body.address,


        })
        await neworder.save();
        await usermodel.findByIdAndUpdate(req.user.id,{cart:{}}); //Now getting update of user..

        //adding logic which will creat payment link using stripe...

        const line_items=req.body.items.map((item)=>({
            price_data:{
                currency:"inr",
                product_data:{
                    name:item.name
                },
                 unit_amount: Math.round(item.price * 100)
                
            },
            quantity:item.quantity,

        }))

        //to push delivery charges

        line_items.push({
            price_data:{
                currency:"inr",
                product_data:{
                    name:"Delivery Charges"

                },
                unit_amount: 2 * 100,
            },
            quantity:2,

        })
        //Now checkout session will work.. important part...
        const session=await stripe.checkout.sessions.create({
            line_items:line_items,
            mode:"payment",
            //if payment is success then go to success
            success_url:`${frontend_url}/verify?success=true&orderId=${neworder._id}`,
            cancel_url:`${frontend_url}/verify?success=false&orderId=${neworder._id}`

        })
        res.json({
            success:true,
            session_url:session.url,

        })


    }catch(err){
        console.log(err);
        res.json({
            success:false,
            message:err.message,
        })

    }





}
export {placeOrder,verifyOrder};