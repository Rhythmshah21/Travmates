const express = require('express');
const dotenv = require("dotenv");


const connectDB = require("./config/db");
const app =express();
dotenv.config();

connectDB();

const PORT = 3001 || 3002;
app.listen(PORT, console.log(`server started on port ${PORT}`));


//app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});
console.log(process.env.MONGO_UR);
