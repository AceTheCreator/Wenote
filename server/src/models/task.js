import mongoose, { Schema } from 'mongoose';

const taskSchema = new Schema({
  task: {
    type: Schema.Types.ObjectId,
    ref: 'Tasks',
    require,
  },
  name: {
    type: String,
    require,
  },
  dueDate: {
    type: Date,
    require,
  },
  status: {
    type: String,
    require,
    default: 'Not started',
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

export default mongoose.model('Task', taskSchema);
