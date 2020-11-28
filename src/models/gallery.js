const mongoose = require('mongoose');
const aws = require('aws-sdk');
const s3 = new aws.S3();
const Schema = mongoose.Schema;

const schema = new Schema({
    name: String,
    size: Number,
    key: String,
    url: String,
    createdAt:{
        type: Date,
        default: Date.now
    },
    description: String,
    credits: String,
    views: Number
}, {
    collection: "gallery"
}
);

schema.pre("remove", function() {
      return s3
        .deleteObject({
          Bucket: 'viascrucis-img',
          Key: this.key
        })
        .promise()
        .then(response => {
          console.log(response.status);
        })
        .catch(response => {
          console.log(response.status);
        });
    
  });

module.exports = mongoose.model("Gallery", schema);