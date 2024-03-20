const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.register = async (userData) => {
    if (!userData.email) {
        throw new Error('Email is required');
    }
    if (!userData.password) {
        throw new Error('Password is required');
    }
    const user = await User.create(userData);

    const token = jwt.sign({
        userId: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
    }, process.env.JWT_SECRET);

    return {
        userId: user._id,
        email: user.email,
        username: user.username,
        role: user.role,
        token: token,
    }
}

exports.login = async (userData) => {
    if (!userData.email) {
        throw new Error('Email is required');
    }
    if (!userData.password) {
        throw new Error('Password is required');
    }
    const user = await User.findOne({ email: userData.email });
    if (!user) {
        throw new Error('Invalid email or password');
    }

    const isValid=bcrypt.compare(userData.password, user.password);

    if (!isValid) {
        throw new Error('Invalid email or password');
    }
    const token=jwt.sign({
        userId: user._id,
        email: user.email,
        username: user.username,
        role: user.role,
    }, process.env.JWT_SECRET, { expiresIn: '1d' });

    return {
        userId: user._id,
        email: user.email,
        username: user.username,
        role: user.role,
        token: token,
    }
}