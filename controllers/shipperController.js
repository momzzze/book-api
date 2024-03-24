const router = require('express').Router();
const shipperService = require('../services/shipperService');
router.get('/', async (req, res) => {
    try {
        const shippers = await shipperService.getAllShippers();
        res.status(200).json(shippers);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

router.post('/', async (req, res) => {
    const shipperData = req.body;
    try {
        const shippers = await shipperService.createShipper(shipperData);
        res.status(200).json(shippers);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});


module.exports = router;