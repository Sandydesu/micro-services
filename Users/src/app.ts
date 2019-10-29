/**
 * Importing Libraries
 */
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import routes from './router';
const url = process.env.MONGODB_URL ? process.env.MONGODB_URL : 'mongodb://localhost:27017/product';
/**
 * Database connection
 */
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
.catch(err => { 
  console.error('App starting error:', err.stack);
  process.exit(1);
});

/**
 * Global variable declaration
 */
const app = express();

const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3003;
/**
 * Adding middlewares 
 */
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, x-access-token, Content-Type, Accept");
  next();
});

/**
 * Declaring routes
 */
app.use('/user', routes);

/**
 * Listening Port
 */
app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});