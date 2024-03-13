const router = require('express').Router();
const userService = require('../services/userService');
/**
 * @swagger
 * /users/register:
 *   post:
 *     summary: Register a new user
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