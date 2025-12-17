import usermodel from "../models/userModel.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"


//login user
 export const loginUser=async (req,res)=>{
    const {password,email}=req.body;
    try{
        const user=await usermodel.findOne({email});
        if(!user){
            return res.json({
                success:false,
                message:"Not a user",
            })
        }

        //No use of validating.Just check na.......
        // if(!validator.isEmail(email)){
        //     return res.json({
        //         success:false,
        //         message:"Email is Invalid"
        //     })
        // }

       //if matching then true or false
        const isMatch=await bcrypt.compare(password,user.password);
       if(!isMatch){
        return res.json({
            success:false,
            message:"Password is incorrect,Enter again"
        })
       }

       //if password is matching then we will generate one token...

       const token=createtoken(user._id);
       res.json({
        success:true,
        token,
        message:"Login successfully",
       })



    }catch(error){
        res.json({
            success:false,
            message:error.message,

        })

    }


    
    

}

const createtoken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET);
}


//Register of user

export  const registerUser=async (req,res)=>{
    //Now we have to destraucture that name,password,email and all
    const {name,password,email}=req.body;
    try{
        //checking his user already exist
    
        const exist=await usermodel.findOne({email});
        if(exist){
            return res.json({
                success:false,
                message:" User already Exist",
            })
        }

        //validating email format and strong password
        if(!validator.isEmail(email)){
            return res.json({
                success:false,
                message:"Not an Valid email, Enter again"
            })
        }

        if(password.length<8){
            return res.json({
                success:false,
                message:"Enter a strong password",

            })
        }

        //hashing user password

        const salt=await bcrypt.genSalt(10);
        const hash=await bcrypt.hash(password,salt);

       //Now creating new account
       const newUser=new usermodel({
         name:name, //Which is coming from rrq.body
         email:email,
         password:hash,
       })

     const users=await newUser.save();
     //now making token with function
     const token=createtoken(users._id);
     res.json({
        success:true,
        token,
     })
    
    }catch(error){
        res.json({
            success:false,
            message:error.message,
        })

    }


}

