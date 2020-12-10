const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    views: {
      type: Number
    }
  },
  {
        collection:"book"
  }

);


module.exports = mongoose.model('Book', schema);