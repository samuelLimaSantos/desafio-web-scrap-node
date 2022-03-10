const cheerio = require('cheerio');
const axios = require('axios');

const api = axios.create({
  baseURL: 'https://g1.globo.com/'
});

const scrapPage = async (throwData) => {
  const { data: html } = await api.get();

  const $ = cheerio.load(html);

  const listElement = $('.bastian-page > div > div', html);

  const news = [];

  listElement.each((_, element) => {
    const title = $(element).find('.feed-post-body-title .feed-post-link').text();
    const newsUrl = $(element).find('.feed-post-body-title .feed-post-link').attr('href');
    const subtitle = $(element).find('.feed-post-header-chapeu').text();
    const imageUrl = $(element).find('.bstn-fd-picture-image').attr('src');

    const relatedNews = [];

    $(element).find('.bstn-relateditems > li').each((_, element) => {
      const title = $(element).find('a').text();
      const link = $(element).find('a').attr('href');

      relatedNews.push({
        title,
        link
      });
    });

    news.push({
      title,
      newsUrl,
      subtitle,
      imageUrl,
      relatedNews,
    });
  });

  await throwData(news);
}

module.exports = { scrapPage };
