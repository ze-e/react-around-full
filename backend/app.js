const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

const { DATABASE }  = require('./config/db_config')
const auth = require('./middleware/auth');
const { login, createUser, editUser, deleteUser } = require('./controllers/user');
const { getCards, createCard, deleteCard, addLike, deleteLike } = require('./controllers/card');

//connect to database
mongoose.connect(DATABASE, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const { PORT = 3000 } = process.env;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//user routes
app.post('/signin', login);
app.post('/signup', createUser); 
app.patch('/users/me', auth, editUser); 
app.delete('/users/me', auth, deleteUser); 

//card routes
app.get('/cards', auth, getCards);
app.post('/cards', auth, createCard);
app.delete('/cards/:cardId', auth, deleteCard);
app.put('/cards/:cardId/likes', auth, addLike);
app.delete('/cards/:cardId/likes', auth, deleteLike);

//serve static files
app.use(express.static(path.join(__dirname, 'public')));

//server
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});
