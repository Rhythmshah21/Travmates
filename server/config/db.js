const mongoose = require('mongoose');
const connectDB = async()=>{
    try{
        const conn = await mongoose.connect('mongodb+srv://Priyanka:srcn1224@cluster0.nkkkjsw.mongodb.net/travel',{
            useUnifiedTopology :true,
            useNewUrlParser:true,
            // useCreateIndex:true,
            // useFindAndModify:false,

        });

        console.log(`MongoDB connected:${conn.connection.host}`);

    }catch(error){
        console.log(`Error:${error.message}`);
        process.exit();

    }
}
module.exports = connectDB;