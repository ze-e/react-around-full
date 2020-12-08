require('dotenv').config(); 
const {DB_USER, DB_PASSWORD, DB_NAME} = process.env;
module.exports.DATABASE = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.szyal.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;