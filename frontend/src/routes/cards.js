const router = require('express').Router();
const Card = require('../models/card');

//get all cards
router.get('/', (req, res) => {
  Card.find({})
  .then((cards) => res.status(200).send(cards))
  .catch((e) => res.status(500).send({ message: `Could not get cards. ${e}` }));
});

//create card
router.post('/', (req, res) => {
  const { name, link } = req.body;
  Card.create({ name, link, owner: req.user._id })
    .then((card) => res.status(200).send(card))
    .catch((e) => {
      if (e.name === "ValidationError") {
          res.status(400).send({ message: "Card validation failed" });
      } else {
          res.status(500).send({ message: `Internal server error. ${e}` });
      }
    })
});

//delete card
router.delete('/:cardId', (req, res) => {
  Card.findOneAndRemove(req.params.cardId)
  .then(card => res.status(200).send(`Card ${card._id} deleted successfully`))
  .catch((e) => res.status(400).send({ message: `Could not delete card. ${e}` }));
});

//like a card
router.put('/:cardId/likes', (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } },
    { new: true },
  )
  .then(card => res.status(200).send(card))
  .catch((e) => res.status(400).send({ message: `Could not like card. ${e}` }));
})

//unlike a card
router.delete('/:cardId/likes', (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } },
    { new: true },
  )
  .then(card => res.status(200).send(card))
  .catch((e) => res.status(400).send({ message: `Could not unlike card. ${e}` }));
})

module.exports = router;