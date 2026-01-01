import usermodel from "../models/userModel.js";

//adding item to cart
const addToCart= async(req,res)=>{
    try{
        let userdata=await usermodel.findOne({_id:req.body.userId}); //used in middle ware
        let cartData=await userdata.cartData;
        if(!cartData[req.body.itemId]){
            cartData[req.body.itemId]=1;

        }
        else{
            cartData[req.body.itemId]+=1;
        }
        await usermodel.findByIdAndUpdate(req.body.userId,{cartData});
        
        res.json({
            success:true,
            message:"Added to cart",
        })

    }
    catch(err){
        console.log(err);
        res.json({
            success:false,
            message:"Error",
        })

    }


}

//remove items from user cart

const removeFromCart=async (req,res)=>{

}

//fetching user cart data

const getCart=async (req,res)=>{

}

export {addToCart,removeFromCart,getCart};

