import foodModel from "../models/foodModel.js";

import fs from "fs";

export const addfood = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "Image not uploaded"
            });
        }

        const food = new foodModel({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
            image: req.file.filename
        });

        await food.save();

        res.status(201).json({
            success: true,
            message: "Food Added Successfully",
            data: food
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Error Adding Food",
            error: err.message,
        });
    }
};

//Listed food items in database...
export const listFood=async (req,res)=>{
    try{
        const foods=await foodModel.find({});
        res.json({
            success:true,
            data:foods,
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

//remove food item

export const removeFood=async (req,res)=>{
    try{
        const food=await foodModel.findById(req.body.id); //finding food where it is....
        fs.unlink(`uploads/${food.image}`,()=>{}); //To delete image from the folder...

        await foodModel.findByIdAndDelete(req.body.id); //food Data will be deleted from the database...
        res.json({
            success:true,
            message:"Yes successfully Deleted",
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

