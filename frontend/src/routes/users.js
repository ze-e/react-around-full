const router = require('express').Router();
const User = require('../../backend/models/user');

//get all users
router.get('/', (req, res) => {
  User.find({})
  .then((users) => res.status(200).send(users))
  .catch((e) => res.status(500).send({ message: `Could not get users. ${e}` }));
});

//get user by userId
router.get('/:userId', (req, res) => {
  User.findById(req.params.userId)
  .then((user) => {!user ? res.status(404).send({ "message": "User not found" })
  : res.send(user)})
  .catch((e) => res.status(404).send({ "message": "User not found" }));
});

//create new user
router.post('/', (req, res) => {
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
  .then((user) =>res.status(200).send(user))
  .catch((e) => {
    if (e.name === "ValidationError") {
        res.status(400).send({ message: "User validation failed. " });
    } else {
        res.status(500).send({ message: `Internal server error. ${e}` });
    }
  })
});

//update profile
router.patch('/me', (req, res) => {
  const { name, about } = req.body;
  User.findByIdAndUpdate(req.user._id,{ name, about },{new: true, runValidators: true})
  .then((user) => res.status(200).send(user))
  .catch((e) => {
    if (e.name === "ValidationError") {
        res.status(400).send({ message: "User validation failed. " });
    } else {
        res.status(500).send({ message: `Internal server error. ${e}` });
    }
  })
});

//update avatar
router.patch('/me/avatar', (req, res) => {
  const { avatar } = req.body;
  User.findByIdAndUpdate(req.user._id,{ avatar },{new: true, runValidators: true})
  .then((user) => res.status(200).send(user))
  .catch((e) => {
    if (e.name === "ValidationError") {
        res.status(400).send({ message: "User validation failed. " });
    } else {
        res.status(500).send({ message: `Internal server error. ${e}` });
    }
  })
});

module.exports = router;