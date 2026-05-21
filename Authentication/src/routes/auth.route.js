const express = require('express');
const authController = require('../controllers/auth.controller');

const router = express.Router();

router.post('/register', authController.register);

//Test route to check if cookies are being set correctly
router.get('/test', (req, res) => {
  console.log(req.cookies);
  res.json({
    message: "Test route",
    cookies: req.cookies
  })
})

module.exports = router;