/*const mongoose = require('mongoose');
const Gallery = mongoose.model('Gallery');

exports.sendImages = async (req, res) => {
  try {
    const image = new Gallery({
      image_data: req.body.image,
      description: req.body.description,
      date: req.body.date,
      views: req.body.views,
      credit: req.body.credit
    });
    console.log(image)
    await image.save();

    res.status(201).send({message: 'Imagem cadastrada com sucesso!'});
  } catch (e) {
    res.status(500).send({message: 'Falha ao cadastrar a imagem.'});
  }
};
exports.getImages = async (req, res) => {
  try {
    const data = await Gallery.find({});
    console.log(data)
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({message: 'Falha ao carregar as imagens.'});
  }
};

exports.addView = async (req, res) => {
  try {
    const data = await Gallery.findOne({'_id': req.body._id});
    
    data.views = req.body.views;
    

    await data.save();

    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({message: 'Falha ao add upvote.'});
  }
};*/
const aws = require('aws-sdk');
const s3 = new aws.S3();
const mongoose = require('mongoose');
const Gallery = mongoose.model('Gallery');
 
exports.getImages = async (req, res) => {
  const posts = await Gallery.find();
  
  return res.json(posts);
};


exports.sendImages = async (req, res) => {
  try{
      const { originalname: name, size, key, location: url = ""} = req.file;

      const post = new Gallery({
          name,
          size,
          key,
          url,
          description: req.body.description,
          views: req.body.views,
          credits: req.body.credits
      });
      console.log(post)

      await post.save();
      return res.json(post);
    } catch(e){
        res.status(500).send({message: 'falha'});
    }
};