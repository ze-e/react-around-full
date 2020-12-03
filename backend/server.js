const path = require('path');
require('dotenv').config(); 
//middleware
const { celebrate, Joi } = require('celebrate');
Joi.objectId = require('joi-objectid')(Joi);
const bodyParser = require('body-parser');
const auth = require('./middleware/auth');
const { requestLogger, errorLogger } = require('./middleware/logger'); 

//routes
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const { DATABASE }  = require('./config/db_config')
const { login, createUser, getUser, editUser, editAvatar, deleteUser } = require('./controllers/user');
const { getCards, createCard, deleteCard, addLike, deleteLike } = require('./controllers/card');
const cors = require('cors')

//connect to database
mongoose.connect(DATABASE, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const { PORT = 5000 } = process.env;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(requestLogger);

/* \/ ROUTES \/ */
//test routes
app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Server will crash now');
  }, 0);
}); 

// user routes //
app.post('/signin',
celebrate({
  body: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
}), 
login);

app.post('/signup', 
celebrate({
  body: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
}), 
createUser); 

app.get('/users/me', auth, getUser);

app.patch('/users/me',
celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30),
    avatar: Joi.string().uri().pattern(/^http:\/\/|https:\/\//),  
  }),
}), 
auth, editUser); 

app.patch('/users/me/avatar',
celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30),
    avatar: Joi.string().uri().pattern(/^http:\/\/|https:\/\//),  
  }),
}), 
auth, editAvatar); 

app.delete('/users/me', auth, deleteUser); 

// card routes //
app.get('/cards', auth, getCards);

app.post('/cards',
celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).required(),
    link: Joi.string().uri().pattern(/^http:\/\/|https:\/\//).required(),
    owner: Joi.objectId(),
    likes: Joi.array().items(Joi.objectId()),
    createdAt: Joi.date(),
  }),
}), 
auth, createCard);

app.delete('/cards/:cardId', auth, deleteCard);

app.put('/cards/:cardId/likes', auth, addLike);

app.delete('/cards/:cardId/likes', auth, deleteLike);

/* /\ ROUTES /\ */

//serve static files
app.use(express.static(path.join(__dirname, 'public')));

//errorlogger
app.use((err, req, res, next) => {
const { status = 500, message } = err;
res.status(status).send({
  message: status === 500
  ? 'An error occurred on the server'
  : message
  });
});

app.use(errorLogger);

//server
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});
