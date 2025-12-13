import express from "express"
import { addfood } from "../Controlers/foodcontroler.js"
import multer from "multer"
import { listFood } from "../Controlers/foodcontroler.js";
import { removeFood } from "../Controlers/foodcontroler.js";


const foodRouter=express.Router();
//By this upper one we can create get,post,delete method using routes
 //image Storage engline


//Image Storage Engine
const storage=multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{ //callback
        return cb(null,`${Date.now()}${file.originalname}`);
    }
})

const upload=multer({storage:storage});

foodRouter.post("/add",upload.single("image"),addfood);
foodRouter.get("/list",listFood);
foodRouter.post("/remove",removeFood);




export default foodRouter;