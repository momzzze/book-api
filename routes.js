const router = require('express').Router();

const bookController = require('./controllers/bookController');
const userController = require('./controllers/userController');
const authorController = require('./controllers/authorController');
const genreController = require('./controllers/genreController');

/**
 * @swagger
 * /books:
 *   get:
 *     summary: Get all books
 *     responses:
 *       200:
 *         description: A list of books
 *       404:
 *         description: No books found
 */
router.use('/books', bookController);
/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users
 *     responses:
 *       200:
 *         description: A list of users
 *       404:
 *         description: No users found
 */
router.use('/users', userController);
/**
 * @swagger
 * /authors:
 *   get:
 *     summary: Get all authors
 *     responses:
 *       200:
 *         description: A list of authors
 *       404:
 *         description: No authors found
 *   post:
 *     summary: Create a new author
 *     description: Create a new author with the provided data. You can change the name, imageUrl, and info fields as needed.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *                 example: "John"
 *               lastName:
 *                 type: string
 *                 example: "Doe"
 *               imageUrl:
 *                 type: string
 *                 example: "https://images.pexels.com/photos/13780989/pexels-photo-13780989.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
 *               birthDate:
 *                 type: string
 *                 format: date
 *                 example: "1990-01-01"
 *               biography:
 *                 type: string
 *                 example: "This is a sample biography. It should be at least 10 characters long."
 *     responses:
 *       200:
 *         description: Author creation successful.
 *       404:
 *         description: Author creation failed.
 */
router.use('/authors', authorController);
/**
 * @swagger
 * /genres:
 *   get:
 *     summary: Get all genres
 *     responses:
 *       200:
 *         description: A list of genres
 *       404:
 *         description: No genres found
 *   post:
 *     summary: Create a new genre
 *     description: Create a new genre with the provided data. You can change the name and description fields as needed.
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
 *               
 *     responses:
 *       200:
 *         description: Genre creation successful.
 *       404:
 *         description: Genre creation failed.
 */
router.use('/genres', genreController);

router.get('*', (req, res) => {
    res.status(404).send('Page not found');
});

module.exports = router;