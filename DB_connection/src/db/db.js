const mongoose = require('mongoose');

async function connectDB(){

  await mongoose.connect("db_connection_string_uri/halley")

  console.log("DB Connected");
}

module.exports = connectDB;
