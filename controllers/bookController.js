const router = require('express').Router();
const bookService = require('../services/bookService');


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

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const book = await bookService.getById(id);
        res.json(book);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

router.post('/edit/:id', async (req, res) => {
    const id = req.params.id;
    const bookData = req.body;
    try {
        const book = await bookService.update(id, bookData);
        res.json(book);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.get('/delete/:id', async (req, res) => {
    const id = req.params.id;
    try {
        await bookService.delete(id);
        res.json({ message: 'Book deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;