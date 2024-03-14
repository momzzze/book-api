const mongoose = require('mongoose');


const publisherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 3,
    },
});


const Publisher = mongoose.model('Author', publisherSchema);
module.exports = Publisher;