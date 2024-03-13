const User = require('../models/User');
const jwt=require('jsonwebtoken');

exports.register = async (userData) => {
    if (!userData.email) {
        throw new Error('Email is required');
    }
    if (!userData.password) {
        throw new Error('Password is required');
    }
    const user = await User.create(userData);

    const token=jwt.sign({
        userId:user._id,
        email:user.email,
    },process.env.JWT_SECRET);

    return {
        userId: user._id,
        email: user.email,
        role: user.role,
        token: token,
    }
}

