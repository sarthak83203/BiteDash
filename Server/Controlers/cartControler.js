import usermodel from "../models/userModel.js";

//adding item to cart
const addToCart= async(req,res)=>{
    try{
        let userdata=await usermodel.findById(req.user.id); //used in middle ware
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
    try{
        let userdata=await usermodel.findById(req.user.id);
        //take the cart data
        let cartData=await userdata.cartData; //storing cartdata to userdata.....
        if(cartData[req.body.itemId]>0){
            cartData[req.body.itemId]-=1;

        }else{
            delete cartData[req.body.itemId];
        }
        //Now updating database.....
        await usermodel.findByIdAndUpdate(req.body.userId,{cartData});
        res.json({
            success:true,
            message:"Removed from the cart successfully",
        });

    }
    catch(err){
        console.log(err);
        res.json({
            success:true,
            message:err.message,
        })

    }

}

//fetching user cart data

const getCart=async (req,res)=>{
    try{
        let userdata=await usermodel.findById(req.user.id);
        let cartData=await userdata.cartData;
        //after getting cart data just create an response..
        res.json({
            success:true,
            cartData,
        })

    }
    catch(err){
        console.log(err);
        res.json({
            success:false,
            message:"Error is caused...",
        })

    }

}

export {addToCart,removeFromCart,getCart};

