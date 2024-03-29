/**
 * Importing Libraries
 */
import express from 'express';
import bodyParser from 'body-parser';
import routes from './router';

/**
 * Global variable declaration
 */
const app = express();
const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3002;

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
app.use('/product', routes);

/**
 * Listening Port
 */
app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});