const express = require('express');
const router = express.Router();

//controller
const { login, createUser, getUser, editUser, editAvatar, deleteUser } = require('../controllers/user');

//middleware
const { celebrate, Joi } = require('celebrate');
const auth = require('../middleware/auth');

router.post('/signin',
celebrate({
  body: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
}), 
login);

router.post('/signup', 
celebrate({
  body: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
}), 
createUser); 

router.get('/users/me',
celebrate({
  headers: Joi.object().keys({
    Authorization: Joi.string().alphanum()
  }).unknown(true),
}), 
auth, getUser);

router.patch('/users/me',
celebrate({
  headers: Joi.object().keys({
    Authorization: Joi.string().alphanum()
  }).unknown(true),
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30), 
  }),
}), 
auth, editUser); 

router.patch('/users/me/avatar',
celebrate({
  headers: Joi.object().keys({
    Authorization: Joi.string().alphanum()
  }).unknown(true),
  body: Joi.object().keys({
    avatar: Joi.string().uri().pattern(/^http:\/\/|https:\/\//),  
  }),
}), 
auth, editAvatar); 

router.delete('/users/me',
celebrate({
  headers: Joi.object().keys({
    Authorization: Joi.string().alphanum()
  }).unknown(true),
}), 
auth, deleteUser); 

module.exports = router;