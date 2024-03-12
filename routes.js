const router=require('express').Router();
const bookController=require('./controllers/bookController');

router.use('/books',bookController);

router.get('*', (req, res) => {
    res.status(404).send('Page not found');
});

module.exports=router;