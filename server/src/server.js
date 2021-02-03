/* eslint-disable import/no-extraneous-dependencies */
import express from 'express';
import bodyParser from 'body-parser';

// Routes controllers
import user from './controllers/user';

require('dotenv').config();

// Initializing app
const app = express();
const server = require('http').Server(app);

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Controllers
app.get('/', () => {
  console.log('hello');
});
const urlEndpoint = '/wenote/api/v1';
app.use(`${urlEndpoint}/user`, user);

export default server;
