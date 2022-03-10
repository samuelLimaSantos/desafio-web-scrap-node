const { join } = require('path');
const { writeFile } = require('fs/promises');
const { scrapPage } = require('../utils/scrapPage');

const writeJsonFile = async (dataApi) => {
  const path = join(__dirname, '..', '..', 'temp', `news.json`);

  await writeFile(path, JSON.stringify(dataApi, null, 2));
}

scrapPage(writeJsonFile);
