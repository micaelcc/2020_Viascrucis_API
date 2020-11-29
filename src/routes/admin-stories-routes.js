const express = require('express');
const router = express.Router();
const adminStoriesController = require('../controllers/admin-stories-controller');
const login = require('../config/login')
router.get('/', adminStoriesController.listStories);
router.put('/', login, adminStoriesController.approveStory);
router.delete('/', login, adminStoriesController.deleteStory);


module.exports = router;
