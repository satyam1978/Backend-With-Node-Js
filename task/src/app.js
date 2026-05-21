//Create a server

const express = require ('express');

const app = express();
//mideleware
app.use(express.json());

const note = [];

//POST Method '/notes'
app.post('/notes', (req, res)=>{
 note.push(req.body)

 res.status(201).json({
  message:"Note created successfully"
 })
})
//pass:pWsGPjKBFonpcnoF
//PATCH Method '/notes/:id'
app.patch('/notes/:id',(req,res)=>{
  const id = req.params.id;
  const description  = req.body.description;
  note[id].description = description;
   res.status(200).json({
    message:"Note updated successfully"
   })
})

//GET Method '/notes'
app.get('/notes', (req, res)=>{
 res.status(200).json({
  message:"Notes retrieved successfully",
  note: note
 })
})

//DELETE Method '/notes/:id'
app.delete('/notes/:id',(req,res)=>{
  const id = req.params.id;
  delete note[id];
   res.status(200).json({
    message:"Note deleted successfully"
   })
})

module.exports= app;