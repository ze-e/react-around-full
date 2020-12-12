const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
require('dotenv').config();

const { NODE_ENV, JWT_SECRET } = process.env;

// errors
const NotFoundError = require('../config/errors/NotFoundError');
const RequestError = require('../config/errors/RequestError');
const ConflictError = require('../config/errors/ConflictError');

module.exports.createUser = (req, res, next) => {
  bcrypt.hash(req.body.password, 10)
    .then((hash) => {
      User.create({
        email: req.body.email,
        password: hash,
        name: req.body.name,
        about: req.body.about,
        avatar: req.body.avatar,
      })
        .then((user) => {
          res.send(user);
        })
        .catch((err) => {
          if (err.name === 'MongoError' && err.code === 11000) {
            next(new ConflictError(`User ${err.keyValue.email} already exists`));
          }
          next(new Error(`Could not create user: ${err.message}`));
        });
    })
    .catch((err) => next(new RequestError(`Could not create user: ${err.message}`)));
};

module.exports.login = (req, res, next) => {
  const { email, password } = req.body;
  return User.findUserByCredentials(email, password)
    .then((user) => {
      if (!user) {
        throw new NotFoundError('User unavailable');
      }

      const token = jwt.sign(
        { _id: user._id },
        NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret',
        { expiresIn: '7d' },
      );
      res.status(200).send({ token });
    })
    .catch((err) => next(new RequestError(`Could not login: ${err.message}`)));
};

module.exports.getUser = (req, res, next) => User.findById(req.user._id)
  .then((user) => {
    res.status(200).send(user);
  })
  .catch((err) => next(new RequestError(`Could not get user: ${err.message}`)));

module.exports.editUser = (req, res, next) => {
  const userFields = {
    name: req.body.name,
    about: req.body.about,
  };
  User.findByIdAndUpdate(
    req.user._id,
    { $set: userFields },
    { new: true, runValidators: true },
  )
    .then((user) => {
      res.status(200).send({ user });
    })
    .catch((err) => next(new RequestError(`Could not edit user: ${err.message}`)));
};

module.exports.editAvatar = (req, res, next) => {
  const userFields = {
    avatar: req.body.avatar,
  };
  User.findByIdAndUpdate(
    req.user._id,
    { $set: userFields },
    { new: true, runValidators: true },
  )
    .then((user) => {
      if (!user) {
        throw new NotFoundError('User unavailable');
      }
      res.status(200).send({ user });
    })
    .catch((err) => next(new RequestError(`Could not edit avatar: ${err.message}`)));
};

module.exports.deleteUser = (req, res, next) => {
  User.findByIdAndRemove(req.user.id)
    .then((user) => {
      if (!user) {
        throw new NotFoundError('User unavailable');
      }
      res.status(200).send({ user });
    })
    .catch((err) => next(new RequestError(`Could not delete user: ${err.message}`)));
};
