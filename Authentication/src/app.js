//create server

const express = require('express');
const authRoute = require('./routes/auth.route');
const postRoute = require('./routes/post.routes');
const cookieParser = require('cookie-parser');

const app = express();//instance of express

//middleware
app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoute);
app.use('/api/post', postRoute);

module.exports = app;