const mongoose = require('mongoose');

const scrappedDataSchema = new mongoose.Schema({
    selector: { type: String, required: true },
    url: { type: String, required: true },
    result: [String],
});

scrappedDataSchema.post('save', function(data, next) {
    next();
});

const scrappedDataModel = mongoose.model('data', scrappedDataSchema);
module.exports = scrappedDataModel;