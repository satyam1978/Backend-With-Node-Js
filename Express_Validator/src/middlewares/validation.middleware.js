const {body, validationResult} = require('express-validator');

async function validateResult(req, res, next) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ 
      
      errors: errors.array() });
  }
  next();
}


const registerUserValidationRules = [

  body('username')
    .isString()
    .withMessage('Username must be a string')
    .isLength({ min: 3, max: 20 })
    .withMessage('Username must be at least 3 and atmost 20 characters long')
    .notEmpty()
    .withMessage('Username is required'),

  body('email')
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Invalid email format'),

  body('password')
    .notEmpty()
    .withMessage('Password is required')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long'),

    validateResult
]

module.exports = {
  registerUserValidationRules
}

