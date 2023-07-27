const express = require('express');

const MovementController = require('./controller/movementController');

const routes = express.Router();

routes.post('/api/movements', MovementController.create);

module.exports = routes;