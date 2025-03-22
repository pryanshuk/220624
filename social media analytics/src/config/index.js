// src/config/index.js
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

module.exports = {
  port: process.env.PORT || 3000,
  apiBaseUrl: process.env.API_BASE_URL || 'http://20.244.56.144/test',
};