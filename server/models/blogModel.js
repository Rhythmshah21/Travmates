const mongoose=require('mongoose')

const blogSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    imageURL:
    {
        type:String,
        required:true

    },
    id: {
      type:Number,
     
      
    },
  },
  {
    timestamps: true,
  }
);

const Blog = mongoose.model("Blog", blogSchema);

module.exports=Blog;