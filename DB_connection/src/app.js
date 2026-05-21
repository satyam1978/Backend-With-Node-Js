// create server

const express = require('express');
const noteModel = require('./model/note.model');

const app = express();//server instance
//middleware
app.use(express.json());

//POST Method '/notes'
app.post('/note', async (req,res)=>{
  const data = req.body;
  await noteModel.create({
    title: data.title,
    description: data.description
  })

  res.status(201).json({
    message:"Note created successfully"
    })
  });

//GET Method '/notes'
app.get("/note", async (req,res)=>{
  const notes = await noteModel.find();//fetch all notes from DB in an array[]
  res.status(200).json({
    message:"Notes fetched successfully",
    data: notes
  })
})

//DELETE Method '/notes/:id'
app.delete("/note/:id", async (req,res)=>{
  const id = req.params.id;
  await noteModel.findOneAndDelete({
    _id: id
  })
  res.status(200).json({
    message:"Note deleted successfully"
  })
})

//Patch Method '/notes/:id'
app.patch("/note/:id", async (req,res)=>{
  const id = req.params.id;
  const description = req.body.description;

  await noteModel.findOneAndUpdate({_id:id},{description: description})

  res.status(200).json({
    message:"Note updated successfully"
  })
})

module.exports = app;