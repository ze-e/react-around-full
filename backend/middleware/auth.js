const jwt = require('jsonwebtoken');

const handleAuthError = (res) => {
  res.status(401).send({ message: 'Authorization Error' });
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
