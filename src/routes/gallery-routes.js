const express = require('express');
const router = express.Router();
const galleryController = require('../controllers/gallery-controller');
const multer = require('multer');
const multerConfig = require('../config/multer')
const login = require('../config/login')

router.get('/', galleryController.getImages);
router.post('/', multer(multerConfig).single('file'),galleryController.sendImages);
router.delete('/', login, galleryController.deleteImage);
router.put('/', galleryController.updateViewsImage);
  
module.exports = router;