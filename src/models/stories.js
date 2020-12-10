
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    firstName:{
        type: String,
        required: true,
        trim: true
    },
    lastName:{
        type: String,
        required: true
    },
    telefone:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    degreeOfKinship:{
        type: String,
        required: true
    },
    firstNameHonor:{
        type: String,
        required: true
    },
    lastNameHonor:{
        type: String,
        required: true
    },
    anoFalecimento:{
        type: String,
        required: true
    },
    anoNascimento:{
        type: String,
        required: true
    },
    textTribute:{
        type: String,
        required: true
    },
    epitafio:{
        type: String,
    },
    bornCity:{
        type: String,
        required: true
    },
    bornState:{
        type: String,
        required: true
    },
    deadCity:{
        type: String,
        required: true
    },
    createdAt: {
        type: String,
        required: true
    },
    deadState:{
        type: String,
        required: true
    },
    approved:{
        type: Boolean
    }
  },
  {
        collection:"stories"
  }

);

module.exports = mongoose.model('Stories', schema);
