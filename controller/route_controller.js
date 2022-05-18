const path = require('path');
const puppeteer = require('puppeteer');
const { scrapeControl } = require('./page_controller');
const model = require('../model/mongo_model');

async function startupPuppeteer() {
    try {
        const chromium = await puppeteer.launch({ headless: true, ignoreHTTPSErrors: true });
        return chromium;
    } catch (err) {
        console.log('unable to launch puppeteer', err);
    }
    return null;
}

module.exports.getIndexPage = (req, res) => { res.sendFile('html/index.html', { root: '../scrapper' }) }

module.exports.getResultsPage = async(req, res) => {
    let nextPageNumber = Number.parseInt(req.params.page);
    const options = { page: nextPageNumber, limit: 10 }
    let data = await model.paginate({}, options);
    let link = '';
    if (data.hasNextPage) {
        link = `/results/${data.nextPage}`;
    }
    res.render('result', { data: data.docs, status: !data.hasNextPage, link });
}

module.exports.postIndexPage = async(req, res) => {
    const { selector, url } = req.body;
    console.log(selector, url);

    try {
        await scrapeControl(startupPuppeteer, selector, url);
        res.status(201);
        res.redirect('/results/1');
    } catch (err) {
        res.status(400);
        res.sendFile('html/index.html', { root: '../scrapper' });
        console.log(err);
    }
}