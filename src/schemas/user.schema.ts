import { Schema, model } from 'mongoose';
import { userTypeEnum } from '../enums'

const schema = new Schema({
  name: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  type: { type: Number, enum: Object.values(userTypeEnum), required: true },
}, {
  timestamps: true
});

export const UserSchema = model('User', schema, 'user');
