import Joi from '@hapi/joi';
import { userTypeEnum } from '../enums';

export const UserDTO = {
  create: Joi.object({
    username: Joi.string()
      .min(3)
      .max(20)
      .required(),

    password: Joi.string()
      .min(3)
      .max(20)
      .required(),

    name: Joi.string()
      .min(3)
      .max(20)
      .required(),

    email: Joi.string()
      .min(3)
      .max(20)
      .required(),

    type: Joi.number()
      .valid(...Object.values(userTypeEnum))
      .required(),
  }),
  update: Joi.object({

    _id: Joi.string()
      .required(),

    username: Joi.string()
      .min(3)
      .max(20)
      .optional(),

    password: Joi.string()
      .min(3)
      .max(20)
      .optional(),

    name: Joi.string()
      .min(3)
      .max(20)
      .optional(),

    email: Joi.string()
      .min(3)
      .max(20)
      .optional(),

    type: Joi.number()
      .valid(...Object.values(userTypeEnum))
      .optional()
  })
};
