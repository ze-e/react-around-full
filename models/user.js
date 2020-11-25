const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs'); 

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: 'email is required',
    unique: true,
    validate: {
      validator(arr) {
          return validator.isEmail(arr);
     },
     message: 'You must provide more than 2 locations.'
  }
  },
  password: {
    type: String,
    required: true,
    minlength: 7,
    maxlength: 20,
  },
  name: {
    type: String,
    required: 'name is required',
    minlength: 2,
    maxlength: 30,
  },
  about: {
    type: String,
    required: 'about is required',
    minlength: 2,
    maxlength: 30,
  },
  avatar: {
    type: String,
    required: 'avatar is required',
    validate: {
      validator(str) {
          const regex = /^http:\/\/|https:\/\//;
          return regex.test(str);
      },
      message: 'please enter a valid url',
    }
  }
});

userSchema.statics.findUserByCredentials = function (email, password) {
  return this.findOne({ email })
    .then((user) => {
      if (!user) {
        return Promise.reject(new Error('incorrect email or password'));
      }

      return bcrypt.compare(password, user.password)
        .then((matched) => {
          if (!matched) {
            return Promise.reject(new Error('incorrect email or password'));
          }

          return user; 
        });
    });
};

module.exports = mongoose.model('user', userSchema);