const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        min: 3,
    },
    description: {
        type: String,
        required: true,
        min: 10,
        trim: true,
    },
    imageUrl: {
        type: String,
        required: true,
        validate: /^https?/,
    },
    publishedDate: {
        type: Date,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    pages: {
        type: Number,
        required: true,
    },
    availableQuantity: {
        type: Number,
        required: true,
    },
    genre: {
        type: mongoose.Types.ObjectId,
        ref: 'Genre',
    },    
    author: {
        type: mongoose.Types.ObjectId,
        ref: 'Author',        
    }, 
    publisher: {
        type: mongoose.Types.ObjectId,
        ref: 'Publisher',
    },  
},
{
    timestamps: true,
});

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;