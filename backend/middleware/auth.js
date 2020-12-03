const jwt = require('jsonwebtoken');

//errors
const AuthError = require('../config/errors/AuthError');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return next(new AuthError({message: 'No authorization token found', status: 401 })); 
  }

  const token = authorization;
  let payload;

  try {
    payload = jwt.verify(token, 'dev-secret');
  } catch (err) {
    return next(new AuthError({message: 'Invalid token', status: 401 })); 

  }

  req.user = payload; 

  next(); 

};
