const { scrapPage } = require('../../utils/scrapPage');
const { NewsModel } = require('../models/newsModel');

class NewsController {
  constructor(newsModel) {
    this.newsModel = newsModel;
  }

  async newsHandle(req, res) {
     
    const newsModel = new NewsModel();

    await scrapPage(newsModel.insert)

    return res.json({ message: 'hello world'});
  }
}

module.exports = { NewsController };

