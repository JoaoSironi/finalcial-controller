const express = require('express');

const MovementController = require('./controller/movementController');

const routes = express.Router();

routes.post('/api/movements', MovementController.create);
routes.get('/api/movements', MovementController.list);

module.exports = routes;