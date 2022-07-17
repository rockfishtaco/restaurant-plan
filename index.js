const fetch = require(node_fetch)
const cheerio = require('cheerio')

const main = async () => {
const response = await fetch('https://foodreference.com/usa')
const body =await response .text();
};
main();