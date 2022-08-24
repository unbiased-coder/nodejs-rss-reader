import Parser from 'rss-parser';

type CustomFeed = {foo: string};
type CustomItem = {bar: number};

const parser = new Parser();
const yahooFinanceFeed = 'https://finance.yahoo.com/news/rssindex';

(async () => {
  const feed = await parser.parseURL(yahooFinanceFeed);
  console.log(feed);

  feed.items.forEach(item => {
    console.log(item);
  });
})();
