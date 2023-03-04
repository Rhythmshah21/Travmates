const Blog = require("../models/blogModel");
const asyncHandler=require("express-async-handler");
const getBlogs = asyncHandler(async(req,res)=>{
        const blogs = await Blog.find(req.params.id);
        res.json(blogs);
    }
)
const createBlog=asyncHandler(
    async(req,res)=>{
        const {title,content,imageURL} =req.body;
        if(!title || !content || !imageURL){
            res.status(400);
            throw new Error("Please fill all the fields");
        }
        else{
            const blog = new Blog(
                {title:req.body.title,
                content:req.body.content,
                imageURL:req.body.imageURL,
                id:req.body.id});
            const createdBlog = await blog.save();
            res.json(createdBlog);
        }
    }
)
const getBlogById=asyncHandler(
    async(req,res)=>{
        const blog = await Blog.findById(req.params.id);
        if(blog){
            res.json(blog);
        }
        else{
            res.status(404).json({message:"Blog not found"});
        }
       
    }
)
const updateBlog=asyncHandler(
    async(req,res)=>{
        const {title,content,imageURL,id} = req.body;
        const blog = await Blog.findById(req.params.id);
        if(blog){
            blog.title=title;
            blog.content=content;
            blog.imageURL=imageURL;
            blog.id=id;

            const updatedBlog= await blog.save();
            res.json(updatedBlog);
        }
        else
        {
            res.status(404).json({message:"Blog not found"});
        }
    }
)
const deleteBlog=asyncHandler(
    async(req,res)=>{
        // const {title,content,imageURL,id} = req.body;
        const blog = await Blog.findById(req.params.id);
        if(blog){
        await blog.deleteMany({});
           res.json({message:"Blog removed"});

        
        }
        else
        {
            res.status(404).json({message:"Blog not found"});
        }
    }
)


module.exports={getBlogs,createBlog,getBlogById,updateBlog,deleteBlog};