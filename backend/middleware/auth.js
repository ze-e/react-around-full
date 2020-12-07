const jwt = require('jsonwebtoken');

//errors
const AuthError = require('../config/errors/AuthError');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return next(new AuthError('No authorization token found' )); 
  }

  const token = authorization;
  let payload;

  try {
    payload = jwt.verify(token, 'dev-secret');
  } catch (err) {
    return next(new AuthError('Invalid token' )); 

  }

  req.user = payload; 

  next(); 

};
