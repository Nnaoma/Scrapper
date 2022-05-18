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

module.exports.getResultsPage = (req, res) => { res.render('result') }

module.exports.postIndexPage = async(req, res) => {
    const { selector, url } = req.body;
    console.log(selector, url);
    res.status(200);
    res.send('successfull');

    scrapeControl(startupPuppeteer, selector, url);
}