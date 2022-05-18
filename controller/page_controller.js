const { scrapper } = require('../scrapper/scrapper');

const scrapeControl = async(chromium, selector, url) => {
    let chrome = await chromium();
    if (chrome != null) {
        await scrapper(chrome, selector, url);
    }
}

module.exports.scrapeControl = scrapeControl;