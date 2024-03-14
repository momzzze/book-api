const router = require('express').Router();

const authorService = require('../services/authorService');

router.get('/', async (req, res) => {
    try {
        const authors = await authorService.getAllAuthors();
        res.status(200).json(authors);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

router.post('/', async (req, res) => {
    const authorData = req.body;
    try {
        const authors = await authorService.createAuthor(authorData);
        res.status(200).json(authors);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});
module.exports = router;