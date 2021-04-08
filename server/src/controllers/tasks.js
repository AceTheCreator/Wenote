/* eslint-disable consistent-return */
/* eslint-disable no-underscore-dangle */
import express from 'express';
import jwt from 'jsonwebtoken';
import auth from '../middlewares/auth';
import User from '../models/user';
import Tasks from '../models/tasks';
import Task from '../models/task';
import { emptyChecker } from '../utils';
import { tasksValidation } from '../configs/tasks';

const router = express.Router();

router.get('/tasks/:id', auth, async (req, res) => {
  const { id } = req.params;
  try {
    const token = await req.header('auth-token');
    const verify = await jwt.verify(token, process.env.JWT_KEY);
    const user = await User.findById(verify._id);
    if (user) {
      const tasks = await Tasks.findById(id);
      if (tasks) {
        if (tasks.creator === user._id) {
          const allTasks = await Task.find({ task: tasks.id });
          return res.status(200).send(allTasks);
        }
        return res.status(401).send('you\'re not authorized to perform this request');
      }
      return res.status(404).send('can\'t find this tasks');
    }
    return res.status(400).send("can't find this user");
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.get('/tasks', auth, async (req, res) => {
  try {
    const token = await req.header('auth-token');
    const verify = await jwt.verify(token, process.env.JWT_KEY);
    const user = await User.findById(verify._id);
    if (user) {
      const tasks = await Tasks.find({ creator: user._id });
      if (!emptyChecker(tasks)) {
        return res.status(200).send(tasks);
      }
      return res.status(204).send('you don\'t have any tasks yet');
    }
    return res.status(400).send('can\'t find this user');
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.post('/new', auth, async (req, res) => {
  const {
    title,
    description,
  } = req.body;
  try {
    const { error } = tasksValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const token = await req.header('auth-token');
    const verify = await jwt.verify(token, process.env.JWT_KEY);
    const user = await User.findById(verify._id);
    if (user) {
      const newTasks = new Tasks({
        title,
        description,
        creator: user._id,
      });
      await newTasks.save();
      return res.status(201).send('tasks successfully created');
    }
    return res.status(400).send('can\'t find this user');
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.post('/update/:id', auth, async (req, res) => {
  const { id } = req.params;
  const {
    title,
    description,
  } = req.body;
  try {
    const { error } = tasksValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const token = await req.header('auth-token');
    const verify = await jwt.verify(token, process.env.JWT_KEY);
    const user = await User.findById(verify._id);
    if (user) {
      const tasks = await Tasks.findById(id);
      if (tasks) {
        if (tasks.creator === user._id) {
          tasks.title = title;
          tasks.description = description;
          await tasks.save();
          return res.status(201).send('tasks successfully created');
        }
        return res.status(401).send('you\'re not authorized to perform this action');
      }
      return res.status(404).send('can\'t find this task');
    }
    return res.status(400).send("can't find this user");
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.delete('/delete/:id', auth, async (req, res) => {
  const { id } = req.params;
  try {
    const { error } = tasksValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const token = await req.header('auth-token');
    const verify = await jwt.verify(token, process.env.JWT_KEY);
    const user = await User.findById(verify._id);
    if (user) {
      const tasks = await Tasks.findById(id);
      if (tasks) {
        if (tasks.creator === user._id) {
          await Task.removeMany({ task: tasks._id });
          await tasks.remove();
          return res.status(200).send('tasks successfully deleted');
        }
        return res
          .status(401)
          .send("you're not authorized to perform this action");
      }
      return res.status(404).send("can't find this task");
    }
    return res.status(400).send("can't find this user");
  } catch (error) {
    return res.status(500).send(error);
  }
});

export default router;
