const express = require('express');
const User = require("../models/userSchema")
const router = express.Router();
// const createProfile=asyncHandler(
//     async(req,res)=>{
//         const {firstName,LastName,gender,age,date,city,state,country,message} =req.body;
//         if(!firstName || !LastName || !gender || !age || !date || !city || !state || !country ){
//             res.status(400);
//             throw new Error("Please fill all the fields");
//         }
//         else{
//             const user = new Profile(
//                 {firstName:req.body.firstName,
//                 LastName:req.body.LastName,
//                 gender:req.body.gender,
//                 date:req.body.date,
//                 city:req.body.city,
//                 state:req.body.state,
//                 country:req.body.country,
//                 message:req.body.message,
//                 id:req.body.id});
//             const createdProfile = await user.save();
//             res.json(createdProfile);
//         }
//     }
// )
router.get('/', (req, res) => {
    res.send('Hello, World!');
});

// router.route('/userprofile').post(createProfile);

router.post('/userprofile', async(req,res) => {
    const {firstName,LastName,gender,age,date,city,state,country,message} =req.body;
    // console.log(req.body.gender);
    res.json({message : req.body})
    if( !firstName || !LastName || !gender || !age || !date || !city || !state || !country || !message)
    {
        res.status(422);
        return res.json({error: "pls fill all"})
    }

})

module.exports = router ;