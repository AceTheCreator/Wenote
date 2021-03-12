/* eslint-disable import/no-extraneous-dependencies */
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

// Routes controllers
import user from './controllers/user';
import note from './controllers/notes';

require('dotenv').config();

// Initializing app
const app = express();
const server = require('http').Server(app);

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Controllers
app.get('/', (req, res) => res.status(200).send('welcome to wenote api'));
const urlEndpoint = '/wenote/api/v1';
app.use(`${urlEndpoint}/user`, user);
app.use(`${urlEndpoint}/note`, note);

export default server;
