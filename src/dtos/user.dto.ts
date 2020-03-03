import Joi from '@hapi/joi';

export const User = {
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

    age: Joi.number()
      .strict()
      .positive()
      .min(1)
      .max(99)
      .required(),
  }),
};
