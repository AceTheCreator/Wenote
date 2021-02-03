import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
  fullname: {
    type: String,
    require,
  },
  email: {
    type: String,
    require,
  },
  password: {
    type: String,
    require,
  },
});

export default mongoose.model('User', userSchema);
