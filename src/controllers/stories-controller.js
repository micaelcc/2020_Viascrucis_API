const mongoose = require('mongoose');
const Stories = mongoose.model('Stories');

exports.listStories = async (req, res) => {
  try {
    const data = await Stories.find({'approved': true});
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({message: 'Falha ao carregar as histórias.'});
  }
};

// create
exports.createStory = async (req, res) => {
  var hj = new Date()
  var data = String(hj.getDate()) + '/' + String(hj.getMonth() + 1) + '/' + String(hj.getFullYear());

  try {
    const story = new Stories({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      telefone: req.body.telefone,
      email: req.body.email,
      degreeOfKinship: req.body.degreeOfKinship,
      
      firstNameHonor: req.body.firstNameHonor,
      lastNameHonor: req.body.lastNameHonor,
      anoFalecimento: req.body.anoFalecimento,
      anoNascimento: req.body.anoNascimento,
      textTribute: req.body.textTribute,
      epitafio: req.body.epitafio,
      createdAt: data,
      bornCity: req.body.bornCity,
      bornState: req.body.bornState,
      deadCity: req.body.deadCity,
      deadState: req.body.deadState,

      approved: req.body.approved
      
    });

    console.log(story)

    await story.save();

    res.status(201).send({message: 'História cadastrada com sucesso!'});
  } catch (e) {
    res.status(500).send({error: 'Falha ao cadastrar a história.'});
  }
};
 
exports.listStoriesAwait = async (req, res) => {
  try {
    const data = await Stories.find({'approved': false});
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({error: 'Falha ao carregar as histórias.'});
  }
};

exports.deleteStory = async (req, res) => {
    try {
      const data = await Stories.deleteOne({'_id': req.body._id});

      res.status(200).send({message: 'Historia reprovada.'});
    } catch (e) {
      res.status(500).send({error: 'Falha ao excluir história.'});
    }
  };

exports.approveStory = async (req, res) => {
    try {
      const data = await Stories.findOne({'_id': req.body._id});

      data.approved = true;

      await data.save();

      res.status(200).send(data);
    } catch(e){
      res.status(500).send({error: 'Falha ao aprovar/desaprovar história'});
    }
}
