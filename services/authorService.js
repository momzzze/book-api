const Author = require('../models/Author');

exports.getAllAuthors = async () => {
    const authors = await Author.find();
    return authors;
}

exports.createAuthor= async (authorData) => {
    const author = await Author.create(authorData);
    return author;
}