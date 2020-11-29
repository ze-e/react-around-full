const Card = require('../models/Card');

module.exports.getCards = (req, res) => {
  Card.find({})
    .populate('owner') 
    .then((cards) => res.status(200).send(cards))
    .catch((err) => res.status(400).send(err));
}

module.exports.createCard = (req, res) => {
  Card.create({
    name: req.body.name,
    link: req.body.link,
    owner: req.user._id
  })
    .then((card) => res.status(200).send(card))
    .catch((err) => res.status(400).send(err));
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
        .catch((err) => {
          res.status(401).send(err);
        });
      })
    .catch((err) => res.status(401).send(err));
  })
  .catch((err) => res.status(400).send(err));
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
    .catch((err) => {
      res.status(401).send(err);
    });
  })
.catch((err) => res.status(401).send(err));
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
    .catch((err) => {
      res.status(401).send(err);
    });
  })
.catch((err) => res.status(401).send(err));
}