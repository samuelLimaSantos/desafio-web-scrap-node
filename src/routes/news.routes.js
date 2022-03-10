const { Router } = require('express');
const { NewsController } = require('../news/controllers/newsController');
const { NewsModel } = require('../news/models/newsModel');

const newsRoutes = Router();
const newsModel = new NewsModel();

const newsController = new NewsController(newsModel);

newsRoutes.post('/', newsController.newsHandle);

module.exports = { newsRoutes };
