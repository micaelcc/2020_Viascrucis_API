const mongoose = require('mongoose');
const AdminUsers = mongoose.model('Admin_users')

require("dotenv").config();
const jwt = require('jsonwebtoken');


exports.login = async (req, res) => {    
        const adminUser = await AdminUsers.findOne({'user': req.body.user, 'password': req.body.password});

        if(!adminUser)        
            return res.status(500).send({error: 'Nao foi possivel logar.'});

        adminUser.password = undefined;

        return res.status(200).send(adminUser);
};

  exports.listAdmins = async (req, res) => {
    try {
      const data = await AdminUsers.find({});

      console.log(data)
      res.status(200).send(data);
    } catch (e) {
      res.status(500).send({message: 'Falha nas credenciais.'});
    }
  };