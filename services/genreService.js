const Genre = require('../models/Genre');

exports.getAllGenres= async () => {
    const genres = await Genre.find();
    return genres;
}

exports.createGenre= async (genreData) => {
    const genre = await Genre.create(genreData);
    return genre;
}