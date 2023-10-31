import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import { userRouter } from './routes/user';

const app = express();
const port = 3000;

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, Express! ecom');
});
app.use('/user', (req, res) => {
  res.send(userRouter);
});

app.use(cors());
app.use(express.json());

const mongoURI = 'mongodb+srv://ogawde7:<password>@ecom-mern.b4wbmez.mongodb.net/';

// Connect to MongoDB with Mongoose
mongoose.connect(mongoURI)
  .then(() => {
    console.log('Connected to MongoDB successfully 2!');
    // Start the server once the database connection is established
    app.listen(3001, () => {
      console.log(`Server is running on http://localhost:3001`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

