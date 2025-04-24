/* eslint-disable no-secrets/no-secrets */
const dotenv = require('dotenv');
process.env.NODE_ENV = process.env.NODE_ENV || 'production';
dotenv.config();

//---------------------------v2--------------------------

module.exports = {
  name: process.env.NAME || 'techscrumapp',
  port: process.env.PORT || 8000,
  api: {
    prefix: process.env.API_PREFIX || '/api',
  },
  version: '1.0.0',
  db: process.env.MONGODB_URL,
};
