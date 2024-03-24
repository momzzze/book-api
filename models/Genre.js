const mongoose = require('mongoose');


const genreSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, 
        unique: true,       
        min: 3,
        lowercase: true,
    },
}, {
    timestamps: true,
});


const Genre = mongoose.model('Genre', genreSchema);
module.exports = Genre;