const connection = require('../../infra/database/dbConnection');

class NewsModel {
  constructor(dbConnection) {
    this.dbConnection = dbConnection;
  }

  async insert(news) {

    const formattedList = [];

    news.forEach(newItem => {
      const title = newItem.title || '';
      const newsUrl = newItem.newsUrl || '';
      const subtitle = newItem.subtitle || '';
      const imageUrl = newItem.imageUrl || '';

      const tempArray = [title, newsUrl, subtitle, imageUrl];

      formattedList.push(tempArray);
    });

    console.log(formattedList);

    const sql = "INSERT INTO news (title, newsUrl, subtitle, imgUrl) VALUES ?";
    const [result] = await connection.execute(
      sql,
      formattedList,
    ); 
  }
}

module.exports = { NewsModel };