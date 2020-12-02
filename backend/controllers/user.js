const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const RequestError = require('../config/errors/RequestError');
const NotFoundError = require('../config/errors/NotFoundError');

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
  .catch((err) => res.send(new Error({message: 'could not create user', status: 500 })));
  })
  .then((user) => res.send(user))
  .catch((err) => res.send(new Error({message: 'could not create user', status: 500 })));

module.exports.login = (req, res) => {
  const { email, password } = req.body;

  return User.findUserByCredentials(email, password)
  .then((user) => {
    const token = jwt.sign(
      { _id: user._id }, 
      'dev-secret',
      { expiresIn: '7d' });
    res.status(200).send({token});
  })
  .catch((err) => res.send(new NotFoundError({message: 'could not find user', status: 401 })));
};  

module.exports.getUser = (req, res) => {
  return User.findById(req.user._id)
  .then((user) => {
    res.status(200).send(user);
  })
  .catch((err) => res.send(new NotFoundError({message: 'could not find user', status: 401 })));
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
  .catch((err) => res.send(new NotFoundError({message: 'could not find user', status: 401 })));
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
    res.status(200).send({user});
  })
  .catch((err) => res.send(new NotFoundError({message: 'could not find user', status: 401 })));
};  

module.exports.deleteUser = (req, res) =>  {
  User.findByIdAndRemove(req.user.id)
  .then((user) => {
    res.status(200).send({user});
  })
  .catch((err) => res.send(new NotFoundError({message: 'could not find user', status: 401 })));
}
