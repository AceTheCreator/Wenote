/* eslint-disable no-unused-vars */
import mongoose, { Schema } from 'mongoose';

const noteSchema = new Schema({
  title: {
    type: String,
    require,
  },
  body: {
    type: Object,
    require,
  },
  tags: {
    type: Array,
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    require,
  },
  createdAt: {
    type: Date,
    require,
    default: Date.now(),
  },
});

noteSchema.set('toJson', {
  transform(doc, ret, opt) {
    // eslint-disable-next-line no-param-reassign
    delete ret.creator;
    return ret;
  },
});

noteSchema.index({ title: 'text', tags: 'text', body: 'text' });

export default mongoose.model('Note', noteSchema);
