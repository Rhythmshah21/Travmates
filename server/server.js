const express = require('express');
const dotenv = require("dotenv");
const blogRoutes=require('./routes/blogRoutes')
const userRoutes = require('./routes/userRoutes')
const travelRoutes = require('./routes/travelRoutes')
const connectDB = require("./config/db");
const cors = require('cors');
const app =express();
dotenv.config();
connectDB();
app.use(express.json());
app.use(cors());
const PORT = 3001 || 3002;
app.listen(PORT, console.log(`server started on port ${PORT}`));
app.use(express.json());
app.use("/api/blogs",blogRoutes);
app.use("/api/users",userRoutes);
app.use("/api/travels",travelRoutes);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});
// console.log(process.env.MONGO_URI);

// connectDB();

// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });

// app.get('/userprofile', (req, res) => {
//   res.send('Hello, World!');
// });
// console.log(process.env.MONGO_UR);
