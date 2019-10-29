/**
 * Importing Libraries
 */
import express from 'express';
import bodyParser from 'body-parser';
import routes from './router';
const url = process.env.MONGODB_URL ? process.env.MONGODB_URL : 'mongodb://localhost:27017/product';

/**
 * Global variable declaration
 */
const app = express();

const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3004;
/**
 * Adding middlewares 
 */
app.use(bodyParser.json());

/**
 * Declaring routes
 */
app.use('/', routes);

/**
 * Listening Port
 */
app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});