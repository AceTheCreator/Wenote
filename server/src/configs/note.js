/* eslint-disable import/prefer-default-export */
import Joi from '@hapi/joi';

export function noteValidation(data) {
  const schema = Joi.object({
    title: Joi.string().required(),
    body: Joi.object().required(),
    tags: Joi.array().min(1).required(),
  });
  return schema.validate(data);
}
