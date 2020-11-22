const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    approved:{
        type: Boolean
    }
},

{
      collection:"stories"
}

);

module.exports = mongoose.model('Admin-stories', schema);