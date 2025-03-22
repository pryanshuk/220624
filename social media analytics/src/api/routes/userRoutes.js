// src/routes/userRoutes.js
const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

/**
 * @route GET /users
 * @desc Get top 5 users with the highest post count
 * @access Public
 */
router.get('/', userController.getTopUsers);

module.exports = router;
