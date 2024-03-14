const router=require('express').Router();

const bookController=require('./controllers/bookController');
const userController=require('./controllers/userController');
const authorController=require('./controllers/authorController');

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
router.use('/books',bookController);
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
router.use('/users',userController);


/**
 * @swagger
 * /authors:
 *  get:
 *   summary: Get all authors
 *  responses:
 *   200:
 *   description: A list of authors
 *  404:
 *  description: No authors found
 */
router.use('/authors',authorController);


router.get('*', (req, res) => {
    res.status(404).send('Page not found');
});

module.exports=router;