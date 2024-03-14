const router = require('express').Router();
const genreService = require('../services/genreService');

router.get('/', async (req, res) => {
    try {
        const genres = await genreService.getAllGenres();
        res.status(200).json(genres);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

router.post('/', async (req, res) => {
    const genreData = req.body;
    try {
        const genres = await genreService.createGenre(genreData);
        res.status(200).json(genres);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});
module.exports = router;