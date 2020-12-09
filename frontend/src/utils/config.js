require('dotenv').config({ path: '../../../' });
const path = require('path');
export const baseURL = path.resolve(__dirname,'../../..','backend','server.js');
//export const baseURL = process.env.PUBLIC_URL;