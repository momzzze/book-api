const Book = require('../models/Book');

exports.create = (bookData) => {
    if (!bookData.title) {
        throw new Error('Title is required');
    }
    if (!bookData.description) {
        throw new Error('Description is required');
    }
    if (!bookData.imageUrl) {
        throw new Error('Image URL is required');
    }
    if (!bookData.publishedDate) {
        throw new Error('Published Date is required');
    }

    return Book.create(bookData);
}

exports.getById = (id) => {
    return Book.findById(id)
}

exports.getAll = () => {
    return Book.find().populate('author').populate('genre').populate('publisher');
}

exports.update = (id, bookData) => {
    return Book.findByIdAndUpdate(id, bookData, { new: true }).populate('author').populate('genre').populate('publisher');  
}

exports.delete = (id) => {
    return Book.findByIdAndDelete(id);
}