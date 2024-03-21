const router = require('express').Router();

const bookController = require('./controllers/bookController');
const userController = require('./controllers/userController');
const authorController = require('./controllers/authorController');
const genreController = require('./controllers/genreController');
const publisherController = require('./controllers/publisherController');
const shipperController = require('./controllers/shipperController');

/**
 * @swagger
 * tags:
 *   name: Books
 *   description: Operations related to books
 */

/**
 * @swagger
 * /books:
 *   get:
 *     summary: Get all books
 *     tags: [Books]
 *     responses:
 *       200:
 *         description: A list of books
 *       404:
 *         description: No books found
 *   post:
 *     summary: Create a new book
 *     tags: [Books]
 *     description: Create a new book with the provided data. You can change the title, description, imageUrl, and publishedDate fields as needed.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the book. You can change this to the desired title.
 *                 example: "Sample Book 3"
 *               description:
 *                 type: string
 *                 description: The description of the book. You can change this to the desired description.
 *                 example: "This is a sample book description. It should be at least 10 characters long."
 *               imageUrl:
 *                 type: string
 *                 description: The URL of the book's image. You can change this to the desired image URL.
 *                 example: "https://images.pexels.com/photos/4691213/pexels-photo-4691213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
 *               publishedDate:
 *                 type: string
 *                 format: date
 *                 description: The published date of the book. You can change this to the desired date.
 *                 example: "2022-04-12T00:00:00.000Z"
 *               price:
 *                 type: number
 *                 description: The price of the book. You can change this to the desired price.
 *                 example: 20
 *               pages:
 *                 type: number
 *                 description: The number of pages in the book. You can change this to the desired number of pages.
 *                 example: 200
 *               availableQuantity:
 *                 type: number
 *                 description: The available quantity of the book. You can change this to the desired quantity.
 *                 example: 100
 *     responses:
 *       200:
 *         description: The newly created book.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: The ID of the created book.
 *                 title:
 *                   type: string
 *                   description: The title of the created book.
 *                 description:
 *                   type: string
 *                   description: The description of the created book.
 *                 imageUrl:
 *                   type: string
 *                   description: The URL of the created book's image.
 *                 publishedDate:
 *                   type: string
 *                   format: date
 *                   description: The published date of the created book.
 *       400:
 *         description: Bad request. Book creation failed.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message.
 */

/**
 * @swagger
 * /books/{id}:
 *   get:
 *     summary: Get a book by ID
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the book
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The book with the provided ID 
 *       404:
 *         description: Book not found
 *       400:
 *         description: Bad request. Book retrieval failed.
 */

router.use('/books', bookController);


router.use('/users', userController);

/**
 * @swagger
 * tags:
 *   name: Authors
 *   description: Operations related to authors
 */

/**
 * @swagger
 * /authors:
 *   get:
 *     summary: Get all authors
 *     tags: [Authors]
 *     responses:
 *       200:
 *         description: A list of authors
 *       404:
 *         description: No authors found
 *   post:
 *     summary: Create a new author
 *     tags: [Authors]
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

/**
 * @swagger
 * tags:
 *   name: Publishers
 *   description: Operations related to publishers
 */

/**
 * @swagger
 * /publishers:
 *   get:
 *     summary: Get all publishers
 *     tags: [Publishers]
 *     responses:
 *       200:
 *         description: A list of publishers
 *       404:
 *         description: No publishers found
 *   post:
 *     summary: Create a new publisher
 *     tags: [Publishers]
 *     description: Create a new publisher with the provided data. You can change the name field as needed.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Sample Publisher"
 *     responses:
 *       200:
 *         description: Publisher creation successful.
 *       400:
 *         description: Publisher creation failed.
 */
router.use('/publishers', publisherController);

/**
 * @swagger
 * tags:
 *   name: Shippers
 *   description: Operations related to shippers
 */

/**
 * @swagger
 * /shippers:
 *   get:
 *     summary: Get all shippers
 *     tags: [Shippers]
 *     responses:
 *       200:
 *         description: A list of shippers
 *       404:
 *         description: No shippers found
 *   post:
 *     summary: Create a new publisher
 *     tags: [Shippers]
 *     description: Create a new publisher with the provided data. You can change the name field as needed.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string 
 *                 example: "Sample Shipper"
 *               phone:
 *                 type: string
 *                 example: "1234567890"
 *     responses:
 *       200:
 *         description: Shipper creation successful.
 *       400:
 *         description: Shipper creation failed.
 */
router.use('/shippers', shipperController);


router.get('*', (req, res) => {
    res.status(404).send('Page not found');
});

module.exports = router;