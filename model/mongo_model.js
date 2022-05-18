const mongoose = require('mongoose');
const paginate = require('mongoose-paginate-v2');

const scrappedDataSchema = new mongoose.Schema({
    selector: { type: String, required: true },
    url: { type: String, required: true },
    result: [String],
});

scrappedDataSchema.plugin(paginate);

scrappedDataSchema.post('save', function(data, next) {
    next();
});

const scrappedDataModel = mongoose.model('data', scrappedDataSchema);
module.exports = scrappedDataModel;