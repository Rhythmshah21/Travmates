const express = require('express');
const dotenv = require("dotenv");
const blogRoutes=require('./routes/blogRoutes')


const connectDB = require("./config/db");
const app =express();
dotenv.config();
app.use(express.json());

connectDB();

const PORT = 3001 || 3002;
app.listen(PORT, console.log(`server started on port ${PORT}`));


//app.use(express.json());
app.use("/api/blogs",blogRoutes);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});
console.log(process.env.MONGO_UR);
