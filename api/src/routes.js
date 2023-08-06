const express = require('express');

const MovementController = require('./controller/movementController');

const routes = express.Router();

routes.post('/api/movements', MovementController.create);
routes.put('/api/movements/:id', MovementController.update);
routes.delete('/api/movements/:id', MovementController.delete);
routes.get('/api/movements/:id?', MovementController.list);

module.exports = routes;