// Create server

const express = require('express');
const multer = require('multer');
const postModel = require('./model/post.model');
const uploadFile = require('./services/storage.service');
const cors = require('cors');

const app = express();//instance

//Middleware
app.use(cors());
app.use(express.json());

const upload = multer({ storage: multer.memoryStorage() });//for handling form data



app.post('/create_post', upload.single("image"), async (req, res)=>{

  console.log(req.body);
  console.log(req.file);

  const result = await uploadFile(req.file.buffer);

  const post = await postModel.create({
    image: result.url,
    caption: req.body.caption
  })
  return res.status(201).json({
    message: "Post created successfully",
    post
  })


});

app.get('/posts', async(req,res)=>{

  const posts = await postModel.find();

  return res.status(200).json({
    message: "Posts fetched successfully",
    posts
  })
})

module.exports = app;