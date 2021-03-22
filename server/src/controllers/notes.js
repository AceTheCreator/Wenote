/* eslint-disable no-underscore-dangle */
import express from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/user';
import Note from '../models/note';
import { noteValidation } from '../configs/note';
import auth from '../middlewares/auth';

const router = express.Router();

router.get('/all', auth, async (req, res) => {
  try {
    const token = await req.header('auth-token');
    const verify = await jwt.verify(token, process.env.JWT_KEY);
    const user = await User.findById(verify._id);
    if (user) {
      const notes = await Note.find({ creator: user._id });
      if (notes) {
        return res.status(200).send(notes);
      }
      return res.status(400).send('unable to retrieve users notes');
    }
    return res.status(400).send("can'\t retrieve this user");
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const note = await Note.findById(id);
    if (note) {
      return res.status(200).send(note);
    }
    return res.status(404).send('note not found');
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.post('/new', auth, async (req, res) => {
  const {
    body,
    tags,
  } = req.body;
  try {
    const { error } = noteValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const token = req.headers('auth-token');
    const verify = jwt.verify(token, process.env.JWT_KEY);
    const user = await User.findById(verify._id);
    if (user) {
      const newNote = new Note({
        body,
        tags,
      });
      await newNote.save();
      return res.status(201).send('note successfully saved');
    }
    return res.status(401).send('you\'re not authorized to perfrom this action');
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.put('/update/:id', auth, async (req, res) => {
  const {
    body,
    tags,
  } = req.body;
  const { id } = req.params;
  try {
    const { error } = noteValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const token = await req.headers('auth-token');
    const verify = await jwt.verify(token, process.env.JWT_KEY);
    const user = await User.findById(verify._id);
    if (user) {
      const note = await Note.findById(id);
      if (note) {
        if (user._id === note.creator) {
          note.body = body;
          note.tags = tags;
          await note.save();
          return res.status(200).send('note successfully updated');
        }
        return res.status(401).send('you\'re not authorized to perform this action');
      }
      return res.status(404).send('note not found');
    }
    return res.status(400).send('user authentication failed');
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.delete('/delete:id', auth, async (req, res) => {
  const { id } = req.params;
  try {
    const token = await req.headers('auth-token');
    const verify = await jwt.verify(token, process.env.JWT_KEY);
    const user = await User.findById(verify._id);
    if (user) {
      const note = await Note.findById(id);
      if (note) {
        if (user._id === note.creator) {
          await note.deleteOne();
          return res.status(200).send('note successfully deleted');
        }
        return res.status(401).send('you\'re not authorized to perform this action');
      }
      return res.status(404).send('note not found');
    }
    return res.status(400).send('user authentication failed');
  } catch (error) {
    return res.status(500).send(error);
  }
});

export default router;
