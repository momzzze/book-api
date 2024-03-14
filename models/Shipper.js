const mongoose = require('mongoose');


const shipperSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 3,
    },
    phoneNumber: {
        type: String,
        required: true,
        min: 10,
    },
});


const Shipper = mongoose.model('Author', shipperSchema);
module.exports = Shipper;