import express from "express";
import authMiddleware from "../middleware/auth.js"
import { placeOrder, verifyOrder } from "../Controlers/orderControler.js";

const orderRouter=express.Router();
orderRouter.post("/place",authMiddleware,placeOrder); //To check whether user is authenticated or not.........
orderRouter.post("/verify",verifyOrder);

export default orderRouter;
