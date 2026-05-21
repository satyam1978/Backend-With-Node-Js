// create server
 const express = require('express');

 const app = express();

 //create response

 app.get("/", (req, res)=>{
  res.send("Welcome to my server");
 });

 app.get("/about", (req,res)=>{
  res.send("This is about page");
 });

 app.listen(3000);