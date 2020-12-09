require('dotenv').config({ path: '../../../' });
const path = require('path');
const baseURL = path.resolve(__dirname,'../../..','backend','server.js');

module.exports = baseURL;
//export const baseURL = process.env.PUBLIC_URL;