import express from 'express';
import mongoose from 'mongoose'
const bodyParser = require("body-parser")
const dotenv = require("dotenv")
dotenv.config()


const app = express();
const port = 3000;
app.use(bodyParser.json())

const usersRouter = require("./routes/users")
const blogsRouter = require("./routes/blogs")

app.use('/api/user', usersRouter)
app.use('/api/blogs', blogsRouter)

// PORT RUNNING
app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

// MONGO CONNECTION
const MONGO_URL = process.env.MONGO_URI;

mongoose.connect(MONGO_URL)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });