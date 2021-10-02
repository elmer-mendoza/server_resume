if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}


const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors =require('cors')

const reviewRoutes = require('./routes/api/reviews')


const app = express();

app.use(cors());

// Bodyparser Middleware

app.use(express.json());

// Connect to Mongo

mongoose
    .connect(process.env.DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=>console.log('MongoDB connected...'))
    .catch(err=>console.log(err));

 
// Use Route

app.use('/api/reviews',reviewRoutes)

const port = process.env.PORT || 5001;

app.listen(port,()=> console.log(`Server started on port ${port}`));
