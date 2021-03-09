/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
  fullname: {
    type: String,
    require,
  },
  email: {
    type: String,
    unique: true,
    require,
  },
  password: {
    type: String,
    require,
  },
});

userSchema.set('toJSON', {
  transform(doc, ret, opt) {
    delete ret.password;
    delete ret._id;
    delete ret.email;
    return ret;
  },
});

export default mongoose.model('User', userSchema);
