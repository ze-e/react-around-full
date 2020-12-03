const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//errors
const NotFoundError = require('../config/errors/NotFoundError');
const RequestError = require('../config/errors/RequestError');

module.exports.createUser = (req, res) => 
  bcrypt.hash(req.body.password, 10)
  .then((hash) =>{
    return User.create({
      email: req.body.email,
      password: hash,
      name: req.body.name,
      about: req.body.about,
      avatar: req.body.avatar
    })
    .catch((err) => next(new NotFoundError({message: 'User unavailable'})));
  })
  .then((user) => res.send(user))
  .catch((err) => next(new RequestError({message: `Could not create user: ${err.message}` })));

module.exports.login = (req, res) => {
  const { email, password } = req.body;
  return User.findUserByCredentials(email, password)
  .then((user) => {
    if(!user){
      throw new NotFoundError({message: 'User unavailable'})
    }
    const token = jwt.sign(
      { _id: user._id }, 
      'dev-secret',
      { expiresIn: '7d' });
    res.status(200).send({token});
  })
  .catch((err) => next(new RequestError({message: `Could not login: ${err.message}` })));
};  

module.exports.getUser = (req, res) => {
  return User.findById(req.user._id)
  .then((user) => {
    res.status(200).send(user);
  })
  .catch((err) => next(new RequestError({message: `Could not get user: ${err.message}` })));
};  

module.exports.editUser = (req, res) => {
  const userFields = {
    name: req.body.name,
    about: req.body.about
  }
  User.findByIdAndUpdate(                    
    req.user._id, 
    { $set: userFields },
    {new: true})
  .then((user) => {
    res.status(200).send({user});
  })
  .catch((err) => next(new RequestError({message: `Could not edit user: ${err.message}` })));
};  

module.exports.editAvatar = (req, res) => {
  const userFields = {
    avatar: req.body.avatar,
  }
  User.findByIdAndUpdate(                    
    req.user._id, 
    { $set: userFields },
    {new: true})
  .then((user) => {
    if(!user){
      throw new NotFoundError({message: 'User unavailable'})
    }
    res.status(200).send({user});
  })
  .catch((err) => next(new RequestError({message: `Could not edit avatar: ${err.message}` })));
};  

module.exports.deleteUser = (req, res) =>  {
  User.findByIdAndRemove(req.user.id)
  .then((user) => {
    if(!user){
      throw new NotFoundError({message: 'User unavailable'})
    }
    res.status(200).send({user});
  })
  .catch((err) => next(new RequestError({message: `Could not delete user: ${err.message}` })));
}
