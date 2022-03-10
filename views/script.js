const container = document.querySelector('main.container');

fetch('../temp/news.json')
  .then(data => data.json())
  .then(jsonData => {
    jsonData.forEach(data => {
      let liTagItems = '';

      data.relatedNews.map(news => {
        liTagItems += `<li class="link"> <a href="${news.link}">${news.title}</a></li>`
      })

      const card = `
        <div class="card">
          <div class="img-news">
            <img src="${data.imageUrl}" alt="img news " width="350px" height="200px"/>
          </div>
          <div class="news">
            <div>
              <h4>${data.subtitle}</h4>
              <h2 class="title">
                <a href="${data.newsUrl}" target="_blank">
                  ${data.title}
                </a>
              </h2>
            </div>
            <ul>
              
              ${liTagItems}
            </ul>
          </div>
        </div>`;

      container.innerHTML += card;
    })

  });
