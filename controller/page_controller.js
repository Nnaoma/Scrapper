const { scrapper } = require('../scrapper/scrapper');

const scrapeControl = async(chromium, selector, url) => {
    try {
        let chrome = await chromium();
        if (chrome != null) {
            await scrapper(chrome, selector, url);
        }
    } catch (err) {
        console.log('puppet error', err);
    }
}

module.exports.scrapeControl = scrapeControl;