const path = require('path');

module.exports.getIndexPage = (req, res) => { res.sendFile('html/index.html', { root: '../scrapper' }) }

module.exports.postIndexPage = (req, res) => {
    const { selector, url } = req.body;
    console.log(selector, url);
    res.status(200);
    res.send('successfull');
}