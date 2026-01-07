import express from "express";
import authMiddleware from "../middleware/auth.js"
import { placeOrder } from "../Controlers/orderControler.js";

const orderRouter=express.Router();
orderRouter.post("/place",authMiddleware,placeOrder); //To check whether user is authenticated or not.........

export default orderRouter;
