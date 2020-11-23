const express = require('express');
const router = express.Router();
const adminStoriesController = require('../controllers/admin-stories-controller');

router.get('/', adminStoriesController.listStories);
router.put('/', adminStoriesController.approveStory);
router.delete('/', adminStoriesController.deleteStory);


module.exports = router;
