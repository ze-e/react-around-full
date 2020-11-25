const mongoose = require('mongoose');
const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  link: {
    type: String,
    required: true,
    validate: {
      validator(str) {
          const regex = /^http:\/\/|https:\/\//;
          return regex.test(str);
      },
      message: 'Please enter a valid url',
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  likes:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    default: []
  }],
  createdAt:{
  type: Date,
  default: Date.now()
  },
});

module.exports = mongoose.model('card', cardSchema);