import mongoose from "mongoose"
 //Exporting to access in index.js
export const connectDb=async () =>{
    await mongoose.connect("mongodb+srv://sarthak:32403@cluster0.vaxp1x7.mongodb.net/food-del")
    .then(()=>{
        console.log("DB Connected");
    })
    .catch((err)=>{
        console.log("Not Connected Error",err);
    })
    
}
