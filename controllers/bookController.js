const router = require('express').Router();
const bookService = require('../services/bookService');


 /**
 * @swagger
 * /books:
 *   get:
 *     summary: Get all books
 *     description: Retrieve a list of all books.
 *     responses:
 *       200:
 *         description: A list of books.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: './models/Book'
 *         example:
 *           - _id: "6099a7a9bcb8d118b84d821f"
 *             title: "Sample Book 1"
 *             description: "This is a sample book description 1."
 *             imageUrl: "https://example.com/sample-book-1.jpg"
 *             publishedDate: "2022-04-12T00:00:00.000Z"
 *           - _id: "6099a7c0bcb8d118b84d8220"
 *             title: "Sample Book 2"
 *             description: "This is a sample book description 2."
 *             imageUrl: "https://example.com/sample-book-2.jpg"
 *             publishedDate: "2022-04-13T00:00:00.000Z"
 *       404:
 *         description: Books not found.
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
 * 
 * /books:
 *   post:
 *     summary: Create a new book
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

router.get('/', async(req, res) => {
    try {
        const books=await bookService.getAll();
        res.json(books);        
    } catch (error) {
        res.status(404).json({message: error.message});
    }
});

router.post('/', async (req, res) => {
    const bookData = req.body;
    try {
        const book = await bookService.create(bookData);
        res.json(book);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


module.exports = router;