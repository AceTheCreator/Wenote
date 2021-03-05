/* eslint-disable consistent-return */
import jwt from 'jsonwebtoken';

// Json web token authentication middleware
const auth = (req, res, next) => {
  const token = req.header('auth-token');
  if (!token) return res.status(401).send('Your\'e not authorized');
  try {
    const verified = jwt.verify(token, process.env.JWT_KEY);
    req.user = verified;
    next();
  } catch (err) {
    return res.status(400).send('Something went wrong, maybe the authorization token is invalid');
  }
};

export default auth;
