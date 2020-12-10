const multer = require('multer');
const path = require('path');
const crypto = require('crypto');
const aws = require('aws-sdk')
const multerS3 = require('multer-s3');


const storageTypes = {
    s3: multerS3({
        s3: new aws.S3(),
        bucket: 'viascrucis',
        contentType: multerS3.AUTO_CONTENT_TYPE,
        acl: 'public-read',
        key: (rec, file, cb) => {
            crypto.randomBytes(16, (err, hash) => {
                if(err) cb(err);

                const fileName = `${hash.toString('hex')}-${file.originalname}`;

                cb(null, fileName);
            })
        },
        
        

    })
}

module.exports = {
    storage: storageTypes["s3"],
    limits:{
        fileSize: 10 * 1024 * 1024,
    },
    fileFilter:(req, file, cb) => {
        const allowedMimes = [
            'image/jpeg',
            'image/pjpeg',
            'image/png',
            'image/gif'
        ];

        if(allowedMimes.includes(file.mimetype)){
            cb(null, true);
        }else{
            cb(new Error("Invalid file type."));
        }
    },
    
};
