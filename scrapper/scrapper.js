const dataModel = require('../model/mongo_model');

const scrapper = async(chrome, selector, url) => {
    let page = await chrome.newPage();
    await page.goto(url);
    await page.waitForSelector(selector);
    let result = await page.$$eval(selector, (elements) => elements.map((e) => e.outerHTML));
    let data = await dataModel.create({ selector, url, result });
    console.log(data);
}

module.exports.scrapper = scrapper;