const userModel = require("../model/user.model");
const jwt = require('jsonwebtoken');

async function register(req, res) {
  const { username, email, password } = req.body;

  const userAlreadyExists = await userModel.findOne({ email });

  //Verify if user already exists
  if (userAlreadyExists) {
    return res.status(409).json({
      message: "User already exists"
    });
  }

  const user = await userModel.create({ username, email, password });

  


  const token = jwt.sign({
    id: user._id
  }, process.env.JWT_SECRET)

  res.cookie('token', token)

  res.status(201).json({
    message: "User registered successfully",
    user
  });


}

module.exports = { register };