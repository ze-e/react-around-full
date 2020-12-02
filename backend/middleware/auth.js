const jwt = require('jsonwebtoken');
const AuthError = require('../config/errors/AuthError');

const handleAuthError = (res) => {
  next(new AuthError({message: 'Authorization Error', status: 401 })); 
};

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return handleAuthError(res);
  }

  const token = authorization;
  let payload;

  try {
    payload = jwt.verify(token, 'dev-secret');
  } catch (err) {
    return handleAuthError(res);
  }

  req.user = payload; 

  next(); 

};
