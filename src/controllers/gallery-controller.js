
const aws = require('aws-sdk');
const s3 = new aws.S3();
const mongoose = require('mongoose');
const Gallery = mongoose.model('Gallery');
 
exports.getImages = async (req, res) => {
  const posts = await Gallery.find();
  
  return res.json(posts);
};


exports.sendImages = async (req, res) => {
  var hj = new Date()
  var data = String(hj.getDate()) + '/' + String(hj.getMonth() + 1) + '/' + String(hj.getFullYear());
  try{

      const { originalname: name, size, filename: key, location: url = ""} = req.file;

      const post = await Gallery.create({
          name,
          size,
          key,
          url,
          createdAt: data,
          description: req.body.description ,
          views: req.body.views,
          credits: req.body.credits
      });
      
      return res.status(200).send(post);
    } catch(e){
        res.status(500).send({error: 'Falha ao enviar imagem.'});
    }
};

exports.deleteImage = async (req, res) => {
  const post = await Gallery.findOne({'_id': req.body._id});

  if(!post)
    return res.send({error: 'Erro ao excluir imagem'})
    
  await post.remove();

  return res.send({message: 'Imagem excluida com sucesso.'});
};

exports.updateViewsImage = async (req, res) => {
  try {
    const image = await Gallery.findOne({'_id': req.body._id})

    image.views++;

    await image.save();
    res.status(200).send(image);
  }catch(e){
    res.status(500).send({error: 'Erro ao atualizar numero de views.'})
  }
}