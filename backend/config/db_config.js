DB_USER = 'admin';
DB_PASSWORD = 'testing123'
DB_NAME = 'testDB';
module.exports.DATABASE = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.szyal.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;