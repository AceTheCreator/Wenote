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
});

noteSchema.set('toJson', {
  transform(doc, ret, opt) {
    // eslint-disable-next-line no-param-reassign
    delete ret.creator;
    return ret;
  },
});

export default mongoose.model('Note', noteSchema);
