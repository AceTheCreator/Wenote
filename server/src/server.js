/* eslint-disable import/no-extraneous-dependencies */
import express from 'express';
import bodyParser from 'body-parser';

require('dotenv').config();

// Initializing app
const app = express();
const server = require('http').Server(app);

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

export default server;
