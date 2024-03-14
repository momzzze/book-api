const router = require('express').Router();

const bookController = require('./controllers/bookController');
const userController = require('./controllers/userController');
const authorController = require('./controllers/authorController');
const genreController = require('./controllers/genreController');
const publisherController = require('./controllers/publisherController');

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

router.use('/books', bookController);

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Operations related to users
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: A list of users
 *       404:
 *         description: No users found
 * 
 *   post:
 *     summary: Register a new user
 *     tags: [Users]
 *     description: Register a new user with the provided authentication data.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: The email address of the user.
 *                 example: user@example.com
 *               password:
 *                 type: string
 *                 description: The password of the user.
 *                 example: MySecurePassword123
 *               rePassword:
 *                 type: string
 *                 description: The password is needed for confirmation.
 *                 example: MySecurePassword123
 *               name:
 *                 type: string
 *                 description: The name of the user (optional).
 *                 example: John Doe
 *               username:
 *                 type: string
 *                 description: The username of the user.
 *                 example: john_doe
 *               imageUrl:
 *                 type: string
 *                 description: The URL of the user's profile image (optional).
 *                 example: https://example.com/profile.jpg
 *               info:
 *                 type: string
 *                 description: Additional information about the user (optional).
 *                 example: This is a sample user account.
 *     responses:
 *       200:
 *         description: User registration successful.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: JWT token for the registered user.
 *                   example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
 *                 userId:
 *                   type: string
 *                   description: ID of the registered user.
 *                   example: 1234567890
 *                 email:
 *                   type: string
 *                   format: email
 *                   description: Email address of the registered user.
 *                   example: user@example.com
 *                 role:
 *                   type: string
 *                   description: Role of the registered user.
 *                   example: user
 *       400:
 *         description: Bad request. Registration failed.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message.
 *                   example: Email address is already in use.
 */
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

router.get('*', (req, res) => {
    res.status(404).send('Page not found');
});

module.exports = router;