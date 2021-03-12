/* eslint-disable import/no-extraneous-dependencies */
import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../models/user';
import { signupValidation, signinValidation } from '../configs/user';

require('dotenv').config();

const router = express.Router();
const { OAuth2Client } = require('google-auth-library');

const client = new OAuth2Client(process.env.GoogleClientId);

// eslint-disable-next-line consistent-return
router.post('/auth/google/signup', async (req, res) => {
  try {
    const { token } = req.body;
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GoogleClientId,
    });
    const { name, email } = ticket.getPayload();
    const user = await User.findOne({ email });
    if (user) {
      return res.status(401).send('a user with this email already exist');
    }
    const newUser = new User({
      email,
      fullname: name,
    });
    await newUser.save();
    const jwtToken = jwt.sign({ _id: newUser.id }, process.env.JWT_KEY);
    res.setHeader('auth-token', jwtToken);
    return res.status(201).send(jwtToken);
  } catch (error) {
    return res.status(500).send(error);
  }
});
router.post('/auth/google/login', async (req, res) => {
  const { token } = req.body;
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GoogleClientId,
    });
    const { email } = ticket.getPayload();
    const user = await User.findOne({ email });
    if (user) {
      const jwtToken = jwt.sign({ _id: user.id }, process.env.JWT_KEY);
      res.setHeader('auth-token', jwtToken);
      return res.status(200).send(jwtToken);
    }
    return res.status(401).send('this user as no account yet');
  } catch (error) {
    return res.status(500).send(error);
  }
});
// eslint-disable-next-line consistent-return
router.post('/signup', async (req, res) => {
  const {
    fullname,
    email,
    password,
  } = req.body;
  try {
    const { error } = signupValidation(req.body);
    if (error) return res.status(401).send(error.details[0].message);
    // check if email is available;
    const checkEmail = await User.findOne({ email });
    if (checkEmail) {
      return res.status(401).send('this email address is not available');
    }
    const newUser = new User({
      fullname,
      email,
      password,
    });
    bcrypt.genSalt(10, (err, salt) => {
      if (err) {
        return res.status(500).send(err);
      }
      // eslint-disable-next-line no-shadow
      return bcrypt.hash(newUser.password, salt, async (err, hash) => {
        if (err) {
          return res.status(500).send(err);
        }
        newUser.password = hash;
        await newUser.save();
        const token = jwt.sign({ _id: newUser.id }, process.env.JWT_KEY);
        res.setHeader('auth-token', token);
        return res.status(201).send(token);
      });
    });
  } catch (error) {
    return res.status(500).send(error);
  }
});

// eslint-disable-next-line consistent-return
router.post('/login', async (req, res) => {
  const {
    email,
    password,
  } = req.body;
  try {
    const { error } = signinValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const user = await User.findOne({ email });
    if (user) {
      // eslint-disable-next-line no-unused-vars
      await bcrypt.compare(password, user.password, (err, same) => {
        if (err) return res.status(401).send(err);
        const token = jwt.sign({ _id: user.id }, process.env.JWT_KEY);
        return res.status(200).send(token);
      });
    }
    if (!user) {
      return res.status(401).send('this email does\'nt exist');
    }
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.post('/validate', async (req, res) => {
  try {
    const { token } = req.body;
    const verify = await jwt.verify(token, process.env.JWT_KEY);
    // eslint-disable-next-line no-underscore-dangle
    const user = await User.findById(verify._id);
    if (user) {
      return res.status(200).send(user.fullname);
    }
    return res.status(401).send('can\'nt verify this user');
  } catch (error) {
    return res.status(500).send(error);
  }
});

export default router;
