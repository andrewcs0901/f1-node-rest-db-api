const routes = require('express').Router();

const nations = require('../controllers/nations');
const teams = require('../controllers/teams');
const drivers = require('../controllers/drivers');
const circuits = require('../controllers/circuits');

routes.get('/nations', nations.index);
routes.get('/nations/:id', nations.show);
routes.post('/nations', nations.create);
routes.put('/nations/:id', nations.update);
routes.delete('/nations/:id', nations.delete);

routes.get('/teams', teams.index);
routes.get('/teams/:id', teams.show);
routes.post('/teams', teams.create);
routes.put('/teams/:id', teams.update);
routes.delete('/teams/:id', teams.delete);

routes.get('/drivers', drivers.index);
routes.post('/drivers', drivers.create);
routes.get('/drivers/:id', drivers.show);
routes.put('/drivers/:id', drivers.update);
routes.delete('/drivers/:id', drivers.delete);

routes.get('/circuits', circuits.index);
routes.get('/circuits/:id', circuits.show);
routes.post('/circuits', circuits.create);
routes.put('/circuits/:id', circuits.update);
routes.delete('/circuits/:id', circuits.delete);

module.exports = routes;