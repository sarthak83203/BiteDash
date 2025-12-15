import mongoose from "mongoose"
//This i am making model in database not in frontend
const UserSchema=new mongoose.Schema({
    name:{type:Number,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    cartData:{type:Object,default:{}},
    
},{minimize:false});

const usermodel=mongoose.models.user || mongoose.model("user",UserSchema); //here user is part of MONGODB itself
export default usermodel;