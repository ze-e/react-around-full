const path = require('path');

//config
require('dotenv').config({ path: '../' }); 

//middleware
const { errors } = require('celebrate');
const bodyParser = require('body-parser');
const { requestLogger, errorLogger } = require('./middleware/logger'); 

//routes
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const { DATABASE }  = require('./config/db_config')
const cors = require('cors')

//connect to database
mongoose.connect(DATABASE, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(requestLogger);

//test routes
app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Server will crash now');
  }, 0);
}); 

// user routes
app.use('/', require('./routes/user'));

// card routes
app.use('/', require('./routes/card'));

// celebrate errors
app.use(errors());
//normal errors
app.use((err, req, res, next) => {
const { statusCode = 500, message } = err;
res.status(statusCode).send({
  message: statusCode === 500
  ? 'An error occurred on the server'
  : message
  });
});
//errorlogger
app.use(errorLogger);

//serve static assets 
if(process.env.NODE_ENV === 'production'){
  app.use(express.static('frontend/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve('..','frontend','public'))
  })
}

//server
app.listen(process.env.PORT || 5000, () => {
  console.log(`server running`);
  const message = !process.env.NODE_ENV
  ? "environment variables failed to load. Using default config settings"
  : "environment variables loaded"; 
  console.log(message);
});
