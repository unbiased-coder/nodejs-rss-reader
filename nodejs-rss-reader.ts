import Parser from 'rss-parser';

const parser = new Parser();
const yahooFinanceFeed = 'https://finance.yahoo.com/news/rssindex';

async function readRssFeed(): Promise <any> {
  return await parser.parseURL(yahooFinanceFeed);
}

async function getRssLinks(): Promise <string[]> {
  let feed: any;
  let feed_links: string[] = [];

  feed = await readRssFeed();
  if (!feed){
    console.log('Feed does not contain any data');
    return [];
  }

  feed.items.forEach((item: any) => {
    feed_links.push(item.link);
  });
  
  return feed_links;
}

async function getRssTitles(): Promise <string[]> {
  let feed: any;
  let feed_titles: string[] = [];

  feed = await readRssFeed();
  if (!feed){
    console.log('Feed does not contain any data');
    return [];
  }

  feed.items.forEach((item: any) => {
    feed_titles.push(item.title);
  });
  
  return feed_titles;
}

(async () => {
  let feed_titles: string[];
  let feed_links: string[];

  feed_titles = await getRssTitles();
  console.log(feed_titles);

  feed_links = await getRssLinks();
  console.log(feed_links);
})();
