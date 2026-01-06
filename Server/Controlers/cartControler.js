import usermodel from "../models/userModel.js";

//adding item to cart


const addToCart = async (req, res) => {
  try {
    const { itemId } = req.body;

    if (!itemId) {
      return res.status(400).json({
        success: false,
        message: "itemId is required",
      });
    }

    let userdata = await usermodel.findById(req.user.id);

    // Make sure cartData is an object
    let cartData = userdata.cartData || {};

    if (!cartData[itemId]) {
      cartData[itemId] = 1;
    } else {
      cartData[itemId] += 1;
    }

    await usermodel.findByIdAndUpdate(req.user.id, { cartData });

    res.json({
      success: true,
      message: "Added to cart",
      cartData,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Error adding to cart",
    });
  }
};


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
        await usermodel.findByIdAndUpdate(req.user.id,{cartData});
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

