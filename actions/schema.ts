import { Schema, model, models } from 'mongoose';

const Email = new Schema({
  email: {
    type: String,
    unique: [true, 'Email already exists!'],
    required: [true, 'Email is required!'],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  lastUpdated: {
    type: Date,
    default: Date.now()
  }
});

const EmailList = models.EmailList || model("EmailList", Email);

export default EmailList;