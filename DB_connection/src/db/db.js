const mongoose = require('mongoose');

async function connectDB(){

  await mongoose.connect("mongodb+srv://Prj01:pWsGPjKBFonpcnoF@cluster0.8yohpjz.mongodb.net/halley")

  console.log("DB Connected");
}

module.exports = connectDB;