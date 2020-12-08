const express = require('express');
const router = express.Router();

//controller
const { getCards, createCard, deleteCard, addLike, deleteLike } = require('../controllers/card');

//middleware
const { celebrate, Joi } = require('celebrate');
const auth = require('../middleware/auth');

router.get('/cards',
celebrate({
  headers: Joi.object().keys({
    Authorization: Joi.string().alphanum()
  }).unknown(true),
}),
auth, getCards);

router.post('/cards',
celebrate({
  headers: Joi.object().keys({
    Authorization: Joi.string().alphanum()
  }).unknown(true),
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).required(),
    link: Joi.string().uri().pattern(/^http:\/\/|https:\/\//).required(),
    owner: Joi.string().hex(),
    likes: Joi.array().items(Joi.string().hex()),
    createdAt: Joi.date(),
  }),
}), 
auth, createCard);

router.delete('/cards/:cardId',
celebrate({
  headers: Joi.object().keys({
    Authorization: Joi.string().alphanum()
  }).unknown(true),
  params: Joi.object().keys({
    cardId: Joi.string().alphanum().length(24),
  }),
}), 
auth, deleteCard);

router.put('/cards/:cardId/likes',
celebrate({
  headers: Joi.object().keys({
    Authorization: Joi.string().alphanum()
  }).unknown(true),
  params: Joi.object().keys({
    cardId: Joi.string().alphanum().length(24),
  }),
}), 
auth, addLike);

router.delete('/cards/:cardId/likes',
celebrate({
  headers: Joi.object().keys({
    Authorization: Joi.string().alphanum()
  }).unknown(true),
  params: Joi.object().keys({
    cardId: Joi.string().alphanum().length(24),
  }),
}), 
auth, deleteLike);

module.exports = router;