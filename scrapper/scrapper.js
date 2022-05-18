const dataModel = require('../model/mongo_model');

const scrapper = async(chrome, selector, url) => {
    let page = await chrome.newPage();
    await page.goto(url);
    await page.waitForSelector(selector);
    let result = [];
    let html = await page.$$eval(selector, (elements) => elements.map((e) => e.outerHTML));
    for (const e of html) {
        result.push({ selector: selector, url: url, result: e });
    }
    let data = await dataModel.insertMany(result);
    console.log(data);
}

module.exports.scrapper = scrapper;