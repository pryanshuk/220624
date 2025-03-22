
// src/routes/postRoutes.js
const express = require('express');
const postController = require('../controllers/postController');

const router = express.Router();

/**
 * @route GET /posts
 * @desc Get posts based on type (popular or latest)
 * @access Public
 */
router.get('/', postController.getPosts);

module.exports = router;