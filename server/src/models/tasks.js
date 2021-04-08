import mongoose, { Schema } from 'mongoose';

const tasksSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    require,
  },
  title: {
    type: String,
    require,
  },
  description: {
    type: String,
    require,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  tasksLength: {
    type: Number,
    require,
    default: 0,
  },
});
tasksSchema.index({ title: 'text' });
export default mongoose.model('Tasks', tasksSchema);
