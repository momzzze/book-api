const router = require('express').Router();
const userService = require('../services/userService');

router.post('/register', async (req, res) => {
    const authData = req.body;
    try {
        const { token, userId, email, role } = await userService.register(authData);
        res.json({ token, userId, email, role });
    } catch (e) {
        res.status(400).send({ message: e.message });
    }
})


module.exports = router;