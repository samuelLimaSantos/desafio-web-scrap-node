const { Router } = require('express');
const { usersRoutes } = require('./users.routes');
const { newsRoutes } = require('./news.routes');

const routes = Router();

routes.use('/users', usersRoutes);
routes.use('/news', newsRoutes);

module.exports = { routes };