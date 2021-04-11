/* eslint-disable import/prefer-default-export */
import Joi from '@hapi/joi';

export function tasksValidation(data) {
  const schema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
  });
  return schema.validate(data);
}

export function taskValidation(data) {
  const schema = Joi.object({
    name: Joi.string().required(),
    status: Joi.string(),
    dueDate: Joi.date(),
  });
  return schema.validate(data);
}
