/* eslint-disable no-underscore-dangle */
import express from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/user';
import auth from '../middlewares/auth';

const router = express.Router();

router.post('/', auth, async (req, res) => {
  try {
    const token = await req.header('auth-token');
    const verify = await jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(verify._id);
    if (user) {

    }
    return res.status(400).send('can\'t find this user');
  } catch (error) {
    return res.status(500).send(error);
  }
});

export default router;
