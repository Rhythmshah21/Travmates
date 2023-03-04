const express = require('express');

const router = express.Router();
const createProfile=asyncHandler(
    async(req,res)=>{
        const {title,content,imageURL} =req.body;
        if(!title || !content || !imageURL){
            res.status(400);
            throw new Error("Please fill all the fields");
        }
        else{
            const blog = new Blog(
                {});
            const createdBlog = await blog.save();
            res.json(createdBlog);
        }
    }
)
router.get('/', (req, res) => {
    res.send('Hello, World!');
});

router.route('/userprofile').post(createProfile);

router.post('/userprofile', (req,res) => {
    // console.log(req.body.gender);
    res.json({message : req.body})

})

module.exports = router ;