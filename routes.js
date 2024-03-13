const router=require('express').Router();
const bookController=require('./controllers/bookController');
const userController=require('./controllers/userController');

router.use('/books',bookController);
router.use('/users',userController);

router.get('*', (req, res) => {
    res.status(404).send('Page not found');
});

module.exports=router;