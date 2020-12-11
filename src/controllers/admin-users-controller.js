const mongoose = require('mongoose');
const AdminUsers = mongoose.model('Admin_users')
const bcrypt = require('bcrypt')
require("dotenv").config();
const jwt = require('jsonwebtoken')


exports.login = async (req, res) => {    
        const adminUser = await AdminUsers.findOne({'user': req.body.user});

        if(!adminUser)        
            return res.status(401).send({error: 'Nao foi possivel logar.'});
        
        bcrypt.compare(req.body.password, adminUser.password, (err, result) =>{
          if(result){
            const token = jwt.sign(
              {id_user: adminUser._id}, 
              process.env.SECRET, 
              {expiresIn: "3m"}
            );
            return res.status(200).send({token, auth: true})
          }
          
          return res.status(401).send({error: 'Nao foi possivel logar.'});
        })
        
};

exports.createAdminUser = async (req, res) => {
  try{
    const cryptPass = bcrypt.hashSync(req.body.password, 10)

    const data = new AdminUsers({
      user: req.body.user,
      password: cryptPass
    })

    await data.save();
  res.status(200).send(data)
  }catch(e){ 
    res.status(500).send({message: 'Falha ao criar user admin.'})
  }

  
}

exports.verifyToken = async (req, res) => {
  try{
    const token = req.headers.authorization.split(' ')[1];
    const decode = jwt.verify(token, process.env.SECRET);
    req.usuario = decode;
    res.status(200).send({auth: true});
  }catch(e){
    res.status(401).send({error: 'Falha na autorização'})
  }
}