/* eslint-disable import/prefer-default-export */
import Joi from '@hapi/joi';

export function noteValidation(data) {
  const schema = Joi.object({
    body: Joi.string().required(),
    tags: Joi.array().min(1).required(),
  });
  return schema.validate(data);
}
