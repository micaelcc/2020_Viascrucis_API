const express = require('express');
const router = express.Router();
const galleryController = require('../controllers/gallery-controller');
const multer = require('multer');
const multerConfig = require('../config/multer')

router.get('/', galleryController.getImages);
router.post('/', multer(multerConfig).single('file'),galleryController.sendImages);
router.delete('/', galleryController.deleteImage);
  
module.exports = router;