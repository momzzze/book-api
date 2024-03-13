const router=require('express').Router();

const bookController=require('./controllers/bookController');
const userController=require('./controllers/userController');

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



router.get('*', (req, res) => {
    res.status(404).send('Page not found');
});

module.exports=router;