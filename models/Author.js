const mongoose = require('mongoose');


const authorSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        min: 3,
    },
    lastName: {
        type: String,
        required: true,
        min: 3,
    },
    imageUrl: {
        type: String,
        required: true,
        validate: /^https?/,
    },
    birthDate: {
        type: Date,
        required: true,
    },
    biography: {
        type: String,
        required: true,
        min: 10,
        trim: true,
    },
    publishedBooks: [{
        type: mongoose.Types.ObjectId,
        ref: 'Book',
    }],
    writingGenre: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Genre',
        }
    ],
});


const Author = mongoose.model('Author', authorSchema);
module.exports = Author;