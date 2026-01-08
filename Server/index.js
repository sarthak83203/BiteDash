import express from "express"
import cors from "cors"
import { connectDb } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import { listFood } from "./Controlers/foodcontroler.js";
import userRouter from "./routes/userRoute.js";
import "dotenv/config"
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import dotenv from "dotenv";
dotenv.config();
//App Config
const app=express();
const port =4000;

//Middleware
app.use(express.json());
app.use(cors()); //Can acces Fronend from Backend


//Db connection. Calling Function 
connectDb();

//API endpoints
app.use("/api/food",foodRouter); //Bringing the food router which contain express....
app.use("/images",express.static("uploads")); //Mounted this upload folder at this endpoints...
app.use("/api/user",userRouter);

app.use("/api/cart",cartRouter);
app.use("/api/order",orderRouter);

app.listen(port,()=>{
     console.log(`Server started at ${port}`);
})

app.get("/",(req,res)=>{
    res.send("HaHaHa");
})

//mongodb+srv://sarthak:83203@my-project.urhusmi.mongodb.net/?appName=My-Project


