/* eslint-disable import/prefer-default-export */
import Joi from '@hapi/joi';

export function signupValidation(data) {
  const schema = Joi.object({
    fullname: Joi.string().min(4).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  });
  return schema.validate(data);
}

export function signinValidation(data) {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });
  return schema.validate(data);
}
