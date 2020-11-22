const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({

    image_data:{
        type: String
    },
    description: {
        type: String
    },
    date:{
        type: Date
    },
    views: {
        type: Number
    },
    credit:{
        type: String        
    }
},

{
      collection:"gallery"
}

);

module.exports = mongoose.model('Gallery', schema);
