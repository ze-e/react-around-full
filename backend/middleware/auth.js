const jwt = require('jsonwebtoken');

const { NODE_ENV, JWT_SECRET } = process.env;

// errors
const AuthError = require('../config/errors/AuthError');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return next(new AuthError('No authorization token found'));
  }

  const token = authorization;
  let payload;

  try {
    payload = jwt.verify(token,
      NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret');
  } catch (err) {
    return next(new AuthError('Invalid token'));
  }

  req.user = payload;

  next();
};
