const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        const publishers = await publisherService.getAllPublishers();
        res.status(200).json(publishers);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

router.post('/', async (req, res) => {
    const publisherData = req.body;
    try {
        const publisher = await publisherService.createPublisher(publisherData);
        res.status(200).json(publisher);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


module.exports = router;