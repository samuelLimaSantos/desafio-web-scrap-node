const cheerio = require('cheerio');
const axios = require('axios');
const { join } = require('path');
const { writeFile } = require('fs/promises');

const api = axios.create({
  baseURL: 'https://g1.globo.com/'
});


const scrapPage = async () => {
  const { data: html } = await api.get();

  const $ = cheerio.load(html);

  const listElement = $('.bastian-page > div > div', html);

  const jsonObject = [];

  listElement.each((_, element) => {
    const title = $(element).find('.feed-post-body-title .feed-post-link').text();
    const newsUrl = $(element).find('.feed-post-body-title .feed-post-link').attr('href');
    const subtitle = $(element).find('.feed-post-header-chapeu').text();
    const imageUrl = $(element).find('.bstn-fd-picture-image').attr('src');

    const relatedNews = [];

    $(element).find('.bstn-relateditems > li').each((index, element) => {
      const title = $(element).text();
      const link = $(element).find('a').attr('href');

      relatedNews.push({
        title,
        link
      });
    });

    jsonObject.push({
      title,
      newsUrl,
      subtitle,
      imageUrl,
      relatedNews,
    });
  });

  writeJsonFile(jsonObject);
}

const writeJsonFile = async (dataApi) => {
  const path = join(__dirname, '..', 'temp', `news.json`);

  await writeFile(path, JSON.stringify(dataApi, null, 2));
}

scrapPage();
