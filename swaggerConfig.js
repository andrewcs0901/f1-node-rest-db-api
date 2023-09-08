const express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const { V1_ROUTE } = require('./consts/consts');
const { SERVER_URL, SERVER_PORT } = require('./configs/configs')

const PORT = SERVER_PORT? `:${SERVER_PORT}` : ''

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'F1-Node-Rest-API',
      version: '1.0.0',
      description: 'API documentation for your Node.js Express project',
    },
    servers: [
      {
        url: `${SERVER_URL}${PORT}${V1_ROUTE}`,
      },
    ],
  },
  apis: ['./routes/*.js'],
};

const specs = swaggerJsdoc(options);

const router = express.Router();

router.use('/', swaggerUi.serve);
router.get('/', swaggerUi.setup(specs));

module.exports = router;