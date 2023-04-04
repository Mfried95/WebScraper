const PORT = 3000;

const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');

const app = express('/');

const url = 'https://crypto.news/';

axios(url)
  .then(response => {
    const html = response.data;
    const $ = cheerio.load(html);
    const articles = [];
    $('.press-releases__inner', html).each(function() {
      const title = $(this).find('').text();
      articles.push({
        title,
      });
    });
    console.log(articles);
  }).catch(err => console.log(err));


app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});

