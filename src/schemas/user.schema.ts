import { Schema, model } from 'mongoose';

const schema = new Schema({
  name: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  age: { type: Number, max: 99, required: true },
}, {
  timestamps: true
});

export const UserSchema = model('User', schema, 'user');
