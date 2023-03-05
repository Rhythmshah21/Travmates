const mongoose=require('mongoose')

const travelSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image:
    {
        type:String,
        required:true

    },
   
  },
  {
    timestamps: true,
  }
);

const Travel = mongoose.model("Travel", travelSchema);

module.exports=Travel;