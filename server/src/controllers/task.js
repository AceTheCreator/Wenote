/* eslint-disable eqeqeq */
/* eslint-disable consistent-return */
/* eslint-disable no-underscore-dangle */
import express from 'express';
import jwt from 'jsonwebtoken';
import auth from '../middlewares/auth';
import User from '../models/user';
import Tasks from '../models/tasks';
import Task from '../models/task';
import { taskValidation } from '../configs/tasks';

const router = express.Router();

router.post('/new/:id', auth, async (req, res) => {
  const { id } = req.params;
  const { name, dueDate, status } = req.body;
  try {
    const { error } = taskValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const token = await req.header('auth-token');
    const verify = await jwt.verify(token, process.env.JWT_KEY);
    const user = await User.findById(verify._id);
    if (user) {
      const tasks = await Tasks.findById(id);
      if (tasks) {
        if (tasks.creator == user.id) {
          const newTask = new Task({
            task: id,
            name,
            dueDate,
            status,
          });
          await newTask.save();
          tasks.tasksLength += 1;
          await tasks.save();
          return res.status(201).send('task successfully created');
        }
        return res.status(401).send('you\'re not authorized to perform this action');
      }
      return res.status(404).send('can\'t fin this tasks');
    }
    return res.status(400).send("can't find this user");
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.put('/update/:id', auth, async (req, res) => {
  const { id } = req.params;
  const { name, dueDate, status } = req.body;
  try {
    const { error } = taskValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const token = await req.header('auth-token');
    const verify = await jwt.verify(token, process.env.JWT_KEY);
    const user = await User.findById(verify._id);
    if (user) {
      const task = await Task.findById(id);
      if (task) {
        const tasks = await Tasks.findById(task.task);
        if (tasks) {
          if (tasks.creator == user.id) {
            task.name = name;
            task.dueDate = dueDate;
            task.status = status;
            await task.save();
            return res
              .status(200)
              .send('task successfully updated');
          }
          return res
            .status(401)
            .send("you're not authorized to perform this action");
        }
        return res.status(404).send('can\'t find the parent tasks for this task');
      }
      return res.status(404).send("can't find this task");
    }
    return res.status(400).send("can't find this user");
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.post('/delete/:id', auth, async (req, res) => {
  const { id } = req.params;
  try {
    const token = await req.header('auth-token');
    const verify = await jwt.verify(token, process.env.JWT_KEY);
    const user = await User.findById(verify._id);
    if (user) {
      const task = await Task.findById(id);
      if (task) {
        const tasks = await Tasks.findById(task.task);
        if (tasks) {
          if (tasks.creator == user.id) {
            await task.remove();
            // eslint-disable-next-line no-plusplus
            tasks.tasksLength--;
            return res.status(200).send('task successfully deleted');
          }
          return res
            .status(401)
            .send("you're not authorized to perform this action");
        }
        return res
          .status(404)
          .send("can't find the parent tasks for this task");
      }
      return res.status(404).send("can't find this task");
    }
    return res.status(400).send("can't find this user");
  } catch (error) {
    return res.status(500).send(error);
  }
});

export default router;
