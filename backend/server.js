const path = require('path');

//middleware
const { requestLogger, errorLogger } = require('./middleware/logger'); 
const { celebrate, Joi } = require('celebrate');
Joi.objectId = require('joi-objectid')(Joi);
const bodyParser = require('body-parser');
const auth = require('./middleware/auth');

//routes
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const { DATABASE }  = require('./config/db_config')
const { login, createUser, getUser, editUser, editAvatar, deleteUser } = require('./controllers/user');
const { getCards, createCard, deleteCard, addLike, deleteLike } = require('./controllers/card');
//dev
const cors = require('cors')

//connect to database
mongoose.connect(DATABASE, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const { PORT = 5000 } = process.env;

//dev
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(requestLogger);

/* \/ ROUTES \/ */
// user routes //
app.post('/signin',
celebrate({
  body: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30),
    avatar: Joi.string().uri().pattern(/^http:\/\/|https:\/\//),
  }),
}), 
login);

app.post('/signup', 
celebrate({
  body: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30),
    avatar: Joi.string().uri().pattern(/^http:\/\/|https:\/\//),
  }),
}), 
createUser); 

app.get('/users/me',
celebrate({
  body: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30),
    avatar: Joi.string().uri().pattern(/^http:\/\/|https:\/\//),  
  }),
}), 
auth, getUser);

app.patch('/users/me',
celebrate({
  body: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30),
    avatar: Joi.string().uri().pattern(/^http:\/\/|https:\/\//),  
  }),
}), 
auth, editUser); 

app.patch('/users/me/avatar',
celebrate({
  body: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30),
    avatar: Joi.string().uri().pattern(/^http:\/\/|https:\/\//),  
  }),
}), 
auth, editAvatar); 

app.delete('/users/me',
celebrate({
  body: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30),
    avatar: Joi.string().uri().pattern(/^http:\/\/|https:\/\//),  
  }),
}), 
auth, deleteUser); 

// card routes //
app.get('/cards', 
celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    link: Joi.string().uri().pattern(/^http:\/\/|https:\/\//),
    owner: Joi.objectId(),
    likes: Joi.array().items(Joi.objectId()),
    createdAt: Joi.date(),
  }),
}), 
auth, getCards);

app.post('/cards',
celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    link: Joi.string().uri().pattern(/^http:\/\/|https:\/\//),
    owner: Joi.objectId(),
    likes: Joi.array().items(Joi.objectId()),
    createdAt: Joi.date(),
  }),
}), 
auth, createCard);

app.delete('/cards/:cardId',
celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    link: Joi.string().uri().pattern(/^http:\/\/|https:\/\//),
    owner: Joi.objectId(),
    likes: Joi.array().items(Joi.objectId()),
    createdAt: Joi.date(),
  }),
}), 
auth, deleteCard);

app.put('/cards/:cardId/likes',
celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    link: Joi.string().uri().pattern(/^http:\/\/|https:\/\//),
    owner: Joi.objectId(),
    likes: Joi.array().items(Joi.objectId()),
    createdAt: Joi.date(),
  }),
}), 
auth, addLike);

app.delete('/cards/:cardId/likes',
celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    link: Joi.string().uri().pattern(/^http:\/\/|https:\/\//),
    owner: Joi.objectId(),
    likes: Joi.array().items(Joi.objectId()),
    createdAt: Joi.date(),
  }),
}), 
auth, deleteLike);

/* /\ ROUTES /\ */

//errorlogger
app.use(errorLogger);

//serve static files
app.use(express.static(path.join(__dirname, 'public')));

//server
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});
