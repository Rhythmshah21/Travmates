const express = require('express');
const { getBlogs,createBlog,getBlogById ,updateBlog,deleteBlog} = require('../controllers/blogController');
const router = express.Router();
router.route('/').get(getBlogs)
 router.route('/create').post(createBlog);
router.route('/:id').get(getBlogById).put(updateBlog).delete(deleteBlog);

module.exports=router;