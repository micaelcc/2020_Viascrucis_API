
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    user:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
  },
  {
        collection:"admin_users"
  }

);


module.exports = mongoose.model('Admin_users', schema);
