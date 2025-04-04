const express = require('express');
const { register, login } = require('../controllers/authController');

const router = express.Router();

/**
 * @route   POST /api/auth/register
 * @desc    Registers a new user (Admin or User)
 */
router.post('/register', register);

/**
 * @route   POST /api/auth/login
 * @desc    Logs in a user and returns a JWT token
 */
router.post('/login', login);

module.exports = router;
