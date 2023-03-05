const User = require("../models/userModel");
const asyncHandler=require("express-async-handler");
const getUser = asyncHandler(async(req,res)=>{
        const users = await User.find(req.params.id);
        res.json(users);
    }
)
const createUser=asyncHandler(
    async(req,res)=>{
 
       
        const {firstName,lastName,gender,age,city,state,country,message} =req.body;
                 if(!firstName || !lastName || !gender || !age || !city || !state || !country || !message){
                   res.status(400);
                  throw new Error("Please fill all the fields");
            }
        else{
            const user = new User(
                                {firstName:req.body.firstName,
                                lastName:req.body.lastName,
                                gender:req.body.gender,
                                age:req.body.age,
                                // date:req.body.date,
                                city:req.body.city,
                                state:req.body.state,
                                country:req.body.country,
                                message:req.body.message,
                                id:req.body.id});
                            const createdUser = await user.save();
                            res.json(createdUser);
            
        }
    }
)
module.exports={getUser,createUser};