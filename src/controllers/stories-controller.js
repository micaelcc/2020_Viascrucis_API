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
      idade: req.body.idade,
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
    res.status(500).send({message: 'Falha ao cadastrar a história.'});
  }
};
 
 
