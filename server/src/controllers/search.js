/* eslint-disable no-underscore-dangle */
import express from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/user';
import Note from '../models/note';
import auth from '../middlewares/auth';
import Tasks from '../models/tasks';

const router = express.Router();

router.get('/note', auth, async (req, res) => {
  const { keyword } = req.query;
  try {
    const token = await req.header('auth-token');
    const verify = await jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(verify._id);
    if (user) {
      const results = await Note.find({ creator: user._id, $text: { $search: keyword } });
      return res.status(200).send(results);
    }
    return res.status(400).send("can't find tany notes");
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.get('/tasks', auth, async (req, res) => {
  const { keyword } = req.query;
  try {
    const token = await req.header('auth-token');
    const verify = await jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(verify._id);
    if (user) {
      const results = await Tasks.find({
        creator: user._id,
        $text: { $search: keyword },
      });
      return res.status(200).send(results);
    }
    return res.status(400).send("can't find any tasks");
  } catch (error) {
    return res.status(500).send(error);
  }
});

export default router;
