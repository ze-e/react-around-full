const Card = require('../models/Card');

//errors
const NotFoundError = require('../config/errors/NotFoundError');
const RequestError = require('../config/errors/RequestError');
const PermissionError = require('../config/errors/PermissionError');


module.exports.getCards = (req, res) => {
  Card.find({})
    .populate('owner') 
    .then((cards) => {
      if(!cards){
        throw new NotFoundError({message: 'Cards unavailable' })
      }
      res.status(200).send(cards)
    })
    .catch((err) => next(new RequestError({message: `Could not get cards: ${err.message}`})));
}

module.exports.createCard = (req, res) => {
  Card.create({
    name: req.body.name,
    link: req.body.link,
    owner: req.user._id
  })
  .then((card) => res.status(200).send(card))
  .catch((err) => next(new RequestError({message: `Could not create card: ${err.message}`})));
}

module.exports.deleteCard = (req, res) => {
  Card.findById(req.params.cardId)
  .populate('owner') 
  .then((card)=>{
    Card.doesUserOwnCard(card, req.user._id)
    .then((card) => {
      Card.findByIdAndRemove(card._id)
      .then((card) => {
        res.status(200).send({card});
      })
      .catch((err) => next(new NotFoundError({message: 'Card unavailable'})));
    })
    .catch((err) => next(new PermissionError({message: 'User does not own card'})));
  })
  .catch((err) => next(new RequestError({message: 'Could not delete card'})));
}

module.exports.addLike = (req, res) => {
  Card.findById(req.params.cardId)
  .then((card) => {
    Card.findByIdAndUpdate(
      req.params.cardId,
      { $addToSet: { likes: req.user._id } },
      { new: true })
    .then((card) => {
      res.status(200).send({card});
    })
    .catch((err) => next(new RequestError({message: 'Could not like card'})));
  })
.catch((err) => next(new NotFoundError({message: 'Card unavailable'})));
}

module.exports.deleteLike = (req, res) => {
  Card.findById(req.params.cardId)
  .then((card) => {
    Card.findByIdAndUpdate(
      req.params.cardId,
      { $pull: { likes: req.user._id } },
      { new: true })
    .then((card) => {
      res.status(200).send({card});
    })
    .catch((err) =>  next(new RequestError({message: 'Could not unlike card'})));
  })
.catch((err) => next(new NotFoundError({message: 'Card unavailable'})));
}