require('dotenv').config();

const { DATABASE_URL, NODE_ENV, SERVER_URL, SERVER_PORT } = process.env ||
    { NODE_ENV: 'development', SERVER_PORT: 3000, SERVER_URL: 'http://localhost' };

module.exports = {
    DATABASE_URL, NODE_ENV, SERVER_URL, SERVER_PORT
};