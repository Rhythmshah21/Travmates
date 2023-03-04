const express = require('express');
const dotenv = require("dotenv");
const blogRoutes=require('./routes/blogRoutes')

const connectDB = require("./config/db");
const app = express();
dotenv.config();
app.use(express.json());

connectDB();
const middleware = (req, res, next) => {
  console.log(`middleware se hello`)
}
middleware();

const PORT = 3001 || 3002;
app.listen(PORT, console.log(`server started on port ${PORT}`));

const User = require('./models/userSchema')

//app.use(express.json());
app.use("/api/blogs",blogRoutes);
app.use(require('./router/auth'))

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});
app.get('/explore', middleware,  (req, res) => {
  res.send('Hello, World!');

});
app.get('/userprofile', (req, res) => {
  res.send('Hello, World!');
});
console.log(process.env.MONGO_UR);
