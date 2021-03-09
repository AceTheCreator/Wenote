/* eslint-disable import/no-extraneous-dependencies */
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

// Routes controllers
import user from './controllers/user';

require('dotenv').config();

// Initializing app
const app = express();
const server = require('http').Server(app);

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Controllers
app.get('/', (req, res) => res.status(200).send('hello'));
const urlEndpoint = '/wenote/api/v1';
app.use(`${urlEndpoint}/user`, user);

export default server;
