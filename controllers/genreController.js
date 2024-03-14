const router = require('express').Router();
const genreService = require('../services/genreService');
/**
 * @swagger
 * tags:
 *   name: Genres
 *   description: Operations related to genres
 */

/**
 * @swagger
 * /genres:
 *   get:
 *     summary: Get all genres
 *     tags: [Genres]
 *     responses:
 *       200:
 *         description: A list of genres
 *       404:
 *         description: No genres found
 *   post:
 *     summary: Create a new genre
 *     tags: [Genres]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Sample Genre"
 *     responses:
 *       200:
 *         description: Genre creation successful.
 *       400:
 *         description: Genre creation failed.
 */
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
    console.log(genreData);
    try {
        const genre = await genreService.createGenre(genreData);
        res.status(200).json(genre);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});
module.exports = router;