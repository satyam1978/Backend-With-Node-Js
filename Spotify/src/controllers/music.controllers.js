const musicModel = require('../model/music.model');
const albumModel = require('../model/album.model');
const {uploadFile} = require('../services/storage.service');
const jwt = require('jsonwebtoken');

async function createMusic(req, res) {

  const {title} = req.body;
  const file =  req.file;

  const result = await uploadFile(file.buffer.toString('base64'));

  const music = await musicModel.create({
    uri: result.url,
    title,
    artist: req.user.id,
  });

  return res.status(201).json({
    message: 'Music created successfully',
    music:{
      id: music._id,
      uri: music.uri,
      title: music.title,
      artist: music.artist
    }
  });

}

async function createAlbum(req, res) {

    const {title, musicIds} = req.body;

    const album = await albumModel.create({
      title,
      music: musicIds,
      artist: req.user.id
    });

    res.status(201).json({
      message: 'Album created successfully',
      album: {
        id: album._id,
        title: album.title,
        music: album.music,
        artist: album.artist
      }
    });

}


async function getAllMusic(req, res) {

  const musics = await musicModel.find().limit(2).populate('artist', 'username');

  res.status(200).json({
    message: 'Musics fetched successfully',
    musics: musics  
  });
}

async function getAllAlbum(req, res){

  const albums = await albumModel.find().select("title artist -music").populate('music').populate('artist', 'username');

  res.status(200).json({
    message: 'Albums fetched successfully',
    albums: albums
  });
}

async function getAlbumById(req, res){

  const albumId = req.params.ablumid;

  const album = await albumModel.findById(albumId).populate('music').populate('artist', 'username');

  if(!album){
    return res.status(404).json({
      message: 'Album not found'
    });
  }

  return res.status(200).json({
    message: 'Album fetched successfully',
    album: album
  });
}

module.exports = {createMusic, createAlbum, getAllMusic,getAllAlbum, getAlbumById};