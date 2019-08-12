const express = require('express');
const DevController = require('./controllers/devController');
const LikeController = require('./controllers/likeController');
const DisikeController = require('./controllers/dislikeController');
const routes = express.Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.post('/devs/:devId/likes', LikeController.store);
routes.post('/devs/:devId/dislikes', DisikeController.store);


module.exports = routes;