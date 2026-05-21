const express = require('express');
const authController = require('../controllers/auth.controllers');

const router = express.Router();

// Register Route
router.post('/register',authController.registerUser);
// Login Route
router.post('/login',authController.loginUser);

router.post('/logout',authController.logoutUser);

module.exports = router;