import express from "express";
import authMiddleware from "../middleware/auth.js"
import { listOrder, placeOrder, updateStatus, usersOrders, verifyOrder } from "../Controlers/orderControler.js";

const orderRouter=express.Router();
orderRouter.post("/place",authMiddleware,placeOrder); //To check whether user is authenticated or not.........
orderRouter.post("/verify",verifyOrder);
orderRouter.post("/userOrder",authMiddleware,usersOrders); //adding middle ware which convert auth token to the userId
orderRouter.get("/list",listOrder);
orderRouter.post("/status",updateStatus);

export default orderRouter;
