const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')

const app = express();
const uri = process.env.MONGO_URI;

mongoose
  .connect(uri, { useNewUrlParser: true, useCreateIndex: true })
  .

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(5000, () => {
  console.log('Server started on port 5000');
});