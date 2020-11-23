const mongoose = require('mongoose');
const Stories = mongoose.model('Admin-stories');

exports.listStories = async (req, res) => {
  try {
    const data = await Stories.find({'approved': false});
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({message: 'Falha ao carregar as histórias.'});
  }
};

exports.deleteStory = async (req, res) => {
    try {
      const data = await Stories.deleteOne({'_id': req.body._id});
      
      res.status(200).send(data);
    } catch (e) {
      res.status(500).send({message: 'Falha ao excluir história.'});
    }
  };

exports.approveStory = async (req, res) => {
    try {
      const data = await Stories.findOne({'_id': req.body._id});

      data.approved = true;

      await data.save();

      res.status(200).send(data);
    } catch(e){
      res.status(500).send({message: 'Falha ao aprovar/desaprovar história'});
    }
}
