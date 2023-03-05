const Travel = require("../models/travelModel");
const asyncHandler=require("express-async-handler");
const getTravel = asyncHandler(async(req,res)=>{
        const travels = await Travel.find(req.params.id);
        res.json(travels);
    }
)
const createTravel=asyncHandler(
    async(req,res)=>{
        const {title,description,image} =req.body;
        if(!title || !description || !image){
            res.status(400);
            throw new Error("Please fill all the fields");
        }
        else{
            const travel = new Travel(
                {title:req.body.title,
                description:req.body.description,
                image:req.body.image,
                });
            const createdTravel = await travel.save();
            res.json(createdTravel);
        }
    }
)
module.exports={getTravel,createTravel};